"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  const faqs = [
    {
      category: "Services",
      questions: [
        {
          q: "What types of consultancy services do you offer?",
          a: "We offer comprehensive health consultancy services including clinical trial design and management, GMP/GDP compliance audits, regulatory affairs support, quality management system implementation, public health research, health policy analysis, and capacity building programs.",
        },
        {
          q: "Do you work with international organizations?",
          a: "Yes, we collaborate with international partners including WHO, universities, research institutions, pharmaceutical companies, and NGOs. We have experience working on multinational studies and regulatory submissions.",
        },
        {
          q: "How do I request a consultation?",
          a: "You can request a consultation by filling out our contact form, sending an email to abel.gedefaw@yahoo.com, or calling us at +251 912 445575. We'll schedule an initial discussion to understand your needs.",
        },
      ],
    },
    {
      category: "Clinical Trials",
      questions: [
        {
          q: "What is your experience with clinical trial management?",
          a: "We have extensive experience in all phases of clinical trials, from protocol development through regulatory submission. Our team has managed trials in infectious diseases, maternal health, NCDs, and vaccines.",
        },
        {
          q: "Do you provide ethical review support?",
          a: "Yes, we assist with ethical review submissions, protocol amendments, and ongoing safety reporting. We work with Ethiopian IRBs and international ethics committees.",
        },
        {
          q: "Can you help with trial monitoring and quality assurance?",
          a: "Absolutely. We provide comprehensive monitoring services including site initiation visits, routine monitoring, close-out visits, and quality audits to ensure GCP compliance.",
        },
      ],
    },
    {
      category: "Regulatory Affairs",
      questions: [
        {
          q: "Do you assist with EFDA submissions?",
          a: "Yes, we provide full support for Ethiopian FDA submissions including product registration, clinical trial applications, import permits, and post-market surveillance requirements.",
        },
        {
          q: "Can you help with international regulatory submissions?",
          a: "We assist with regulatory strategies for various markets and can help prepare dossiers in CTD format for submission to international regulatory authorities.",
        },
        {
          q: "What is your experience with GMP audits?",
          a: "We conduct comprehensive GMP gap assessments for pharmaceutical manufacturing facilities, develop remediation plans, and support companies through the certification process.",
        },
      ],
    },
    {
      category: "Publications & Research",
      questions: [
        {
          q: "Where can I access your published research?",
          a: "Our publications are available on the Publications page. We share research articles, policy briefs, guidelines, and technical reports across various health topics.",
        },
        {
          q: "Do you collaborate on research projects?",
          a: "Yes, we actively seek research collaborations with universities, research institutes, and health organizations. Contact us to discuss potential partnerships.",
        },
        {
          q: "Can you provide technical writing support?",
          a: "We offer scientific writing services including manuscript preparation, protocol development, grant proposals, and technical reports.",
        },
      ],
    },
  ]

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
                <span className="text-sm font-semibold text-primary">✨ Common Questions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground/70 bg-clip-text text-transparent leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Find answers to common questions about our services and expertise
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqs.map((category) => (
                <Card key={category.category} className="border-2 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                      {category.category}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.category}-${index}`} className="border-b-2">
                          <AccordionTrigger className="text-left hover:text-primary transition-colors font-medium">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <Card className="max-w-2xl mx-auto mt-16 bg-gradient-to-br from-primary/5 to-transparent border-2 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
                <CardDescription className="text-base">
                  We're here to help. Get in touch with our team for personalized assistance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
