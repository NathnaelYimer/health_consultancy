import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Who We Are</h3>
                <div className="prose text-gray-600 space-y-4">
                  <p>
                    TMB Health Consultancy was born from a unique partnership between two pioneering experts. 
                    We combine direct, hands-on experience running complex clinical trials in Ethiopia with 
                    top-tier regulatory systems knowledge.
                  </p>
                  <p>
                    We are locally led, globally compliant clinical research and regulatory services rooted in 
                    Ethiopian systems, but envisioned to target Africa.
                  </p>
                  <p>
                    We are currently building the systems, quality frameworks, and operational structures 
                    required to operate as a full-service CRO in Ethiopia, while delivering regulatory and 
                    quality consulting services today.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild variant="outline" size="lg">
                    <Link href="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-100 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Leadership</h3>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold text-blue-800 mb-2">Dr. Abel Gedefaw, MD, MPH</h4>
                    <p className="text-blue-600 font-medium mb-3">Clinical Research & CRO Development Lead</p>
                    <p className="text-gray-600 text-sm">
                      A clinician specializing in Obstetrics and Gynecology, a mid-career researcher in Maternal and Child Health and infectious disease with 30+ publications and direct experience as a National PI for multi-center trials. He has navigated the full lifecycle of Phase III-IV studies in Ethiopia.
                    </p>
                    <div className="mt-3">
                      <Button variant="link" size="sm" className="p-0 h-auto text-blue-600 hover:no-underline" asChild>
                        <Link href="/about#dr-abel">View Full Bio</Link>
                      </Button>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold text-blue-800 mb-2">Wassu Gedefaw, MSc, Clinical Pharmacy</h4>
                    <p className="text-blue-600 font-medium mb-3">Head of Regulatory & Quality Systems Lead</p>
                    <p className="text-gray-600 text-sm">
                      The strategic advisor who recently led the Ethiopian FDA to achieve WHO Maturity Level 3. A master of GMP, GDP, and QMS, he provides our clients with an unmatched advantage in regulatory strategy and quality compliance.
                    </p>
                    <div className="mt-3">
                      <Button variant="link" size="sm" className="p-0 h-auto text-blue-600 hover:no-underline" asChild>
                        <Link href="/about#wassu">View Full Bio</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 bg-blue-50">
              <div className="max-w-4xl mx-auto">
                <div className="md:flex items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700">
                      To be Africa's most trusted clinical research partner and regulatory excellence hub, anchored in Ethiopia through a trusted, independent, full-service Clinical Research Organization, generating high-quality evidence to inform policy, improve care, and advance global health equity.
                    </p>
                  </div>
                </div>

                <div className="h-px bg-blue-100 my-8"></div>

                <div className="md:flex items-center">
                  <div className="md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="text-gray-700 mb-4">
                      To strengthen Ethiopia's and Africa's clinical research and regulatory ecosystems by:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Establishing inspection-ready CRO systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Delivering ethical, high-quality clinical research services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Supporting pharmaceutical and medical device regulatory compliance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Protecting research participants and public health through GCP-compliant research and regulatory systems</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
