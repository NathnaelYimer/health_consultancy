import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProjectsPage() {
  const projectCategories = [
    {
      title: "Maternal and Child Health",
      projects: [
        {
          name: "Immunization Access During COVID-19",
          status: "Completed",
          description: "Studying immunization service utilization patterns in Sidama region",
        },
      ],
    },
    {
      title: "Communicable Diseases",
      projects: [
        {
          name: "Malaria Surveillance System",
          status: "Ongoing",
          description: "Implementation of enhanced malaria monitoring in endemic regions",
        },
      ],
    },
    {
      title: "Non-Communicable Diseases",
      projects: [
        {
          name: "Diabetes Prevention Program",
          status: "Ongoing",
          description: "Community-based intervention for diabetes prevention and management",
        },
      ],
    },
    {
      title: "Neglected Tropical Diseases",
      projects: [
        {
          name: "NTD Control Strategy",
          status: "Completed",
          description: "Policy development for integrated NTD control programs",
        },
      ],
    },
    {
      title: "Nutrition",
      projects: [
        {
          name: "Malnutrition Intervention Study",
          status: "Ongoing",
          description: "Community-based nutrition intervention for children under 5",
        },
      ],
    },
    {
      title: "Vaccine & Drug Development",
      projects: [
        {
          name: "Clinical Trial Coordination",
          status: "Ongoing",
          description: "Phase III vaccine trial support and monitoring",
        },
      ],
    },
    {
      title: "Climate Change and Health",
      projects: [
        {
          name: "Climate Impact Assessment",
          status: "Ongoing",
          description: "Assessing health impacts of climate change on vulnerable populations",
        },
      ],
    },
    {
      title: "Research Capacity Building",
      projects: [
        {
          name: "PhD and MSc Mentorship Program",
          status: "Ongoing",
          description: "Supporting 10 graduate students in health research",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Projects</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Ongoing and completed research projects driving health improvements across Ethiopia and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Projects by Category */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 max-w-6xl mx-auto">
              {projectCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">{category.title}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.projects.map((project) => (
                      <Card key={project.name}>
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-xl">{project.name}</CardTitle>
                            <Badge variant={project.status === "Ongoing" ? "default" : "secondary"}>
                              {project.status}
                            </Badge>
                          </div>
                          <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Areas */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold text-center mb-6">Implementation Areas</h2>
              <p className="text-center text-lg text-muted-foreground mb-16">
                Our projects span multiple health domains and geographic regions
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  "Maternal Health",
                  "Child Health",
                  "Infectious Diseases",
                  "NCDs",
                  "Nutrition",
                  "Trauma & Injuries",
                  "Epidemiology",
                  "Pharmacovigilance",
                  "Policy Development",
                  "Clinical Trials",
                  "Capacity Building",
                  "Health Education",
                ].map((area) => (
                  <Card key={area} className="text-center">
                    <CardContent className="pt-6">
                      <p className="font-medium">{area}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
