"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowDown, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContent = () => {
    const element = document.getElementById("content")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-surface-dark via-background to-surface-dark" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6">
            <span className="gradient-text">AI that moves</span>
            <br />
            your business
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            From automation to decision-making, we build tailored intelligence for startups and enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact">
                Request Your AI Blueprint
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="ghost" size="lg" className="text-lg px-8 py-6">
              <Link href="/projects">See Projects</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors group"
            aria-label="Scroll to content"
          >
            <span className="text-sm">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
