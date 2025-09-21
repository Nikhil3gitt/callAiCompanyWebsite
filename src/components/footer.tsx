import Link from "next/link"
import { Github, Linkedin, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Process", href: "/process" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "GitHub", href: "#", icon: Github },
  { name: "YouTube", href: "#", icon: Youtube },
]

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent" />
              <span className="text-xl font-bold font-heading">callAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI that moves your business forward. From automation to decision-making—tailored intelligence for startups to enterprises.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Button key={item.name} variant="ghost" size="icon" asChild>
                  <Link href={item.href}>
                    <item.icon className="h-4 w-4" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest insights on AI and automation.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 callAI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

