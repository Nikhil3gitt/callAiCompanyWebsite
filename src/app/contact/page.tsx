"use client"

import * as React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, CheckCircle, Calendar, Clock } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  role: z.string().min(2, "Role is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  budget: z.string().min(1, "Please select a budget range"),
  consent: z
    .boolean()
    .refine((val) => val === true, "You must agree to our privacy policy"),
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
    details: "contact.callaiservice@gmail.com",
    description: "We will respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Address",
    details: "Toronto, Canada",
    description: "Remote-first team anchored in the Toronto tech community",
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
        throw new Error("Something went wrong. Please try again.")
      }

      setIsSubmitted(true)
      reset()
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Unexpected error occurred"
      )
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
        throw new Error("Unable to schedule right now. Please try again later.")
      }

      setScheduleSuccess(true)
      resetSchedule()
    } catch (error) {
      setScheduleError(
        error instanceof Error ? error.message : "Unexpected error occurred"
      )
    } finally {
      setIsScheduling(false)
    }
  }

  return (
    <div className="min-h-screen">
      <section className="section-padding bg-gradient-to-br from-surface-dark via-background to-surface-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
              Contact <span className="gradient-text">callAI</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Let&apos;s build the future of your business together. Reach out and we&apos;ll tailor an engagement to your goals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We keep it simple. Send us a note or schedule a call.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10">
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
                      <Input placeholder="Your name" {...register("name")} />
                      {errors.name && (
                        <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input
                        type="email"
                        placeholder="you@company.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Company</label>
                      <Input placeholder="Company name" {...register("company")} />
                      {errors.company && (
                        <p className="text-sm text-red-600 mt-1">
                          {errors.company.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Role</label>
                      <Input placeholder="Your role" {...register("role")} />
                      {errors.role && (
                        <p className="text-sm text-red-600 mt-1">{errors.role.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Budget</label>
                    <select
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                      {...register("budget")}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.budget && (
                      <p className="text-sm text-red-600 mt-1">{errors.budget.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium">How can we help?</label>
                    <Textarea
                      rows={5}
                      placeholder="Share your goals, challenges, and what success looks like"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <label className="flex items-start space-x-3 text-sm text-muted-foreground">
                    <input type="checkbox" className="mt-1" {...register("consent")} />
                    <span>
                      I agree to the privacy policy and allow callAI to store and process my information.
                    </span>
                  </label>
                  {errors.consent && (
                    <p className="text-sm text-red-600">{errors.consent.message}</p>
                  )}

                  {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
                  {isSubmitted && (
                    <p className="text-sm text-green-600">
                      Thanks! We will be in touch within one business day.
                    </p>
                  )}

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How to reach us</CardTitle>
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

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Book a call</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Prefer to plan ahead? Choose a slot that works best for your team.
                </p>
                <form
                  onSubmit={handleScheduleSubmit(onScheduleSubmit)}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <Input
                      {...registerSchedule("name")}
                      placeholder="Your name"
                    />
                    {scheduleErrors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {scheduleErrors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input
                      {...registerSchedule("email")}
                      type="email"
                      placeholder="you@company.com"
                    />
                    {scheduleErrors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {scheduleErrors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium">Call type</label>
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
                    {scheduleErrors.callType && (
                      <p className="text-sm text-red-600 mt-1">
                        {scheduleErrors.callType.message}
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Preferred date</label>
                      <Input {...registerSchedule("date")} type="date" />
                      {scheduleErrors.date && (
                        <p className="text-sm text-red-600 mt-1">
                          {scheduleErrors.date.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium">Preferred time (Eastern Time)</label>
                      <select
                        {...registerSchedule("time")}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground"
                      >
                        <option value="" disabled>Select a time</option>
                        <option value="9:00 AM ET">9:00 AM</option>
                        <option value="9:30 AM ET">9:30 AM</option>
                        <option value="10:00 AM ET">10:00 AM</option>
                        <option value="10:30 AM ET">10:30 AM</option>
                        <option value="11:00 AM ET">11:00 AM</option>
                        <option value="11:30 AM ET">11:30 AM</option>
                        <option value="12:00 PM ET">12:00 PM</option>
                        <option value="12:30 PM ET">12:30 PM</option>
                        <option value="1:00 PM ET">1:00 PM</option>
                        <option value="1:30 PM ET">1:30 PM</option>
                        <option value="2:00 PM ET">2:00 PM</option>
                        <option value="2:30 PM ET">2:30 PM</option>
                        <option value="3:00 PM ET">3:00 PM</option>
                        <option value="3:30 PM ET">3:30 PM</option>
                        <option value="4:00 PM ET">4:00 PM</option>
                        <option value="4:30 PM ET">4:30 PM</option>
                        <option value="5:00 PM ET">5:00 PM</option>
                      </select>
                      {scheduleErrors.time && (
                        <p className="text-sm text-red-600 mt-1">
                          {scheduleErrors.time.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Additional notes</label>
                    <Textarea
                      {...registerSchedule("notes")}
                      rows={3}
                      placeholder="Share any context or topics you would like to cover"
                    />
                    {scheduleErrors.notes && (
                      <p className="text-sm text-red-600 mt-1">
                        {scheduleErrors.notes.message}
                      </p>
                    )}
                  </div>

                  {scheduleError && (
                    <p className="text-sm text-red-600">{scheduleError}</p>
                  )}
                  {scheduleSuccess && (
                    <p className="text-sm text-green-600">
                      Thanks! We will send a confirmation shortly.
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="outline"
                    className="w-full"
                    disabled={isScheduling}
                  >
                    {isScheduling ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2" />
                        Scheduling...
                      </>
                    ) : (
                      <>
                        <Clock className="h-4 w-4 mr-2" />
                        Schedule meeting
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Quick response</h3>
                  <p className="text-sm text-muted-foreground">
                    We typically respond to all inquiries within one business day.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
