"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  Brain, 
  Heart, 
  Rocket,
  LucideIcon 
} from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"

interface ValuePropCardProps {
  icon: string
  title: string
  description: string
  learnMoreHref: string
  delay?: number
}

const iconMap: Record<string, LucideIcon> = {
  Zap,
  Brain,
  Heart,
  Rocket
}

export function ValuePropCard({ 
  icon, 
  title, 
  description, 
  learnMoreHref,
  delay = 0 
}: ValuePropCardProps) {
  const Icon = iconMap[icon] || Zap
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card className="h-full card-hover group">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {description}
              </p>
              <Link
                href={learnMoreHref}
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center"
              >
                Learn more
                <svg
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
