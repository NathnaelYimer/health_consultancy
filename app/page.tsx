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
        {/* Hero Section - Premium, Clean, High-Converting */}
        <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
          
          {/* Minimal floating accent */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float pointer-events-none"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Trust Badge - Minimal */}
              <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                <span>Trusted since 2015</span>
              </div>
              
              {/* Hero Headline - Clear, Bold, Scannable */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-foreground leading-tight tracking-tight">
                Trusted Health Evidence and Consultancy for Policy, Practice, and People in Ethiopia
              </h1>
              
              {/* Value Proposition - Clear, Concise */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-2xl mx-auto">
                A trusted platform for health research implementation, consulting, capacity building, monitoring and evaluation, and advocacy led by Dr. Abel Gedefaw, Wassu Gedefaw & Dr. Birkneh Tilahun Tadesse.
              </p>
              
              {/* Primary CTAs - Clear, Prominent */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                  asChild
                >
                  <Link href="/contact">Request Consultation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
                  asChild
                >
                  <Link href="/projects">Explore Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do Section - Clean Grid Layout */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                What We Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Evidence-based consulting and research for comprehensive health solutions
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Heart className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">Maternal & Child Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">
                    Comprehensive research and consulting for maternal and child health programs and policies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Activity className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">Infectious Diseases</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">
                    Evidence-based strategies for communicable and neglected tropical disease management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Stethoscope className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">Non-Communicable Diseases</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">
                    Research and policy support for chronic disease prevention and management.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Microscope className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">Clinical Trials</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed text-sm">
                    Full clinical trial implementation, monitoring, and surveillance support in Ethiopia.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" className="px-6 py-6 text-base font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-[1.02]" asChild>
                <Link href="/services">Learn More About Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Where We Work - Clean, Minimal */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Where We Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Primary based in Ethiopia, but collaborating with institutions globally
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-5xl mx-auto">
              {[
                { region: "Ethiopia", icon: Globe },
                { region: "Africa", icon: Globe },
                { region: "Europe", icon: Globe },
                { region: "USA", icon: Globe },
                { region: "Asia", icon: Globe },
              ].map((location) => (
                <Card key={location.region} className="premium-card text-center group">
                  <CardHeader className="pb-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <location.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <CardTitle className="text-base font-semibold group-hover:text-primary transition-colors">{location.region}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button variant="outline" size="lg" className="px-6 py-6 text-base font-semibold border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-[1.02]" asChild>
                <Link href="/about">Our Collaborators</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Statistics - Clean, Scannable */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Our Impact So Far
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <Card className="premium-card text-center p-6 lg:p-8 group">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  30+
                </div>
                <p className="text-muted-foreground font-medium text-sm lg:text-base">Projects Completed</p>
              </Card>
              <Card className="premium-card text-center p-6 lg:p-8 group">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  10,000+
                </div>
                <p className="text-muted-foreground font-medium text-sm lg:text-base">People Reached Through Education</p>
              </Card>
              <Card className="premium-card text-center p-6 lg:p-8 group">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  10
                </div>
                <p className="text-muted-foreground font-medium text-sm lg:text-base">PhD & MSc Mentees Supported</p>
              </Card>
              <Card className="premium-card text-center p-6 lg:p-8 group">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                  20+
                </div>
                <p className="text-muted-foreground font-medium text-sm lg:text-base">Peer-Reviewed Publications</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Insights - Clean Card Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
                Latest Insights & Resources
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <FileText className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">COVID-19 Impact on Immunization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed text-sm">
                    How COVID-19 Shifted Immunization Access in Sidama region of Ethiopia.
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:underline" asChild>
                    <Link href="/blog">Read More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <AlertCircle className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">Nutrition and NCDs</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed text-sm">
                    A Silent Crisis: Understanding the link between nutrition and non-communicable diseases.
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:underline" asChild>
                    <Link href="/blog">Watch Video</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="premium-card group">
                <CardHeader className="pb-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <BookOpen className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">Clinical Trial Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 leading-relaxed text-sm">
                    What is Clinical Trial Monitoring? An essential guide to ensuring quality and compliance.
                  </CardDescription>
                  <Button variant="link" className="p-0 h-auto font-semibold text-primary hover:underline" asChild>
                    <Link href="/blog">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Newsletter Signup - Clean, Prominent CTA */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Stay Connected
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Sign up for our newsletter or follow us on social media
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg text-foreground border-0 focus:ring-2 focus:ring-primary-foreground/50 focus:outline-none transition-all duration-300"
                  aria-label="Email address"
                />
                <Button 
                  type="submit" 
                  variant="secondary" 
                  size="lg"
                  className="px-6 py-3 font-semibold hover:scale-[1.02] transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2"
                >
                  Subscribe
                </Button>
              </form>
              
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm text-primary-foreground/80">Follow us:</span>
                <div className="flex gap-3">
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300" asChild aria-label="Facebook">
                    <Link href="#">Facebook</Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300" asChild aria-label="LinkedIn">
                    <Link href="#">LinkedIn</Link>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300" asChild aria-label="YouTube">
                    <Link href="#">YouTube</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
