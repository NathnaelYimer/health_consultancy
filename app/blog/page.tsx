"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, User } from "lucide-react"
import { useState } from "react"

export default function BlogPage() {
  const [email, setEmail] = useState("")

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
    alert(`Thanks for subscribing with ${email}!\n\nNote: Connect an email service to enable actual subscriptions.`)
    setEmail("")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Insights & Updates</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Health perspectives, stories from the field, expert commentary, and research summaries.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />
                    <CardHeader>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                      <CardDescription>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button variant="link" className="p-0" asChild>
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Popular Posts */}
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Posts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/blog/clinical-trial-monitoring" className="text-sm hover:text-primary">
                          Clinical Trial Monitoring Essentials
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/ncd-risk-factors" className="text-sm hover:text-primary">
                          Understanding NCD Risk Factors
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog/community-engagement" className="text-sm hover:text-primary">
                          Community Engagement in Research
                        </Link>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Categories */}
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                        >
                          {category}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Subscribe to Blog Updates</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Get the latest insights delivered to your inbox
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                      <input
                        type="email"
                        placeholder="Your email"
                        className="px-4 py-2 rounded-md text-foreground"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button variant="secondary" type="submit">
                        Subscribe
                      </Button>
                    </form>
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
