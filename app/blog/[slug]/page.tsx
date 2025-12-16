import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Link from "next/link"

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  // Sample blog post data - in production, fetch from database/CMS
  const blogPost = {
    slug,
    title: "Why Clinical Trials Matter for Ethiopia's Health Future",
    author: "Dr. Abel Gedefaw",
    date: "June 15, 2025",
    tags: ["Clinical Trials", "Capacity Building", "Public Health"],
    image: "/medical-research-lab.png",
    content: `
      <p class="text-xl leading-relaxed mb-6">Clinical trials are the backbone of evidence-based medicine, yet Ethiopia faces significant challenges in conducting high-quality research that meets international standards.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Current State of Clinical Research in Ethiopia</h2>
      <p class="mb-4">Ethiopia has made remarkable strides in improving health outcomes over the past two decades. However, much of the evidence guiding health interventions comes from studies conducted in other settings, which may not fully apply to the Ethiopian context.</p>
      
      <p class="mb-4">To develop truly effective health solutions, we need locally-generated evidence that accounts for Ethiopia's unique epidemiological profile, healthcare infrastructure, and socio-cultural factors.</p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Why Local Clinical Trials Matter</h2>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Genetic and environmental factors affect how treatments work</li>
        <li>Healthcare delivery models differ significantly across contexts</li>
        <li>Cultural beliefs and practices influence treatment adherence</li>
        <li>Disease patterns and co-morbidities vary by region</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Building Capacity for Excellence</h2>
      <p class="mb-4">Conducting world-class clinical trials requires substantial infrastructure investment and capacity building. Key areas include:</p>
      
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Regulatory frameworks:</strong> Strengthening ethics review and regulatory oversight</li>
        <li><strong>Research infrastructure:</strong> Upgrading laboratory and data management systems</li>
        <li><strong>Human resources:</strong> Training researchers, monitors, and study coordinators</li>
        <li><strong>Community engagement:</strong> Building trust and understanding with research participants</li>
      </ul>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Path Forward</h2>
      <p class="mb-4">Ethiopia has tremendous potential to become a regional hub for clinical research. With strategic investments in infrastructure, training, and partnerships, we can generate the evidence needed to guide health policy and practice.</p>
      
      <p class="mb-4">This is not just about conducting studies—it's about building a sustainable research ecosystem that continually improves health outcomes for all Ethiopians.</p>
    `,
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" className="mb-8" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blog
                </Link>
              </Button>

              <Card className="overflow-hidden">
                <img
                  src={blogPost.image || "/placeholder.svg"}
                  alt={blogPost.title}
                  className="w-full h-96 object-cover"
                />
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blogPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-4xl mb-4">{blogPost.title}</CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blogPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {blogPost.date}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
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
