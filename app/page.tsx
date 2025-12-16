import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Microscope, Globe, BookOpen, Heart, Activity, Stethoscope, AlertCircle, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">
                Trusted Health Evidence and Consultancy for Policy, Practice, and People in Ethiopia
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 text-pretty leading-relaxed">
                A trusted platform for health research implementation, consulting, capacity building, monitoring and
                evaluation, and advocacy led by Dr. Abel Gedefaw, Wassu Gedefaw & Dr. Birkneh Tilahun Tadesse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/projects">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">What We Do</h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Evidence-based consulting and research for comprehensive health solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Maternal & Child Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Comprehensive research and consulting for maternal and child health programs and policies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Infectious Diseases</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Evidence-based strategies for communicable and neglected tropical disease management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Stethoscope className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Non-Communicable Diseases</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Research and policy support for chronic disease prevention and management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Microscope className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Clinical Trials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Full clinical trial implementation, monitoring, and surveillance support in Ethiopia.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/services">Learn More About Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Where We Work</h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Primary based in Ethiopia, but collaborating with institutions globally
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { region: "Ethiopia", icon: Globe },
                { region: "Africa", icon: Globe },
                { region: "Europe", icon: Globe },
                { region: "USA", icon: Globe },
                { region: "Asia", icon: Globe },
              ].map((location) => (
                <Card key={location.region} className="text-center">
                  <CardHeader>
                    <location.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <CardTitle className="text-lg">{location.region}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/about">Our Collaborators</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Impact So Far</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">30+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10,000+</div>
                <p className="text-muted-foreground">People Reached Through Education</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">10</div>
                <p className="text-muted-foreground">PhD & MSc Mentees Supported</p>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">20+</div>
                <p className="text-muted-foreground">Peer-Reviewed Publications</p>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">Latest Insights & Resources</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <FileText className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">COVID-19 Impact on Immunization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    How COVID-19 Shifted Immunization Access in Sidama region of Ethiopia.
                  </CardDescription>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/blog">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <AlertCircle className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Nutrition and NCDs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    A Silent Crisis: Understanding the link between nutrition and non-communicable diseases.
                  </CardDescription>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/blog">Watch Video →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="text-lg">Clinical Trial Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    What is Clinical Trial Monitoring? An essential guide to ensuring quality and compliance.
                  </CardDescription>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="/blog">Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <Card className="max-w-3xl mx-auto bg-primary text-primary-foreground">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl lg:text-3xl mb-2">Stay Connected</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Sign up for our newsletter or follow us on social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-md text-foreground"
                  />
                  <Button variant="secondary">Subscribe</Button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-primary-foreground/80 mb-4">Follow us on:</p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="secondary" size="icon" asChild>
                      <Link href="#">Facebook</Link>
                    </Button>
                    <Button variant="secondary" size="icon" asChild>
                      <Link href="#">LinkedIn</Link>
                    </Button>
                    <Button variant="secondary" size="icon" asChild>
                      <Link href="#">YouTube</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
