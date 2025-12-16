"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Facebook, Linkedin, Youtube, Twitter, Instagram } from "lucide-react"
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
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
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
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Get in Touch</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We'd love to hear from you. Please fill out the form below or reach out directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>Fill out the form and we'll get back to you as soon as possible</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number (optional)</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Input
                            id="subject"
                            required
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : "Submit Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {/* Direct Contact */}
                <Card>
                  <CardHeader>
                    <CardTitle>Direct Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Office Address</p>
                        <p className="text-sm text-muted-foreground">
                          Hawassa, Ethiopia
                          <br />
                          Addis Ababa (Branch)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Phone</p>
                        <p className="text-sm text-muted-foreground">+251 912 445575</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium mb-1">Email</p>
                        <p className="text-sm text-muted-foreground">abel.gedefaw@yahoo.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-3">
                      <Button variant="outline" size="icon" className="h-12 w-full bg-transparent" asChild>
                        <a href="#" aria-label="Facebook">
                          <Facebook className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="h-12 w-full bg-transparent" asChild>
                        <a href="#" aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="h-12 w-full bg-transparent" asChild>
                        <a href="#" aria-label="YouTube">
                          <Youtube className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="h-12 w-full bg-transparent" asChild>
                        <a href="#" aria-label="Twitter">
                          <Twitter className="h-5 w-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="icon" className="h-12 w-full bg-transparent" asChild>
                        <a href="#" aria-label="Instagram">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Link */}
                <Card className="bg-muted">
                  <CardHeader>
                    <CardTitle>Have Questions?</CardTitle>
                    <CardDescription>Check out our FAQ section for quick answers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href="/faq">View FAQ</a>
                    </Button>
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
