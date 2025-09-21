import { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "smart-support-bot",
    title: "Smart Support Bot",
    description: "AI-powered customer support that understands context and provides instant, accurate responses.",
    category: "NLP",
    slug: "smart-support-bot",
    domain: "Customer Service",
    problem: "Customer support teams are overwhelmed with repetitive inquiries, leading to long response times and inconsistent answers.",
    solution: "Deploy an intelligent chatbot that understands natural language, provides contextual responses, and escalates complex issues to human agents.",
    impact: [
      "75% reduction in response time",
      "90% customer satisfaction rate",
      "60% decrease in support tickets"
    ],
    techStack: ["OpenAI GPT-4", "LangChain", "Vector Database", "Next.js"],
    demoComponent: "SmartSupportBotDemo",
    keyFeatures: [
      "Multi-turn intent understanding with conversation memory",
      "Automated escalation workflows with human handoffs",
      "Knowledge base syncing and semantic search",
      "Sentiment tracking dashboard for live interactions"
    ],
    implementationTimeline: [
      {
        phase: "Discovery & Alignment",
        duration: "Week 1",
        description: "Assess support scenarios, define success metrics, and map required integrations."
      },
      {
        phase: "Knowledge & Data Setup",
        duration: "Weeks 2-3",
        description: "Connect knowledge bases, configure retrieval pipelines, and curate training samples."
      },
      {
        phase: "Automation Build",
        duration: "Weeks 3-5",
        description: "Implement conversational flows, escalation rules, and analytics instrumentation."
      },
      {
        phase: "Pilot & Rollout",
        duration: "Weeks 6-7",
        description: "Run pilot with support teams, refine responses, and launch with staff enablement."
      }
    ],
    featured: true
  },
  {
    id: "invoice-automation",
    title: "Invoice Automation",
    description: "Automatically extract and process invoice data using OCR and machine learning.",
    category: "Vision",
    slug: "invoice-automation",
    domain: "Finance",
    problem: "Manual invoice processing is time-consuming, error-prone, and delays payment cycles.",
    solution: "AI-powered OCR system that extracts key data from invoices, validates information, and integrates with accounting systems.",
    impact: [
      "85% reduction in processing time",
      "95% accuracy in data extraction",
      "40% faster payment cycles"
    ],
    techStack: ["Azure Computer Vision", "Python", "PostgreSQL", "FastAPI"],
    demoComponent: "InvoiceAutomationDemo",
    keyFeatures: [
      "OCR tuned for multi-format invoices and currencies",
      "Automatic validation against accounting and ERP rules",
      "Bulk processing workflows with review queues",
      "Audit-ready processing trails and exportable reports"
    ],
    implementationTimeline: [
      {
        phase: "Discovery & Data Audit",
        duration: "Week 1",
        description: "Collect document samples, map required fields, and align on success KPIs."
      },
      {
        phase: "Model Configuration",
        duration: "Weeks 2-3",
        description: "Configure OCR models, build parsing templates, and tune validation logic."
      },
      {
        phase: "Workflow Integration",
        duration: "Weeks 4-5",
        description: "Connect to finance systems, implement approval flows, and automate notifications."
      },
      {
        phase: "UAT & Launch",
        duration: "Week 6",
        description: "Run user acceptance testing, train finance teams, and move into production."
      }
    ],
    featured: true
  },
  {
    id: "demand-forecast",
    title: "Demand Forecasting",
    description: "Predict future demand using time series analysis and machine learning algorithms.",
    category: "Analytics",
    slug: "demand-forecast",
    domain: "Retail",
    problem: "Inaccurate demand predictions lead to stockouts, overstock, and lost revenue opportunities.",
    solution: "Advanced forecasting model that analyzes historical data, seasonality, and external factors to predict demand accurately.",
    impact: [
      "30% reduction in stockouts",
      "25% decrease in excess inventory",
      "15% increase in revenue"
    ],
    techStack: ["Python", "Prophet", "Pandas", "Scikit-learn"],
    demoComponent: "DemandForecastDemo",
    keyFeatures: [
      "Seasonality-aware forecasting with promotion overlays",
      "External signal ingestion for weather, events, and trends",
      "Scenario planning sandbox for supply chain teams",
      "Automated exception alerts with recommended actions"
    ],
    implementationTimeline: [
      {
        phase: "Discovery & Data Engineering",
        duration: "Weeks 1-2",
        description: "Consolidate demand signals, cleanse historical data, and finalize forecast granularity."
      },
      {
        phase: "Model Development",
        duration: "Weeks 3-4",
        description: "Build time-series pipelines, test feature sets, and benchmark accuracy."
      },
      {
        phase: "Scenario Tooling",
        duration: "Week 5",
        description: "Implement what-if simulators, demand overrides, and collaboration workflows."
      },
      {
        phase: "Enablement & Launch",
        duration: "Week 6",
        description: "Deploy dashboards, onboard planners, and establish monitoring cadence."
      }
    ],
    featured: true
  },
  {
    id: "email-summarizer",
    title: "Email Summarizer",
    description: "Automatically generate executive summaries from long email threads and documents.",
    category: "NLP",
    slug: "email-summarizer",
    domain: "Productivity",
    problem: "Information overload from lengthy emails makes it difficult to stay informed and make quick decisions.",
    solution: "AI-powered summarization that extracts key points, action items, and decisions from email conversations.",
    impact: [
      "70% time savings on email review",
      "90% accuracy in key point extraction",
      "50% faster decision making"
    ],
    techStack: ["OpenAI GPT-3.5", "NLTK", "Python", "FastAPI"],
    demoComponent: "EmailSummarizerDemo",
    keyFeatures: [
      "Thread-aware summarization with role-based tone",
      "Automatic extraction of action items and owners",
      "Integration with collaboration and ticketing tools",
      "Secure deployment with audit-ready retention controls"
    ],
    implementationTimeline: [
      {
        phase: "Discovery & Compliance Review",
        duration: "Week 1",
        description: "Capture use cases, review security requirements, and align on summary formats."
      },
      {
        phase: "Model Tuning",
        duration: "Weeks 2-3",
        description: "Fine-tune summarization prompts, optimize for tone, and test factual accuracy."
      },
      {
        phase: "Workflow Integration",
        duration: "Week 4",
        description: "Connect to email systems, calendars, and collaboration tools for delivery."
      },
      {
        phase: "Pilot & Training",
        duration: "Week 5",
        description: "Launch with pilot teams, gather feedback, and finalize governance settings."
      }
    ],
    featured: false
  },
  {
    id: "pricing-optimizer",
    title: "Pricing Optimizer",
    description: "Dynamic pricing optimization based on market conditions, demand, and competitive analysis.",
    category: "Optimization",
    slug: "pricing-optimizer",
    domain: "E-commerce",
    problem: "Static pricing strategies miss revenue opportunities and fail to respond to market changes.",
    solution: "Machine learning model that continuously optimizes prices based on demand elasticity, competition, and business goals.",
    impact: [
      "20% increase in revenue",
      "15% improvement in profit margins",
      "35% better price competitiveness"
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "Flask"],
    demoComponent: "PricingOptimizerDemo",
    keyFeatures: [
      "Elasticity modelling tailored per customer segment",
      "Competitive data ingestion with configurable weights",
      "Business guardrails to protect margins and inventory",
      "Experimentation toolkit for A/B and holdout testing"
    ],
    implementationTimeline: [
      {
        phase: "Discovery & Alignment",
        duration: "Week 1",
        description: "Define pricing goals, segment strategy, and compliance constraints."
      },
      {
        phase: "Data Foundation",
        duration: "Weeks 2-3",
        description: "Ingest transactional, competitive, and inventory data into unified pipelines."
      },
      {
        phase: "Model Development",
        duration: "Weeks 4-5",
        description: "Build optimization models, calibrate guardrails, and simulate scenarios."
      },
      {
        phase: "Rollout & Monitoring",
        duration: "Week 6",
        description: "Deploy pricing API, run controlled launch, and set up performance dashboards."
      }
    ],
    featured: false
  },
  {
    id: "ops-anomaly-alerts",
    title: "Operations Anomaly Detection",
    description: "Real-time monitoring and alerting for unusual patterns in operational metrics.",
    category: "Analytics",
    slug: "ops-anomaly-alerts",
    domain: "Operations",
    problem: "Manual monitoring of operational metrics is reactive and often misses critical issues until they become problems.",
    solution: "AI system that continuously monitors metrics, learns normal patterns, and alerts on anomalies in real-time.",
    impact: [
      "80% faster issue detection",
      "90% reduction in false positives",
      "60% decrease in downtime"
    ],
    techStack: ["Python", "Isolation Forest", "InfluxDB", "Grafana"],
    demoComponent: "OpsAnomalyAlertsDemo",
    keyFeatures: [
      "Adaptive baselines per metric and environment",
      "Real-time streaming ingestion with edge deployment",
      "Integrated alert routing with severity policies",
      "Incident insights for faster root-cause analysis"
    ],
    implementationTimeline: [
      {
        phase: "Discovery & Instrumentation Plan",
        duration: "Week 1",
        description: "Audit existing telemetry, prioritize metrics, and define escalation requirements."
      },
      {
        phase: "Pipeline Setup",
        duration: "Weeks 2-3",
        description: "Configure data ingestion, storage, and anomaly detection pipelines."
      },
      {
        phase: "Alerting & Integrations",
        duration: "Weeks 4-5",
        description: "Implement alert workflows, on-call routing, and collaboration integrations."
      },
      {
        phase: "Operational Rollout",
        duration: "Week 6",
        description: "Tune thresholds with ops teams, document runbooks, and launch continuous monitoring."
      }
    ],
    featured: false
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects
  return projects.filter(project => project.category === category)
}

export const projectCategories = ["All", "Automation", "Analytics", "Agents", "Vision", "NLP", "Optimization"]
