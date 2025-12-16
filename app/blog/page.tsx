"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User, Facebook, Linkedin, Youtube, Mail } from "lucide-react"
import { useEffect } from "react"
import { useState } from "react"

export default function BlogPage() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const blogPosts = [
    {
      id: "clinical-trials-ethiopia",
      title: "Why Clinical Trials Matter for Ethiopia's Health Future",
      author: "Dr. Abel Gedefaw",
      date: "June 2025",
      tags: ["Clinical Trials", "Capacity Building", "Public Health"],
      excerpt:
        "Learn how clinical research shapes health policy and why Ethiopia must invest in trial infrastructure...",
      image: "/medical-research-lab.png",
    },
    {
      id: "malaria-resurgence",
      title: "Malaria Resurgence: What We've Learned from Recent Outbreaks",
      author: "Health Evidence Team",
      date: "May 2025",
      tags: ["Malaria", "Prevention", "Health Systems"],
      excerpt:
        "Despite global progress, malaria remains a major threat. Here's how Ethiopia can respond strategically...",
      image: "/malaria-mosquito-prevention.jpg",
    },
    {
      id: "covid-maternal-health",
      title: "The Impact of COVID-19 on Maternal Health Services",
      author: "Dr. Birkneh Tilahun Tadesse",
      date: "April 2025",
      tags: ["Maternal Health", "COVID-19", "Health Access"],
      excerpt:
        "An in-depth analysis of how the pandemic disrupted maternal health services and lessons for future preparedness...",
      image: "/maternal-health-clinic.jpg",
    },
    {
      id: "phd-mentorship",
      title: "Building Research Capacity: Our PhD Mentorship Journey",
      author: "Wassu Gedefaw",
      date: "March 2025",
      tags: ["Capacity Building", "Education", "Research"],
      excerpt: "Reflections on mentoring the next generation of health researchers in Ethiopia...",
      image: "/university-students-research.jpg",
    },
  ]

  const categories = [
    "Maternal Health",
    "Policy",
    "Vaccine",
    "Clinical Trials",
    "Nutrition",
    "NCDs",
    "Capacity Building",
    "COVID-19",
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Newsletter subscription:", email)
    setSubscribed(true)
    setEmail("")
  }

  useEffect(() => {
    if (!subscribed) return
    const t = setTimeout(() => setSubscribed(false), 6000)
    return () => clearTimeout(t)
  }, [subscribed])

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
                <span className="text-sm font-semibold text-primary">✨ Latest Health Insights</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Insights & Updates
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Health perspectives, stories from the field, expert commentary, and research summaries.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 group">
                    <div className="relative h-64 w-full overflow-hidden">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4 text-primary" /> {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" /> {post.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                      <Button variant="link" className="p-0 group-hover:text-primary transition-colors font-medium" asChild>
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </article>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular Posts */}
                <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Popular Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/blog/clinical-trial-monitoring" className="text-sm hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform font-medium">
                          → Clinical Trial Monitoring Essentials
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ncd-risk-factors" className="text-sm hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform font-medium">
                          → Understanding NCD Risk Factors
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/community-engagement" className="text-sm hover:text-primary transition-colors flex items-center gap-2 hover:translate-x-1 transition-transform font-medium">
                          → Community Engagement in Research
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary via-primary/95 to-secondary text-primary-foreground shadow-xl border-0 overflow-hidden relative">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <CardHeader className="relative z-10">
                    <CardTitle>Stay Connected</CardTitle>
                    <CardDescription className="text-primary-foreground/90">
                      Sign up for our newsletter or follow us on social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-md text-foreground border-0 shadow-lg focus:ring-2 focus:ring-primary-foreground/50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button variant="secondary" type="submit" className="shadow-lg hover:shadow-xl transition-all duration-300">
                        <Mail className="mr-2 h-4 w-4" /> Subscribe
                      </Button>
                    </form>

                    {subscribed && (
                      <div className="mt-3 rounded-md bg-white/20 backdrop-blur-sm p-3 text-sm text-primary-foreground border border-white/20">
                        Thanks — you're subscribed. Check your inbox for confirmation.
                      </div>
                    )}

                    <div className="mt-4">
                      <p className="font-medium mb-2">Follow us on:</p>
                      <div className="flex items-center gap-3">
                        <Link href="#" aria-label="Facebook" className="inline-flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                          <Facebook className="h-5 w-5 text-white" /> <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                          <Linkedin className="h-5 w-5 text-white" /> <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" aria-label="YouTube" className="inline-flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                          <Youtube className="h-5 w-5 text-white" /> <span className="sr-only">YouTube</span>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
