"use client"

import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Calendar,
  Clock,
} from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(2, "Role is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  consent: z.boolean().refine((val) => val === true, "You must agree to our privacy policy"),
})

const scheduleFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  callType: z.string().min(1, "Please choose a call type"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactFormSchema>
type ScheduleFormData = z.infer<typeof scheduleFormSchema>

const budgetRanges = [
  "Under $10K",
  "$10K - $50K",
  "$50K - $100K",
  "$100K - $500K",
  "$500K+",
  "Not sure yet",
]

const callTypeOptions = [
  "15-minute discovery call",
  "30-minute strategy session",
  "45-minute deep dive",
]

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "hello@callai.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri, 9AM-6PM EST",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "San Francisco, CA",
    description: "Remote-first, global team",
  },
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [isScheduling, setIsScheduling] = useState(false)
  const [scheduleSuccess, setScheduleSuccess] = useState(false)
  const [scheduleError, setScheduleError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const {
    register: registerSchedule,
    handleSubmit: handleScheduleSubmit,
    formState: { errors: scheduleErrors },
    reset: resetSchedule,
  } = useForm<ScheduleFormData>({
    resolver: zodResolver(scheduleFormSchema),
    defaultValues: {
      callType: callTypeOptions[0],
      name: "",
      email: "",
      date: "",
      time: "",
      notes: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "contact", data }),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(result?.message || "Failed to send message")
      }

      setIsSubmitted(true)
      reset()
    } catch (error) {
      console.error("Contact form submission failed", error)
      setErrorMessage("We couldn't send your message right now. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const onScheduleSubmit = async (data: ScheduleFormData) => {
    setIsScheduling(true)
    setScheduleError(null)
    setScheduleSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "schedule", data }),
      })

      if (!response.ok) {
        const result = await response.json().catch(() => ({}))
        throw new Error(result?.message || "Failed to schedule meeting")
      }

      setScheduleSuccess(true)
      resetSchedule({ callType: callTypeOptions[0], name: "", email: "", date: "", time: "", notes: "" })
    } catch (error) {
      console.error("Scheduling request failed", error)
      setScheduleError("We couldn't schedule the meeting. Please try again or email us directly.")
    } finally {
      setIsScheduling(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto"
        >
          <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p className="text-muted-foreground mb-6">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-surface-dark via-background to-surface-dark">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Ready to transform your business with AI? Let's discuss your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      <div className="container section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
          {/* Contact Form */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tell us about your project</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <Input {...register("name")} placeholder="Your name" />
                      {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input {...register("email")} type="email" placeholder="you@company.com" />
                      {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Company</label>
                      <Input {...register("company")} placeholder="Company name" />
                      {errors.company && <p className="text-sm text-red-600 mt-1">{errors.company.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Role</label>
                      <Input {...register("role")} placeholder="Your role" />
                      {errors.role && <p className="text-sm text-red-600 mt-1">{errors.role.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Budget</label>
                    <select
                      {...register("budget")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                    >
                      <option value="">Select a budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>}
                  </div>

                  <div>
                    <label className="text-sm font-medium">Project Details</label>
                    <Textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe your business challenges, goals, and how AI might help..."
                    />
                    {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
                  </div>

                  <div className="flex items-start space-x-2">
                    <input {...register("consent")} type="checkbox" className="mt-1" />
                    <label className="text-sm text-muted-foreground">
                      I agree to the{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>{" "}
                      and consent to being contacted about this project.
                    </label>
                  </div>
                  {errors.consent && <p className="text-sm text-red-600">{errors.consent.message}</p>}

                  {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}

                  <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Calendar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-sm text-muted-foreground">{info.details}</div>
                      <div className="text-xs text-muted-foreground">{info.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Calendar Booking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book a Call</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to schedule a call? Choose a time that works for you.
                </p>
                <form onSubmit={handleScheduleSubmit(onScheduleSubmit)} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input {...registerSchedule("name")} placeholder="Your name" />
                    {scheduleErrors.name && <p className="text-sm text-red-600 mt-1">{scheduleErrors.name.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input {...registerSchedule("email")} type="email" placeholder="you@company.com" />
                    {scheduleErrors.email && <p className="text-sm text-red-600 mt-1">{scheduleErrors.email.message}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Call Type</label>
                    <select
                      {...registerSchedule("callType")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                    >
                      {callTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {scheduleErrors.callType && <p className="text-sm text-red-600 mt-1">{scheduleErrors.callType.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Preferred Date</label>
                      <Input {...registerSchedule("date")} type="date" />
                      {scheduleErrors.date && <p className="text-sm text-red-600 mt-1">{scheduleErrors.date.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Preferred Time</label>
                      <Input {...registerSchedule("time")} type="time" />
                      {scheduleErrors.time && <p className="text-sm text-red-600 mt-1">{scheduleErrors.time.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Additional Notes</label>
                    <Textarea
                      {...registerSchedule("notes")}
                      rows={3}
                      placeholder="Share any context or topics you'd like to cover"
                    />
                    {scheduleErrors.notes && <p className="text-sm text-red-600 mt-1">{scheduleErrors.notes.message}</p>}
                  </div>

                  {scheduleError && <p className="text-sm text-red-600">{scheduleError}</p>}
                  {scheduleSuccess && (
                    <p className="text-sm text-green-600">Thanks! We'll send a confirmation shortly.</p>
                  )}

                  <Button type="submit" variant="outline" className="w-full" disabled={isScheduling}>
                    {isScheduling ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        <Calendar className="h-4 w-4 mr-2" />
                        Schedule Meeting
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within 24 hours, often much sooner.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

