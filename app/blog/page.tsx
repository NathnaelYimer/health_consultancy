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
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
                    <div className="relative h-64 w-full">
                      <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" /> {post.author}
                        </span>
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> {post.date}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-4">{post.excerpt}</p>
                      <Button variant="link" className="p-0" asChild>
                        <Link href={`/blog/${post.id}`}>Read More →</Link>
                      </Button>
                    </div>
                  </article>
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

                <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                  <CardHeader>
                    <CardTitle>Stay Connected</CardTitle>
                    <CardDescription className="text-primary-foreground/80">
                      Sign up for our newsletter or follow us on social media
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-2 rounded-md text-foreground"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Button variant="secondary" type="submit">
                        <Mail className="mr-2 h-4 w-4" /> Subscribe
                      </Button>
                    </form>

                    {subscribed && (
                      <div className="mt-3 rounded-md bg-white/10 p-3 text-sm text-primary-foreground">
                        Thanks — you're subscribed. Check your inbox for confirmation.
                      </div>
                    )}

                    <div className="mt-4">
                      <p className="font-medium mb-2">Follow us on:</p>
                      <div className="flex items-center gap-3">
                        <Link href="#" aria-label="Facebook" className="inline-flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                          <Facebook className="h-5 w-5 text-white" /> <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
                          <Linkedin className="h-5 w-5 text-white" /> <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" aria-label="YouTube" className="inline-flex items-center gap-2 p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
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
