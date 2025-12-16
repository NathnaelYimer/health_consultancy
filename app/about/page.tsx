import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Who We Are</h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
          We are Dr. Abel Gedefaw Ali Health Consultancy — a locally-rooted health research and consultancy group
          focused on evidence-informed policy, clinical research implementation, capacity building and advocacy in
          Ethiopia and beyond.
        </p>

        <section className="grid md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Vision & Mission</h2>
            <p className="text-muted-foreground">
              To be a leading health consultancy and knowledge hub shaping evidence-informed health practice and
              policy in Ethiopia and beyond.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Core Values</h2>
            <ul className="list-disc ml-5 text-muted-foreground">
              <li>Scientific integrity</li>
              <li>Equity</li>
              <li>Community impact</li>
              <li>Collaboration</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Leadership</h3>
          <p className="text-muted-foreground max-w-3xl">
            Founded and led by Dr. Abel Gedefaw with an experienced team responsible for research, policy and clinical
            trial implementation.
          </p>
        </section>

        <div className="mt-12">
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
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
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Who We Are</h1>
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
              <Card>
                <CardHeader>
                  <Eye className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be a leading local health consultancy and knowledge hub shaping evidence-informed health practice
                    and policy in Ethiopia and beyond.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <CardTitle className="text-2xl">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Conduct and translate high-quality health research</li>
                    <li>• Strengthen capacity for clinical trial implementation</li>
                    <li>• Inform and influence health policies and strategies</li>
                    <li>• Support individuals and institutions through expert consultation</li>
                    <li>• Advocate for accessible, impactful, and ethical health systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">Core Values</h2>

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
                <Card key={value.title} className="text-center">
                  <CardHeader>
                    <value.icon className="h-10 w-10 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center">Our Story</h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded by <strong>Dr. Abel Gedefaw</strong>—a physician, academic, senior researcher, and public
                  health expert with over a decade of experience in Ethiopia's health sector—our consultancy bridges
                  research with real-world solutions.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Dr. Gedefaw currently serves as an Associate Professor specializing in maternal and child health and
                  has authored over 40 peer-reviewed publications. His academic background includes training at Hawassa
                  University and Addis Ababa University in Ethiopia, as well as doctoral studies at the globally
                  renowned Karolinska Institute in Sweden, where he earned his PhD.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  He also brings extensive leadership experience, having served as Chief Executive Director of Hawassa
                  University Comprehensive Specialized Hospital and held a vice president-level position at the
                  university.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Together with <strong>Dr. Birkneh Tilahun Tadesse</strong> and <strong>Mr. Wassu Gedefaw</strong>, we
                  combine deep local insight with global best practices to deliver impactful, contextually relevant
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16">Our Collaborators</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Local Partners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Research universities</li>
                    <li>• Regional Health Bureaus</li>
                    <li>• Ministry of Health</li>
                    <li>• Private health clinics/hospitals</li>
                    <li>• Public health facilities</li>
                    <li>• Local NGOs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>International Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• World Health Organization (WHO)</li>
                    <li>• International research institutions</li>
                    <li>• Global health partnerships</li>
                    <li>• International NGOs</li>
                    <li>• Multi-country collaborations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Research & Industry</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Institutional review boards</li>
                    <li>• National ethics review boards</li>
                    <li>• Pharmaceutical companies</li>
                    <li>• Clinical trial sponsors</li>
                    <li>• Academic institutions</li>
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
