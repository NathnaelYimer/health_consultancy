import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhyPartnerSection() {
  const benefits = [
    {
      title: "Ethiopia: A Strategic Hub",
      description: "Leverage Ethiopia's large, diverse population, high disease burden for key therapeutic areas, and improving regulatory environment to conduct impactful clinical research.",
    },
    {
      title: "Dual Expertise",
      description: "Benefit from our unique combination of clinical research experience and regulatory systems knowledge, ensuring faster approvals and smoother trial execution.",
    },
    {
      title: "First-Mover Advantage",
      description: "Partner with Ethiopia's first CRO with GCP/Regulatory Compliance capacity, reducing the need for expensive international consultants.",
    },
    {
      title: "Regulatory Excellence",
      description: "Our deep understanding of EFDA & WHO requirements ensures your studies meet the highest international standards while satisfying local regulations.",
    },
    {
      title: "Proven Track Record",
      description: "Our leadership has successfully navigated complex clinical trials and regulatory processes, bringing invaluable experience to your projects.",
    },
    {
      title: "Local Knowledge, Global Standards",
      description: "We combine deep local expertise with international best practices to deliver high-quality, compliant research outcomes.",
    },
  ]

  return (
    <section id="why-partner" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With TMB Health Consultancy?
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              We offer unique advantages that make us the ideal partner for your clinical research and regulatory needs in Ethiopia and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to start your next project?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact us today to discuss how we can support your clinical research and regulatory needs in Ethiopia and across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
