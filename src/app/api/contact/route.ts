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
  const textNotes = notes ? `\nNotes:\n${notes}` : ""
  const htmlNotes = notes ? `<p><strong>Notes:</strong></p><p>${notes.replace(/\n/g, "<br/>")}</p>` : ""
  const text = `A new call has been scheduled.\n\nName: ${name}\nEmail: ${email}\nCall Type: ${callType}\nPreferred Date: ${date}\nPreferred Time: ${time}${textNotes}`
  const html = `<p>A new call has been scheduled.</p>
    <p><strong>Name:</strong> ${name}<br/>
    <strong>Email:</strong> ${email}<br/>
    <strong>Call Type:</strong> ${callType}<br/>
    <strong>Preferred Date:</strong> ${date}<br/>
    <strong>Preferred Time:</strong> ${time}</p>
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
