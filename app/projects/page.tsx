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
        <section className="bg-gradient-to-br from-slate-50/50 to-white py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">Our Projects</h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
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
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.projects.map((project) => (
                      <article key={project.name} className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary">{project.name}</h3>
                            <p className="text-sm text-slate-600">{project.description}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === "Ongoing" ? "bg-amber-100 text-amber-800" : "bg-green-100 text-green-800"}`}>
                              {project.status}
                            </span>
                            <span className="text-xs text-slate-400">Updated: {project.status === "Ongoing" ? "Active" : "Completed"}</span>
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
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Implementation Areas</h2>
              <p className="text-slate-600 mb-8">Our work spans multiple health domains and geographic regions.</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  "Maternal Health",
                  "Child Health",
                  "Infectious Diseases",
                  "NCDs",
                  "Nutrition",
                  "Clinical Trials",
                ].map((area) => (
                  <div key={area} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition text-center">
                    <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">{area.split(" ")[0].charAt(0)}</div>
                    <p className="text-sm font-medium">{area}</p>
                  </div>
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
