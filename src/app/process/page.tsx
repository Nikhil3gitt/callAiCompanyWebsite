"use client"

import * as React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Search, 
  Palette, 
  Rocket, 
  RefreshCw, 
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

const processSteps = [
  {
    id: "discover",
    title: "Discover",
    description: "We analyze your business processes and identify AI opportunities",
    icon: Search,
    deliverables: [
      "Business process audit",
      "AI opportunity assessment", 
      "ROI projections",
      "Technical feasibility study",
      "Implementation roadmap",
      "2-4 meetings with customer"
    ],
    duration: "1-2 weeks"
  },
  {
    id: "design", 
    title: "Design",
    description: "Custom AI solutions tailored to your specific needs and goals",
    icon: Palette,
    deliverables: [
      "Solution architecture design",
      "Data pipeline planning",
      "Model selection and training strategy",
      "Integration specifications",
      "Security and compliance framework"
    ],
    duration: "2-3 weeks"
  },
  {
    id: "deliver",
    title: "Deliver", 
    description: "Rapid deployment with comprehensive testing and validation",
    icon: Rocket,
    deliverables: [
      "AI model development and training",
      "System integration and deployment",
      "Comprehensive testing suite",
      "Performance optimization",
      "User training and documentation"
    ],
    duration: "3-4 weeks"
  },
  {
    id: "iterate",
    title: "Iterate",
    description: "Continuous improvement based on real-world performance data",
    icon: RefreshCw,
    deliverables: [
      "Performance monitoring dashboard",
      "Model retraining pipeline",
      "Feedback collection system",
      "Regular optimization cycles",
      "Ongoing support and maintenance"
    ],
    duration: "Ongoing"
  },
  {
    id: "scale",
    title: "Scale",
    description: "Expand successful solutions across your organization",
    icon: TrendingUp,
    deliverables: [
      "Scalability planning",
      "Multi-department rollout",
      "Advanced feature development",
      "Enterprise-wide training",
      "Strategic AI roadmap"
    ],
    duration: "2-4 weeks"
  }
]

export default function ProcessPage() {
  const [activeStep, setActiveStep] = useState(processSteps[0].id)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-surface-dark via-background to-surface-dark">
        <div className="container text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A proven methodology that ensures successful AI implementation from start to finish. 
            We've refined this process through hundreds of successful deployments.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {processSteps.map((step) => (
              <Button
                key={step.id}
                variant={activeStep === step.id ? "default" : "outline"}
                onClick={() => setActiveStep(step.id)}
                className="flex items-center space-x-2"
              >
                <step.icon className="h-4 w-4" />
                <span>{step.title}</span>
              </Button>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="max-w-6xl mx-auto">
            {processSteps.map((step) => (
              activeStep === step.id && (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{step.title}</h2>
                        <p className="text-sm text-muted-foreground">Duration: {step.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {step.description}
                    </p>

                    <h3 className="text-lg font-semibold mb-4">What We Deliver:</h3>
                    <ul className="space-y-3">
                      {step.deliverables.map((deliverable, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-8">
                    <h3 className="text-lg font-semibold mb-4">Key Activities</h3>
                    <div className="space-y-4">
                      {step.id === "discover" && (
                        <>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Stakeholder Interviews</div>
                            <div className="text-sm text-muted-foreground">Understanding your business goals and challenges</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Data Assessment</div>
                            <div className="text-sm text-muted-foreground">Evaluating data quality and availability</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Opportunity Mapping</div>
                            <div className="text-sm text-muted-foreground">Identifying high-impact AI use cases</div>
                          </div>
                        </>
                      )}
                      {step.id === "design" && (
                        <>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Architecture Planning</div>
                            <div className="text-sm text-muted-foreground">Designing scalable AI solution architecture</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Model Selection</div>
                            <div className="text-sm text-muted-foreground">Choosing the right AI models for your needs</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Integration Design</div>
                            <div className="text-sm text-muted-foreground">Planning seamless system integration</div>
                          </div>
                        </>
                      )}
                      {step.id === "deliver" && (
                        <>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Model Development</div>
                            <div className="text-sm text-muted-foreground">Building and training AI models</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">System Integration</div>
                            <div className="text-sm text-muted-foreground">Connecting AI with your existing systems</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Testing & Validation</div>
                            <div className="text-sm text-muted-foreground">Ensuring quality and performance</div>
                          </div>
                        </>
                      )}
                      {step.id === "iterate" && (
                        <>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Performance Monitoring</div>
                            <div className="text-sm text-muted-foreground">Tracking AI system performance</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Model Optimization</div>
                            <div className="text-sm text-muted-foreground">Continuously improving AI accuracy</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Feedback Integration</div>
                            <div className="text-sm text-muted-foreground">Incorporating user feedback</div>
                          </div>
                        </>
                      )}
                      {step.id === "scale" && (
                        <>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Rollout Planning</div>
                            <div className="text-sm text-muted-foreground">Expanding AI across departments</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Advanced Features</div>
                            <div className="text-sm text-muted-foreground">Adding sophisticated capabilities</div>
                          </div>
                          <div className="p-3 bg-background rounded border">
                            <div className="font-medium">Strategic Roadmap</div>
                            <div className="text-sm text-muted-foreground">Planning long-term AI strategy</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-6">
              Why Our Process <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our methodology is built on years of experience and proven best practices from successful AI implementations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Over 200 successful AI implementations across various industries and use cases.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Iterative Approach</h3>
                <p className="text-muted-foreground">
                  Continuous improvement ensures your AI solution evolves with your business needs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
                <p className="text-muted-foreground">
                  Every project includes clear success metrics and ROI measurement from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Ready to Start Your AI Journey?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how our proven process can help you achieve your AI goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
