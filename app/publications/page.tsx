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
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Publications</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Sharing evidence to inform health decisions, policy, and practice.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-slate-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search publications by keyword, author, or topic..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button onClick={() => setSearchTerm("")}>{searchTerm ? "Clear" : "Search"}</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.name)}
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
            <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">
              {searchTerm ? `Search Results (${filteredPublications.length})` : "Featured Publications"}
            </h2>

            {filteredPublications.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No publications found matching your search.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {filteredPublications.map((pub) => (
                  <article key={pub.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5">
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                        <p className="text-sm text-slate-600 mb-2">
                          <strong>{pub.authors}</strong> — {pub.journal} ({pub.year})
                        </p>
                        <p className="text-sm text-slate-500 mb-4">{pub.summary}</p>
                        <div className="flex items-center gap-3">
                          <Button variant="outline" size="sm" onClick={() => handleDownload(pub.pdfUrl, pub.title)}>
                            <Download className="h-4 w-4 mr-2" /> Download PDF
                          </Button>
                          <Button variant="link" size="sm" asChild>
                            <Link href={`/publications/${pub.id}`}>Read Summary →</Link>
                          </Button>
                        </div>
                      </div>
                      <div className="w-20 h-20 flex items-center justify-center bg-primary/5 rounded-lg">
                        <FileText className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
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
