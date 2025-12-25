import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About TMB Health Consultancy
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Who We Are</h3>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 space-y-4">
                  <p>
                    TMB Health Consultancy was born from a unique partnership between two pioneering experts.
                    We combine direct, hands-on experience running complex clinical trials in Ethiopia with
                    top-tier regulatory systems knowledge. This fusion allows us to not only conduct studies
                    to the highest global standards but also to consult on and shape the very regulatory
                    and quality frameworks that govern them.
                  </p>
                  <p>
                    We are based in Addis Ababa, built for Africa, and ready to partner on your most ambitious projects.
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
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To be Africa's most trusted clinical research partner and regulatory excellence hub,
                  anchored in Ethiopia through a trusted, independent, full-service Clinical Research
                  Organization, generating high-quality evidence to inform policy, improve care, and
                  advance global health equity.
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  To strengthen Ethiopia's and Africa's clinical research and regulatory ecosystems by:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Establishing inspection-ready CRO systems</li>
                  <li>Delivering ethical, high-quality clinical research services</li>
                  <li>Supporting pharmaceutical and medical device regulatory compliance</li>
                  <li>Protecting research participants and public health by implementing GCP-compliant research and regulatory systems</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">Our Leadership</h3>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-2">Dr. Abel Gedefaw, MD, MPH (PhD Candidate, Karolinska Institutet)</h4>
                <p className="text-blue-600 dark:text-blue-300 font-medium mb-3">Clinical Research & CRO Development Lead</p>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 text-sm">
                  <p className="mb-3">
                    A clinician specializing in Obstetrics and Gynecology, a mid-career researcher in Maternal and Child Health and infectious disease with 30+ publications and direct experience as a National PI for multi-center trials. He has navigated the full lifecycle of Phase III-IV studies in Ethiopia—from ethics submissions and SAE reporting to surviving 16 GCP inspections and developing a complete suite of ICH-GCP SOPs and CAPA.
                  </p>
                  <p>
                    In his leadership role, he established the first clinical trial unit at Hawassa University, which began the institution's mission by conducting a Phase II Marburg vaccine trial. He ensures our CRO operations are rooted in practical, field-tested excellence.
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="link" size="sm" className="p-0 h-auto text-blue-600 hover:no-underline" asChild>
                    <Link href="/about#dr-abel">View Full Bio</Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-2">Wassu Gedefaw, MSc, Clinical Pharmacy</h4>
                <p className="text-blue-600 dark:text-blue-300 font-medium mb-3">Head of Regulatory & Quality Systems Lead</p>
                <div className="prose dark:prose-invert text-gray-600 dark:text-gray-300 text-sm">
                  <p>
                    The strategic advisor who recently led the Ethiopian FDA to achieve WHO Maturity Level 3. A master of GMP, GDP, and QMS, he provides our clients with an unmatched advantage in regulatory strategy, quality compliance, and navigating complex submissions. His expertise ensures that quality is designed into every process, from manufacturing to clinical delivery.
                  </p>
                </div>
                <div className="mt-4">
                  <Button variant="link" size="sm" className="p-0 h-auto text-blue-600 hover:no-underline" asChild>
                    <Link href="/about#wassu-gedefaw">View Full Bio</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
              <Link href="/about">Learn More About Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
