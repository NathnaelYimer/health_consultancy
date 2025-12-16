"use client"
import { useEffect, useMemo, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Item = { id: string; title: string; type: string; year?: number; snippet?: string }

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [index, setIndex] = useState<Item[]>([])

  useEffect(() => {
    fetch('/api/search-index')
      .then((r) => r.json())
      .then(setIndex)
      .catch(() => setIndex([]))
  }, [])

  const results = useMemo(() => {
    if (!query.trim()) return index
    const q = query.toLowerCase().trim()

    // Simple fuzzy scoring: higher score for title matches and shared words
    const score = (item: Item) => {
      let s = 0
      const title = item.title.toLowerCase()
      const snippet = (item.snippet || '').toLowerCase()
      if (title.includes(q)) s += 100
      if (snippet.includes(q)) s += 30
      const qWords = q.split(/\s+/)
      for (const w of qWords) {
        if (!w) continue
        if (title.includes(w)) s += 10
        if (snippet.includes(w)) s += 3
      }
      return s
    }

    return index
      .map((i) => ({ i, s: score(i) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.i)
  }, [query, index])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 lg:px-8 py-16">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6">Search</h1>

        <div className="max-w-2xl mb-8">
          <Input value={query} onChange={(e) => setQuery((e.target as HTMLInputElement).value)} placeholder="Search publications, posts, and resources" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {results.map((r) => (
            <Card key={r.id}>
              <CardHeader>
                <CardTitle>{r.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{r.type} {r.year ? `— ${r.year}` : ''}</p>
                <p className="text-muted-foreground">{r.snippet}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
