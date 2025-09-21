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

const description = "From automation to decision-making, we deliver tailored intelligence for startups and enterprises. Request your AI blueprint today."

export const metadata: Metadata = {
  title: "callAI - AI that moves your business",
  description,
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
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://callai.com",
    title: "callAI - AI that moves your business",
    description,
    siteName: "callAI",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "callAI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "callAI - AI that moves your business",
    description,
    creator: "@callai",
    images: ["/logo.svg"],
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
