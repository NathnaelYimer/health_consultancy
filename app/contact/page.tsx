"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Twitter, Instagram, Clock } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible.",
        })
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
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
                <span className="text-sm font-semibold text-primary">✨ We're Here to Help</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Get in Touch
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We'd love to hear from you — whether it's a collaboration, question, or feedback. Use the form
                or reach us directly via phone or email.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="overflow-hidden border-2 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-primary via-primary/95 to-secondary p-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="relative z-10">
                      <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
                      <p className="text-primary-foreground/90 mt-1">We typically respond within 2 business days.</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="Your full name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <Label htmlFor="phone">Phone Number (optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+251 9xx xxx xxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            placeholder="Short subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          placeholder="How can we help? Provide relevant details..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button type="submit" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Submit Message"}
                        </Button>
                        <div className="text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span className="font-medium">We reply within 48 hours</span>
                          </div>
                        </div>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Map */}
                <div className="mt-6 rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    title="Office location"
                    src="https://www.google.com/maps?q=Hawassa%2C%20Ethiopia&output=embed"
                    className="w-full h-64"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Contact Details</CardTitle>
                    <CardDescription>Reach us directly via phone, email, or visit our office.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                        <MapPin className="h-5 w-5 text-primary group-hover/item:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Office Address</p>
                        <p className="text-sm text-muted-foreground">Hawassa, Ethiopia<br/>Addis Ababa (Branch)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                        <Phone className="h-5 w-5 text-primary group-hover/item:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <p className="text-sm text-muted-foreground">+251 912 445575</p>
                        <a href="tel:+251912445575" className="text-sm text-primary hover:underline font-medium">Call Now</a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded-lg transition-colors">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-300">
                        <Mail className="h-5 w-5 text-primary group-hover/item:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <p className="text-sm text-muted-foreground">abel.gedefaw@yahoo.com</p>
                        <a href="mailto:abel.gedefaw@yahoo.com" className="text-sm text-primary hover:underline font-medium">Email Us</a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Follow Us</CardTitle>
                    <CardDescription>Stay updated via our social channels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      <a href="#" aria-label="Facebook" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                        <Facebook className="h-5 w-5" /> Facebook
                      </a>
                      <a href="#" aria-label="LinkedIn" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                        <Linkedin className="h-5 w-5" /> LinkedIn
                      </a>
                      <a href="#" aria-label="YouTube" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium">
                        <Youtube className="h-5 w-5" /> YouTube
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-transparent hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Quick Links</CardTitle>
                    <CardDescription>Resources and FAQs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      <a href="/faq" className="text-sm text-primary hover:underline font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
                        → View FAQ
                      </a>
                      <a href="/publications" className="text-sm text-primary hover:underline font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
                        → Publications
                      </a>
                      <a href="/projects" className="text-sm text-primary hover:underline font-medium flex items-center gap-2 hover:translate-x-1 transition-transform">
                        → Our Projects
                      </a>
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
