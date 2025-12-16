"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Download, Search } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function PublicationsPage() {
  const allPublications = [
    {
      id: 1,
      title: "Shifting Patterns of Immunization Uptake During COVID-19 in Sidama",
      authors: "Gedefaw A., Asefa A., et al.",
      journal: "BMC Health Services Research",
      year: "2025",
      type: "Research Article",
      summary:
        "This study explores service utilization shifts in Ethiopia's healthcare system during the COVID-19 pandemic and their policy implications.",
      pdfUrl: "/publications/immunization-covid19.pdf",
    },
    {
      id: 2,
      title: "Maternal Health Service Accessibility in Rural Ethiopia",
      authors: "Gedefaw A., Tilahun B., et al.",
      journal: "The Lancet Global Health",
      year: "2024",
      type: "Research Article",
      summary:
        "Analysis of barriers and facilitators to maternal health service access in rural Ethiopian communities.",
      pdfUrl: "/publications/maternal-health-rural.pdf",
    },
    {
      id: 3,
      title: "Clinical Trial Implementation Guidelines for Ethiopia",
      authors: "Gedefaw A., et al.",
      journal: "Ethiopian Ministry of Health",
      year: "2024",
      type: "Guideline",
      summary: "Comprehensive guidelines for implementing clinical trials in the Ethiopian context.",
      pdfUrl: "/publications/clinical-trial-guidelines.pdf",
    },
  ]

  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredPublications = allPublications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.summary.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = activeCategory === "All" || pub.type === activeCategory

    return matchesSearch && matchesCategory
  })

  const categories = [
    { name: "All", count: allPublications.length },
    { name: "Research Article", count: 2 },
    { name: "Policy Briefs", count: 12 },
    { name: "Guideline", count: 1 },
    { name: "Annual Reports", count: 5 },
    { name: "Position Statements", count: 6 },
  ]

  const handleDownload = (pdfUrl: string, title: string) => {
    console.log("[v0] Downloading publication:", title)
    // In production, this would trigger actual PDF download
    alert(`Downloading: ${title}\n\nNote: Connect a real PDF storage system to enable actual downloads.`)
  }

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
                <span className="text-sm font-semibold text-primary">✨ Research & Evidence</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Our Publications
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Sharing evidence to inform health decisions, policy, and practice.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
                      <Input
                        placeholder="Search publications by keyword, author, or topic..."
                        className="pl-10 border-2 focus:border-primary"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    {searchTerm && (
                      <Button onClick={() => setSearchTerm("")} variant="outline" className="border-2">
                        Clear
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8 border-b bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.name)}
                    className={activeCategory === category.name ? "shadow-lg" : "hover:border-primary transition-all duration-300"}
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              {searchTerm ? `Search Results (${filteredPublications.length})` : "Featured Publications"}
            </h2>

            {filteredPublications.length === 0 ? (
              <Card className="max-w-md mx-auto text-center p-8">
                <CardContent>
                  <p className="text-muted-foreground text-lg">No publications found matching your search.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filteredPublications.map((pub) => (
                  <article key={pub.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 p-6 group">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{pub.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong className="text-foreground">{pub.authors}</strong> — {pub.journal} ({pub.year})
                        </p>
                        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pub.summary}</p>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Button variant="outline" size="sm" onClick={() => handleDownload(pub.pdfUrl, pub.title)} className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                            <Download className="h-4 w-4 mr-2" /> Download PDF
                          </Button>
                          <Button variant="link" size="sm" className="group-hover:text-primary transition-colors font-medium" asChild>
                            <Link href={`/publications/${pub.id}`}>Read Summary →</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="w-20 h-20 flex items-center justify-center bg-primary/10 rounded-lg group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                        <FileText className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
                Load More Publications
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
