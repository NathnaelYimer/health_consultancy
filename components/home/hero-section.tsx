import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <span>Ethiopia's First Full-Service Clinical Research Organization</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance text-foreground leading-tight tracking-tight">
            TMB Health Consultancy
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6">
            Advancing Regulatory Excellence in Africa
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 text-pretty leading-relaxed max-w-4xl mx-auto">
            TMB Health Consultancy is an Ethiopia-based clinical research and regulatory firm working toward establishing the first full-service Clinical Research Organization (CRO) in Ethiopia, while providing comprehensive Good Manufacturing Practice (GMP), Good Distribution Practice (GDP), Quality Management System (QMS), Drug Registration and Importing, and regulatory compliance consulting.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
