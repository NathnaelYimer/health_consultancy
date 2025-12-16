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
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-block mb-6 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-sm font-semibold text-primary">✨ Research & Impact</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Our Projects
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Ongoing and completed research projects driving meaningful health improvements across Ethiopia and the region.
              </p>
            </div>
          </div>
        </section>

        {/* Projects by Category */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12 max-w-6xl mx-auto">
              {projectCategories.map((category) => (
                <div key={category.title}>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-6">{category.title}</h2>
                  <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory">
                    {category.projects.map((project) => (
                      <article key={project.name} className="min-w-[520px] snap-start flex-shrink-0 group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 p-6">
                        <div className="flex items-center justify-between gap-6">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className={`px-4 py-1.5 rounded-full text-sm font-medium shadow-sm ${project.status === "Ongoing" ? "bg-amber-100 text-amber-800 border border-amber-200" : "bg-green-100 text-green-800 border border-green-200"}`}>
                              {project.status}
                            </span>
                            <span className="text-xs text-muted-foreground">Updated: {project.status === "Ongoing" ? "Active" : "Completed"}</span>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Areas */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Implementation Areas
              </h2>
              <p className="text-muted-foreground mb-8">Our work spans multiple health domains and geographic regions.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  "Maternal Health",
                  "Child Health",
                  "Infectious Diseases",
                  "NCDs",
                  "Nutrition",
                  "Clinical Trials",
                ].map((area) => (
                  <Card key={area} className="text-center p-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50 group">
                    <div className="h-14 w-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                      {area.split(" ")[0].charAt(0)}
                    </div>
                    <p className="text-sm font-medium group-hover:text-primary transition-colors">{area}</p>
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
