export interface ProjectImplementationPhase {
  phase: string
  duration: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  category: 'Automation' | 'Analytics' | 'Agents' | 'Vision' | 'NLP' | 'Optimization'
  slug: string
  domain: string
  problem: string
  solution: string
  impact: string[]
  techStack: string[]
  demoComponent: string
  keyFeatures: string[]
  implementationTimeline: ProjectImplementationPhase[]
  featured?: boolean
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar?: string
}

export interface ProcessStep {
  id: string
  title: string
  description: string
  icon: string
  deliverables: string[]
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  slug: string
  publishedAt: Date
  author: string
  tags: string[]
}

export interface ContactForm {
  name: string
  email: string
  company: string
  role: string
  message: string
  budget: string
  consent: boolean
}
