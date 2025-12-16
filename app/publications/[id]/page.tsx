import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"

export default async function PublicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Sample publication data - in production, fetch from database
  const publication = {
    id,
    title: "Shifting Patterns of Immunization Uptake During COVID-19 in Sidama",
    authors: "Gedefaw A., Asefa A., et al.",
    journal: "BMC Health Services Research",
    year: "2025",
    type: "Research Article",
    fullSummary: `
      <h2>Abstract</h2>
      <p>This comprehensive study examines the impact of the COVID-19 pandemic on routine immunization services in the Sidama region of Ethiopia.</p>
      
      <h2>Background</h2>
      <p>The COVID-19 pandemic disrupted healthcare services globally, with particular impact on routine immunization programs in low- and middle-income countries.</p>
      
      <h2>Methods</h2>
      <p>We conducted a mixed-methods study combining quantitative service utilization data with qualitative interviews of healthcare workers and caregivers.</p>
      
      <h2>Results</h2>
      <p>Immunization uptake decreased by 32% during the pandemic peak, with significant variations across different vaccine types and geographic areas.</p>
      
      <h2>Conclusions</h2>
      <p>The findings highlight the need for resilient health systems that can maintain essential services during health emergencies.</p>
    `,
    pdfUrl: "/publications/immunization-covid19.pdf",
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" className="mb-8" asChild>
                <Link href="/publications">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Publications
                </Link>
              </Button>

              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl mb-4">{publication.title}</CardTitle>
                  <div className="text-muted-foreground space-y-1">
                    <p>
                      <strong>Authors:</strong> {publication.authors}
                    </p>
                    <p>
                      <strong>Published in:</strong> {publication.journal} ({publication.year})
                    </p>
                    <p>
                      <strong>Type:</strong> {publication.type}
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button>
                      <Download className="h-4 w-4 mr-2" />
                      Download Full PDF
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: publication.fullSummary }} />
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
