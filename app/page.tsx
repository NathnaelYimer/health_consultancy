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
        <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-6 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <span className="text-sm font-semibold text-primary">✨ Trusted Health Consultancy Since 2015</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 text-balance bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Trusted Health Evidence and Consultancy for Policy, Practice, and People in Ethiopia
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-3xl mx-auto">
                A trusted platform for health research implementation, consulting, capacity building, monitoring and
                evaluation, and advocacy led by Dr. Abel Gedefaw, Wassu Gedefaw & Dr. Birkneh Tilahun Tadesse.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary" asChild>
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" asChild>
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                What We Do
              </h2>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                Evidence-based consulting and research for comprehensive health solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 card-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Heart className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">Maternal & Child Health</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-base">
                    Comprehensive research and consulting for maternal and child health programs and policies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 card-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Activity className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">Infectious Diseases</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-base">
                    Evidence-based strategies for communicable and neglected tropical disease management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 card-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Stethoscope className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">Non-Communicable Diseases</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-base">
                    Research and policy support for chronic disease prevention and management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 card-glow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Microscope className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">Clinical Trials</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="leading-relaxed text-base">
                    Full clinical trial implementation, monitoring, and surveillance support in Ethiopia.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl" asChild>
                <Link href="/services">Learn More About Our Services →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Where We Work */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Where We Work
              </h2>
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
                <Card key={location.region} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <location.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{location.region}</CardTitle>
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
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Impact So Far
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 group relative overflow-hidden card-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                    30+
                  </div>
                  <p className="text-muted-foreground font-semibold text-base">Projects Completed</p>
                </div>
              </Card>
              <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 group relative overflow-hidden card-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                    10,000+
                  </div>
                  <p className="text-muted-foreground font-semibold text-base">People Reached Through Education</p>
                </div>
              </Card>
              <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 group relative overflow-hidden card-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                    10
                  </div>
                  <p className="text-muted-foreground font-semibold text-base">PhD & MSc Mentees Supported</p>
                </div>
              </Card>
              <Card className="text-center p-10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/50 group relative overflow-hidden card-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 group-hover:scale-125 transition-transform duration-500">
                    20+
                  </div>
                  <p className="text-muted-foreground font-semibold text-base">Peer-Reviewed Publications</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Insights */}
        <section className="py-20 lg:py-28 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Latest Insights & Resources
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">COVID-19 Impact on Immunization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    How COVID-19 Shifted Immunization Access in Sidama region of Ethiopia.
                  </CardDescription>
                  <Button variant="link" className="p-0 group-hover:text-primary transition-colors" asChild>
                    <Link href="/blog">Read More →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <AlertCircle className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Nutrition and NCDs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    A Silent Crisis: Understanding the link between nutrition and non-communicable diseases.
                  </CardDescription>
                  <Button variant="link" className="p-0 group-hover:text-primary transition-colors" asChild>
                    <Link href="/blog">Watch Video →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Clinical Trial Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed">
                    What is Clinical Trial Monitoring? An essential guide to ensuring quality and compliance.
                  </CardDescription>
                  <Button variant="link" className="p-0 group-hover:text-primary transition-colors" asChild>
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
            <Card className="max-w-3xl mx-auto bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground shadow-2xl border-0 overflow-hidden relative hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
              <CardHeader className="text-center relative z-10 pb-6">
                <CardTitle className="text-3xl lg:text-4xl mb-3 font-extrabold">Stay Connected</CardTitle>
                <CardDescription className="text-primary-foreground/95 text-base">
                  Sign up for our newsletter or follow us on social media
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-5 py-3.5 rounded-lg text-foreground border-0 shadow-xl focus:ring-2 focus:ring-primary-foreground/50 focus:scale-105 transition-all duration-300 font-medium"
                  />
                  <Button variant="secondary" className="shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold px-6">Subscribe</Button>
                </div>
                <div className="text-center">
                  <p className="text-sm text-primary-foreground/95 mb-5 font-semibold">Follow us on:</p>
                  <div className="flex gap-4 justify-center">
                    <Button variant="secondary" size="icon" className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl w-12 h-12" asChild>
                      <Link href="#">Facebook</Link>
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl w-12 h-12" asChild>
                      <Link href="#">LinkedIn</Link>
                    </Button>
                    <Button variant="secondary" size="icon" className="rounded-full hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl w-12 h-12" asChild>
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
