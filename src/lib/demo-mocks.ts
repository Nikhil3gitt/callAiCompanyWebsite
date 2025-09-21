// Mock data and utilities for mini demos

export interface DemoData {
  smartSupportBot: {
    intents: string[]
    responses: Record<string, string>
  }
  invoiceAutomation: {
    sampleData: {
      vendor: string
      total: number
      date: string
      items: Array<{ description: string; amount: number }>
    }
  }
  demandForecast: {
    categories: string[]
    data: Record<string, Array<{ week: string; demand: number }>>
  }
  emailSummarizer: {
    sampleEmails: string[]
  }
  pricingOptimizer: {
    defaultValues: {
      cost: number
      margin: number
      elasticity: number
    }
  }
  opsAnomalyAlerts: {
    normalData: Array<{ timestamp: string; value: number }>
    spikeData: Array<{ timestamp: string; value: number }>
  }
}

export const demoData: DemoData = {
  smartSupportBot: {
    intents: ['billing', 'technical', 'account', 'general'],
    responses: {
      billing: "I can help you with billing questions. Let me check your account status and recent transactions.",
      technical: "I'll assist you with technical issues. Please describe the problem you're experiencing.",
      account: "I can help you manage your account settings, update information, or resolve account-related issues.",
      general: "I'm here to help with any questions you might have. How can I assist you today?"
    }
  },
  invoiceAutomation: {
    sampleData: {
      vendor: "Acme Corp",
      total: 2450.00,
      date: "2024-01-15",
      items: [
        { description: "Software License", amount: 1200.00 },
        { description: "Consulting Services", amount: 1250.00 }
      ]
    }
  },
  demandForecast: {
    categories: ['Electronics', 'Clothing', 'Home & Garden', 'Books'],
    data: {
      'Electronics': [
        { week: 'Week 1', demand: 120 },
        { week: 'Week 2', demand: 135 },
        { week: 'Week 3', demand: 128 },
        { week: 'Week 4', demand: 142 },
        { week: 'Next 4 weeks', demand: 155 }
      ],
      'Clothing': [
        { week: 'Week 1', demand: 89 },
        { week: 'Week 2', demand: 95 },
        { week: 'Week 3', demand: 92 },
        { week: 'Week 4', demand: 98 },
        { week: 'Next 4 weeks', demand: 105 }
      ],
      'Home & Garden': [
        { week: 'Week 1', demand: 67 },
        { week: 'Week 2', demand: 71 },
        { week: 'Week 3', demand: 69 },
        { week: 'Week 4', demand: 74 },
        { week: 'Next 4 weeks', demand: 78 }
      ],
      'Books': [
        { week: 'Week 1', demand: 45 },
        { week: 'Week 2', demand: 48 },
        { week: 'Week 3', demand: 46 },
        { week: 'Week 4', demand: 51 },
        { week: 'Next 4 weeks', demand: 54 }
      ]
    }
  },
  emailSummarizer: {
    sampleEmails: [
      "Hi team, I wanted to update everyone on our Q4 progress. We've successfully launched three new features, increased user engagement by 25%, and are on track to meet our revenue targets. The marketing campaign has been particularly successful, driving 40% more signups than expected. However, we need to address the customer support backlog which has grown to 150 tickets. I suggest we hire two additional support staff and implement a new ticketing system by month-end.",
      "Meeting reminder: Our weekly standup is tomorrow at 9 AM. Please prepare your updates on current sprint progress, any blockers, and next week's priorities. We'll also discuss the new client onboarding process and review the updated project timeline. Don't forget to bring your laptops for the demo session.",
      "Budget approval needed: The development team has requested additional cloud infrastructure to handle the increased load from our new features. The cost is $2,500/month for the next 6 months. This includes auto-scaling capabilities and improved monitoring. Please review the attached proposal and let me know if you approve this expenditure."
    ]
  },
  pricingOptimizer: {
    defaultValues: {
      cost: 50,
      margin: 30,
      elasticity: -1.5
    }
  },
  opsAnomalyAlerts: {
    normalData: Array.from({ length: 20 }, (_, i) => ({
      timestamp: new Date(Date.now() - (19 - i) * 3600000).toISOString(),
      value: 100 + Math.random() * 20
    })),
    spikeData: Array.from({ length: 20 }, (_, i) => ({
      timestamp: new Date(Date.now() - (19 - i) * 3600000).toISOString(),
      value: i === 15 ? 250 : 100 + Math.random() * 20
    }))
  }
}

export function generateSummary(text: string): string[] {
  // Simple rule-based summarization
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 10)
  const keySentences = sentences.filter(s => 
    s.toLowerCase().includes('important') ||
    s.toLowerCase().includes('need') ||
    s.toLowerCase().includes('request') ||
    s.toLowerCase().includes('budget') ||
    s.toLowerCase().includes('approval') ||
    s.toLowerCase().includes('meeting') ||
    s.toLowerCase().includes('progress')
  )
  
  return keySentences.slice(0, 3).map(s => s.trim() + '.')
}

export function calculateOptimalPrice(cost: number, margin: number, elasticity: number): { price: number; volume: number } {
  const price = cost * (1 + margin / 100)
  const volume = Math.max(100, 1000 * Math.pow(price / cost, elasticity))
  return { price: Math.round(price * 100) / 100, volume: Math.round(volume) }
}

export function detectAnomaly(data: Array<{ value: number }>, threshold: number = 2): boolean {
  if (data.length < 2) return false
  const values = data.map(d => d.value)
  const mean = values.reduce((a, b) => a + b, 0) / values.length
  const variance = values.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / values.length
  const stdDev = Math.sqrt(variance)
  const latest = values[values.length - 1]
  return Math.abs(latest - mean) > threshold * stdDev
}
