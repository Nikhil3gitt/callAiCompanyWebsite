"use client"

import * as React from "react"
import { useState } from "react"
import { Mail, FileText, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { demoData, generateSummary } from "@/lib/demo-mocks"

export function EmailSummarizerDemo() {
  const [selectedEmail, setSelectedEmail] = useState("")
  const [summary, setSummary] = useState<string[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSummarize = async () => {
    if (!selectedEmail.trim()) return

    setIsProcessing(true)
    
    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const result = generateSummary(selectedEmail)
    setSummary(result)
    setIsProcessing(false)
  }

  const handleSampleEmail = (email: string) => {
    setSelectedEmail(email)
    setSummary([])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Mail className="h-4 w-4" />
        <span>Email Summarizer Demo</span>
      </div>
      
      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium mb-2 block">Select Sample Email:</label>
          <div className="space-y-2">
            {demoData.emailSummarizer.sampleEmails.map((email, index) => (
              <button
                key={index}
                onClick={() => handleSampleEmail(email)}
                className="w-full text-left p-3 text-sm border border-input rounded-md hover:bg-muted transition-colors"
              >
                <div className="font-medium mb-1">Email {index + 1}</div>
                <div className="text-muted-foreground line-clamp-2">
                  {email.substring(0, 100)}...
                </div>
              </button>
            ))}
          </div>
        </div>

        {selectedEmail && (
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Email Content:</label>
              <div className="p-3 bg-muted rounded-md text-sm max-h-32 overflow-y-auto">
                {selectedEmail}
              </div>
            </div>

            <Button
              onClick={handleSummarize}
              disabled={isProcessing}
              className="w-full"
            >
              {isProcessing ? (
                <>
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                  Summarizing...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Summary
                </>
              )}
            </Button>

            {summary.length > 0 && (
              <div className="p-3 bg-primary/5 border border-primary/20 rounded-md">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Executive Summary</span>
                </div>
                <ul className="space-y-1 text-sm">
                  {summary.map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
