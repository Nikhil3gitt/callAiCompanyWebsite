"use client"

import * as React from "react"
import { useState } from "react"
import { Send, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { demoData } from "@/lib/demo-mocks"

export function SmartSupportBotDemo() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Simple intent detection
    const lowerInput = input.toLowerCase()
    let detectedIntent = 'general'
    
    if (lowerInput.includes('bill') || lowerInput.includes('payment') || lowerInput.includes('invoice')) {
      detectedIntent = 'billing'
    } else if (lowerInput.includes('bug') || lowerInput.includes('error') || lowerInput.includes('technical')) {
      detectedIntent = 'technical'
    } else if (lowerInput.includes('account') || lowerInput.includes('profile') || lowerInput.includes('settings')) {
      detectedIntent = 'account'
    }
    
    setResponse(demoData.smartSupportBot.responses[detectedIntent as keyof typeof demoData.smartSupportBot.responses])
    setIsLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Bot className="h-4 w-4" />
        <span>AI Support Bot Demo</span>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about billing, technical issues, or account..."
            className="flex-1 px-3 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            disabled={isLoading}
          />
          <Button type="submit" size="sm" disabled={isLoading || !input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>

      {response && (
        <div className="p-3 bg-muted rounded-lg">
          <div className="text-sm font-medium mb-1">AI Response:</div>
          <div className="text-sm text-muted-foreground">{response}</div>
        </div>
      )}

      {isLoading && (
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          <span>Analyzing your request...</span>
        </div>
      )}
    </div>
  )
}
