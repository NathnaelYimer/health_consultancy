import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Award, Building } from "lucide-react"

export default function AboutPage() {
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
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-sm font-semibold text-primary">✨ About Our Organization</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Who We Are
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                A leading health consultancy and knowledge hub shaping evidence-informed health practice and policy in
                Ethiopia and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Eye className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading local health consultancy and knowledge hub shaping evidence-informed health practice
                    and policy in Ethiopia and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Target className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Conduct and translate high-quality health research</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Strengthen capacity for clinical trial implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Inform and influence health policies and strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Support individuals and institutions through expert consultation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Advocate for accessible, impactful, and ethical health systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Core Values
            </h2>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Award,
                  title: "Scientific Integrity",
                  description: "Commitment to rigorous, evidence-based research",
                },
                { icon: Users, title: "Equity", description: "Ensuring fair access to health services and knowledge" },
                { icon: Heart, title: "Community Impact", description: "Creating meaningful change in communities" },
                { icon: Target, title: "Innovation", description: "Embracing new approaches and technologies" },
                { icon: Building, title: "Collaboration", description: "Working together for better health outcomes" },
              ].map((value) => (
                <Card key={value.title} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Story
              </h2>

              <div className="space-y-6">
                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Founded by <strong className="text-foreground">Dr. Abel Gedefaw</strong>—a physician, academic, senior researcher, and public
                      health expert with over a decade of experience in Ethiopia's health sector—our consultancy bridges
                      research with real-world solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Dr. Gedefaw currently serves as an Associate Professor specializing in maternal and child health and
                      has authored over 40 peer-reviewed publications. His academic background includes training at Hawassa
                      University and Addis Ababa University in Ethiopia, as well as doctoral studies at the globally
                      renowned Karolinska Institute in Sweden, where he earned his PhD.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      He also brings extensive leadership experience, having served as Chief Executive Director of Hawassa
                      University Comprehensive Specialized Hospital and held a vice president-level position at the
                      university.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:shadow-lg transition-all duration-300 bg-primary/5">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Together with <strong className="text-foreground">Dr. Birkneh Tilahun Tadesse</strong> and <strong className="text-foreground">Mr. Wassu Gedefaw</strong>, we
                      combine deep local insight with global best practices to deliver impactful, contextually relevant
                      solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Our Collaborators
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Local Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Research universities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Regional Health Bureaus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Ministry of Health</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Private health clinics/hospitals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Public health facilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Local NGOs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">International Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>World Health Organization (WHO)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>International research institutions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Global health partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>International NGOs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Multi-country collaborations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Research & Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Institutional review boards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>National ethics review boards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Pharmaceutical companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Clinical trial sponsors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Academic institutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
