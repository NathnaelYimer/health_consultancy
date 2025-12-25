import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            TMB Health Consultancy
          </h1>
          
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
            Establishing Ethiopia's First Full-Service Clinical Research Organization
          </h2>
          
          <h3 className="text-xl text-blue-700 dark:text-blue-300 font-medium">
            Advancing Regulatory Excellence in Africa
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 dark:text-gray-300 mt-6 mb-8">
              TMB Health Consultancy (TMB) is an Ethiopia-based clinical research and regulatory firm
              working toward establishing the first full-service Clinical Research Organization (CRO) in
              Ethiopia, while providing comprehensive Good Manufacturing Practice (GMP), Good
              Distribution Practice (GDP), Quality Management System (QMS), Drug Registration and
              Importing, and regulatory compliance consulting during clinical research and drug
              manufacturing, importing, and distribution for pharmaceutical companies, sponsors, academia,
              research organizations, government/non-government agencies.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Built on a deep national regulatory system, quality improvement strategies, and leadership
              and real-world clinical trial implementation experience, TMB bridges global clinical research
              standards with Ethiopia's regulatory and health system context.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl mt-8">
            {[
              "CRO Development & Clinical Research Services",
              "Regulatory, GMP, GDP & Quality Systems Consulting",
              "EFDA & WHO-Aligned Compliance",
              "Ethiopia-Based, Africa-Focused"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary text-2xl mb-2">
                  {String.fromCodePoint(0x1F4C8)}
                </div>
                <p className="text-sm font-medium text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]" 
              asChild
            >
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto px-8 py-6 text-base font-medium"
              asChild
            >
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
