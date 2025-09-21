import { Hero } from "@/components/hero"
import { ValuePropCard } from "@/components/value-prop-card"
import { ProjectCard } from "@/components/project-card"
import { 
  Zap, 
  Brain, 
  Heart, 
  Rocket,
  ArrowRight,
  Star,
  Quote
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getFeaturedProjects } from "@/lib/projects"
import Link from "next/link"

const valueProps = [
  {
    icon: "Zap",
    title: "Automate Ops",
    description: "Reduce manual effort with intelligent automation that handles repetitive tasks and workflows.",
    learnMoreHref: "/process"
  },
  {
    icon: "Brain",
    title: "Augment Decisions",
    description: "Enhance decision-making with advanced analytics, forecasting, and real-time insights.",
    learnMoreHref: "/projects"
  },
  {
    icon: "Heart",
    title: "Delight Customers",
    description: "Create exceptional customer experiences with AI-powered chat, support, and personalization.",
    learnMoreHref: "/projects"
  },
  {
    icon: "Rocket",
    title: "Ship Fast, Safely",
    description: "Deploy secure, scalable AI solutions with enterprise-grade security and compliance.",
    learnMoreHref: "/process"
  }
]

const testimonials = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "CTO",
    company: "TechFlow",
    content: "callAI transformed our customer support. We went from 4-hour response times to instant, accurate answers. Our team can now focus on complex issues while AI handles the routine.",
    avatar: null
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    role: "Operations Director",
    company: "RetailMax",
    content: "The demand forecasting model has been a game-changer. We've reduced stockouts by 30% and increased revenue by 15%. The ROI was evident within the first quarter.",
    avatar: null
  },
  {
    id: "3",
    name: "Emily Watson",
    role: "VP of Finance",
    company: "FinanceCorp",
    content: "Invoice automation saved us 20 hours per week. The accuracy is incredible, and it integrates seamlessly with our existing systems. Highly recommend callAI's approach.",
    avatar: null
  }
]

const processSteps = [
  {
    id: "1",
    title: "Discover",
    description: "We analyze your business processes and identify AI opportunities.",
    icon: "🔍"
  },
  {
    id: "2", 
    title: "Design",
    description: "Custom AI solutions tailored to your specific needs and goals.",
    icon: "🎨"
  },
  {
    id: "3",
    title: "Deliver",
    description: "Rapid deployment with comprehensive testing and validation.",
    icon: "🚀"
  },
  {
    id: "4",
    title: "Iterate",
    description: "Continuous improvement based on real-world performance data.",
    icon: "🔄"
  }
]

export default function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="flex flex-col">
      <Hero />
      
      <div id="content" className="space-y-24">
        {/* Value Props */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Why choose <span className="gradient-text">callAI</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We don't just build AI solutions—we create intelligent systems that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valueProps.map((prop, index) => (
                <ValuePropCard
                  key={prop.title}
                  icon={prop.icon}
                  title={prop.title}
                  description={prop.description}
                  learnMoreHref={prop.learnMoreHref}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                See how we've helped businesses transform their operations with AI.
              </p>
              <Button asChild variant="ghost" size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A proven methodology that ensures successful AI implementation from start to finish.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <Card key={step.id} className="text-center card-hover">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/process">Learn More About Our Process</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-muted/30">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-6">
                What Our <span className="gradient-text">Clients</span> Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it—hear from the businesses we've transformed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={testimonial.id} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-padding">
          <div className="container">
            <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  Get your personalized AI blueprint and discover how artificial intelligence can drive growth in your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/contact">Request Your AI Blueprint</Link>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
                    <Link href="/projects">See Our Work</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
