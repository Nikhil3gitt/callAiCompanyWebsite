import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const sora = Sora({ 
  subsets: ["latin"],
  variable: "--font-sora",
})

export const metadata: Metadata = {
  title: "callAI - AI that moves your business",
  description: "From automation to decision-making—tailored intelligence for startups to enterprises. Request your AI blueprint today.",
  keywords: ["AI", "automation", "machine learning", "business intelligence", "artificial intelligence"],
  authors: [{ name: "callAI" }],
  creator: "callAI",
  publisher: "callAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://callai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://callai.com",
    title: "callAI - AI that moves your business",
    description: "From automation to decision-making—tailored intelligence for startups to enterprises.",
    siteName: "callAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "callAI - AI that moves your business",
    description: "From automation to decision-making—tailored intelligence for startups to enterprises.",
    creator: "@callai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
