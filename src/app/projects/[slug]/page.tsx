import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/projects"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, CheckCircle } from "lucide-react"
import Link from "next/link"

type ProjectDetailPageParams = {
  slug?: string | string[]
}

export default async function ProjectDetailPage({
  params,
}: {
  params?: Promise<ProjectDetailPageParams>
}) {
  const resolvedParams = await params
  const slugParam = resolvedParams?.slug
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam

  if (!slug) {
    notFound()
  }

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-surface-dark via-background to-surface-dark">
        <div className="container">
          <div className="mb-8">
            <Link 
              href="/projects"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="accent">{project.category}</Badge>
                <Badge variant="outline">{project.domain}</Badge>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold font-heading mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Book a Consultation</Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="/projects">
                    View All Projects
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8">
              <h3 className="text-lg font-semibold mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem, Solution, Impact */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-600">The Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Our Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">The Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.impact.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features & Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold font-heading mb-4">
              Key Features & Implementation Timeline
            </h2>
            <p className="text-lg text-muted-foreground">
              See how {project.title} delivers value and the path we take to ship it.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_1.2fr] gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle>Implementation Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4">
                  {project.implementationTimeline.map((phase, index) => (
                    <li key={phase.phase} className="flex gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                          <h3 className="text-lg font-semibold">{phase.phase}</h3>
                          <span className="text-sm text-muted-foreground sm:text-right">{phase.duration}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                          {phase.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4">
            Ready to Implement This Solution?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss how {project.title} can be customized for your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Your Project</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary-foreground border-primary-foreground/20 hover:bg-primary-foreground/10">
              <Link href="/process">Learn About Our Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
