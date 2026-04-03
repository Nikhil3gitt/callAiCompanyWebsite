"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Eye, 
  Heart, 
  CheckCircle
} from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To democratize AI technology and make it accessible to businesses of all sizes, enabling them to compete and thrive in the digital age.",
    details: "We believe that every business, regardless of size or industry, should have access to cutting-edge AI solutions that can transform their operations and drive growth."
  },
  {
    icon: Eye,
    title: "Vision", 
    description: "A world where AI seamlessly integrates into every business process, creating unprecedented efficiency and innovation opportunities.",
    details: "We envision a future where AI is not just a tool, but a fundamental part of how businesses operate, think, and grow."
  },
  {
    icon: Heart,
    title: "Values",
    description: "We are committed to ethical AI development, transparency, and delivering measurable value to our clients.",
    details: "Our core values guide everything we do: integrity, innovation, collaboration, and a relentless focus on client success."
  }
]

const stats = [
  {
    number: "30+",
    label: "AI Projects Delivered",
    description: "Successfully implemented across various industries"
  },
  {
    number: "95%",
    label: "Client Satisfaction",
    description: "Based on post-project surveys"
  },
  {
    number: "15+",
    label: "Team Members",
    description: "AI specialists, engineers, and consultants"
  },
  {
    number: "3x",
    label: "Average ROI",
    description: "Return on investment for our clients"
  }
]

const partners = [
  "OpenAI", "Microsoft Azure", "Google Cloud", "AWS", "LangChain", "Hugging Face"
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-surface-dark via-background to-surface-dark">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
              About <span className="gradient-text">callAI</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a team of AI specialists, engineers, and consultants dedicated to helping businesses 
              harness the power of artificial intelligence. Since 2020, we've been at the forefront of 
              AI innovation, delivering solutions that drive real business value.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full card-hover group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {value.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {value.details}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Our <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              callAI started as a small consulting practice in Toronto, helping local businesses explore
              what AI could actually do for them — not the hype, but the practical stuff. Over time,
              word spread. What began as one-off projects turned into longer partnerships, and our team
              grew alongside the work. Today we focus on the same thing we did on day one: understanding
              a business&apos;s real problems first, then building AI that solves them. No buzzwords, no
              over-promises — just clear thinking and solid engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Tech & Partners */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
              Technologies We <span className="gradient-text">Use</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with leading AI and cloud platforms to deliver the best solutions for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors">
                  {partner}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6">
              Why Choose <span className="gradient-text">callAI</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We combine deep technical expertise with business acumen to deliver AI solutions that actually work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Proven Expertise</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team includes PhD-level AI researchers and experienced engineers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Business Focus</h3>
                    <p className="text-sm text-muted-foreground">
                      We prioritize ROI and measurable business outcomes over technical complexity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">End-to-End Support</h3>
                    <p className="text-sm text-muted-foreground">
                      From strategy to deployment to ongoing optimization, we're with you every step.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Rapid Deployment</h3>
                    <p className="text-sm text-muted-foreground">
                      Our proven process gets you from idea to production in weeks, not months.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Scalable Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Built to grow with your business, from startup to enterprise scale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Ongoing Partnership</h3>
                    <p className="text-sm text-muted-foreground">
                      We're not just vendors—we're long-term partners in your AI journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and see how our expertise can help you achieve your AI goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/40 bg-white/10 hover:bg-white/20 hover:text-white">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
