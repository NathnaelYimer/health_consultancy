import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to advance your clinical research in Africa?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Partner with Ethiopia's premier clinical research and regulatory consultancy. Let's discuss how we can support your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-6 text-base font-semibold"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base font-medium bg-transparent border-white/30 hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
