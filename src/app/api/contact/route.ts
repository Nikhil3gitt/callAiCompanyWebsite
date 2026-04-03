import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactPayload {
  type: "contact"
  data: {
    name: string
    email: string
    company: string
    role: string
    message: string
    budget: string
  }
}

interface SchedulePayload {
  type: "schedule"
  data: {
    name: string
    email: string
    callType: string
    date: string
    time: string
    notes?: string
  }
}

type RequestPayload = ContactPayload | SchedulePayload

function ensureEnvVariable(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function createTransporter() {
  const host = ensureEnvVariable("SMTP_HOST")
  const port = Number(ensureEnvVariable("SMTP_PORT"))
  const user = ensureEnvVariable("SMTP_USER")
  const pass = ensureEnvVariable("SMTP_PASS")

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE === "true" || port === 465,
    auth: {
      user,
      pass,
    },
  })
}

function convertTimeToIST(dateStr: string, timeStr: string) {
  const cleanTime = timeStr.replace(/ ET$/i, "").trim()
  let hours = 0
  let minutes = 0
  const ampmMatch = cleanTime.match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i)
  
  if (ampmMatch) {
    hours = parseInt(ampmMatch[1], 10)
    minutes = parseInt(ampmMatch[2], 10)
    const ampm = ampmMatch[3].toUpperCase()
    if (ampm === "PM" && hours < 12) hours += 12
    if (ampm === "AM" && hours === 12) hours = 0
  } else {
    const parts = cleanTime.split(":")
    if (parts.length >= 2) {
      hours = parseInt(parts[0], 10)
      minutes = parseInt(parts[1], 10)
    }
  }

  const dateParts = dateStr.split("-").map(Number)
  const naiveDate = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], hours, minutes))
  
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Toronto',
    timeZoneName: 'shortOffset'
  })
  const parts = formatter.formatToParts(naiveDate)
  const tzPart = parts.find(p => p.type === 'timeZoneName')?.value || 'GMT-5'
  
  let torontoOffsetStr = tzPart.replace('GMT', '')
  if (torontoOffsetStr === '') torontoOffsetStr = '+0'
  const offsetParts = torontoOffsetStr.split(':')
  const torontoOffsetHours = parseInt(offsetParts[0], 10)
  const diffHours = 5.5 - torontoOffsetHours

  const istDate = new Date(naiveDate.getTime() + diffHours * 60 * 60 * 1000)

  const formatIST = (d: Date) => {
    let h = d.getUTCHours()
    const m = d.getUTCMinutes()
    const ampm = h >= 12 ? 'PM' : 'AM'
    h = h % 12
    h = h ? h : 12
    const mStr = m < 10 ? '0' + m : m
    return `${h}:${mStr} ${ampm}`
  }

  const formatISTDate = (d: Date) => {
    return `${d.getUTCFullYear()}-${String(d.getUTCMonth() + 1).padStart(2, '0')}-${String(d.getUTCDate()).padStart(2, '0')}`
  }

  return {
    canadian: `${cleanTime} (Eastern Time, ET)`,
    indian: `${formatISTDate(istDate)} ${formatIST(istDate)} (IST)`
  }
}

function buildEmail(payload: RequestPayload) {
  const to = process.env.CONTACT_EMAIL_TO || process.env.CONTACT_EMAIL || ensureEnvVariable("SMTP_USER")
  const from = process.env.CONTACT_EMAIL_FROM || process.env.SMTP_USER || to

  if (payload.type === "contact") {
    const { name, email, company, role, message, budget } = payload.data
    const subject = `New contact request from ${name}`
    const text = `A new contact form submission has been received.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nRole: ${role}\nBudget: ${budget}\n\nMessage:\n${message}`
    const html = `<p>A new contact form submission has been received.</p>
      <p><strong>Name:</strong> ${name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Company:</strong> ${company}<br/>
      <strong>Role:</strong> ${role}<br/>
      <strong>Budget:</strong> ${budget}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br/>")}</p>`

    return { to, from, replyTo: email, subject, text, html }
  }

  const { name, email, callType, date, time, notes } = payload.data
  const subject = `New call scheduled by ${name}`
  const times = convertTimeToIST(date, time)
  const textNotes = notes ? `\nNotes:\n${notes}` : ""
  const htmlNotes = notes ? `<p><strong>Notes:</strong></p><p>${notes.replace(/\n/g, "<br/>")}</p>` : ""
  
  const text = `A new call has been scheduled.\n\nName: ${name}\nEmail: ${email}\nCall Type: ${callType}\nPreferred Date (Canada/ET): ${date}\nPreferred Time (Canada/ET): ${times.canadian}\nEquivalent Time (India/IST): ${times.indian}${textNotes}`
  const html = `<p>A new call has been scheduled.</p>
    <p><strong>Name:</strong> ${name}<br/>
    <strong>Email:</strong> ${email}<br/>
    <strong>Call Type:</strong> ${callType}<br/>
    <strong>Preferred Date:</strong> ${date}<br/>
    <strong>Time (Canada/ET):</strong> ${times.canadian}<br/>
    <strong>Time (India/IST):</strong> ${times.indian}</p>
    ${htmlNotes}`

  return { to, from, replyTo: email, subject, text, html }
}

export async function POST(request: Request) {
  let payload: RequestPayload

  try {
    payload = await request.json()
  } catch (error) {
    return NextResponse.json({ message: "Invalid JSON payload" }, { status: 400 })
  }

  if (!payload || (payload.type !== "contact" && payload.type !== "schedule")) {
    return NextResponse.json({ message: "Invalid request type" }, { status: 400 })
  }

  try {
    const transporter = createTransporter()
    const email = buildEmail(payload)

    await transporter.sendMail({
      to: email.to,
      from: email.from,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email", error)
    const message = error instanceof Error ? error.message : "Unknown error"
    return NextResponse.json({ message: "Failed to send email", details: message }, { status: 500 })
  }
}
