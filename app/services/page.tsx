import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Microscope, ClipboardCheck, Stethoscope, FileText, GraduationCap, Users, Shield, Package } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Services</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                We provide practical, evidence-driven consultancy to health systems, institutions, and individuals,
                focusing on real-world challenges and impact.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Research Implementation */}
              <Card>
                <CardHeader>
                  <Microscope className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Research Implementation & Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Study protocol development</li>
                    <li>• Research project design</li>
                    <li>• Grant writing and coordination</li>
                    <li>• Monitoring & evaluation</li>
                    <li>• Impact assessment</li>
                    <li>• Research project implementation</li>
                    <li>• Research grant budget preparation and reporting</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Clinical Trials */}
              <Card>
                <CardHeader>
                  <ClipboardCheck className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Clinical Trials Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Context-based clinical trial protocol development</li>
                    <li>• Trial site readiness & capacity building</li>
                    <li>• Trial implementation and monitoring (GCP compliance)</li>
                    <li>• Community engagement strategies</li>
                    <li>• Data safety monitoring support</li>
                    <li>• Ethical and regulatory compliance consultation</li>
                    <li>• Qualified clinical trialist recruitment</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Consultation Services */}
              <Card>
                <CardHeader>
                  <Stethoscope className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Consultation Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• One-on-one health care and prevention consultations</li>
                    <li>• Maternal health, child health, infectious diseases</li>
                    <li>• Expert second opinions for complex cases</li>
                    <li>• Virtual consults for Ethiopian diaspora patients</li>
                    <li>• Treatment consultations across multiple disciplines</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Policy & Advocacy */}
              <Card>
                <CardHeader>
                  <FileText className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Policy & Advocacy Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Translating evidence to policy briefs</li>
                    <li>• Development of national/regional guidelines</li>
                    <li>• Stakeholder workshops and roundtables</li>
                    <li>• Technical assistance to regional health bureaus</li>
                    <li>• Ministry of Health support</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Capacity Building */}
              <Card>
                <CardHeader>
                  <GraduationCap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Capacity Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Short-term training (research methods, trial coordination)</li>
                    <li>• MSc/PhD thesis supervision</li>
                    <li>• Training of trainers (ToT) modules</li>
                    <li>• Proposal and manuscript writing workshops</li>
                    <li>• Post-doctoral mentorship</li>
                  </ul>
                </CardContent>
              </Card>

              {/* CRO Services */}
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-2xl">Clinical Research Organization (CRO)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Full and partial clinical trial implementation in Ethiopia</li>
                    <li>• Clinical trial monitoring</li>
                    <li>• Health research project implementation</li>
                    <li>• Health-related project monitoring and evaluation</li>
                    <li>• Impact assessment</li>
                    <li>• Qualified health professionals recruitment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-24">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                  Comprehensive GMP, GDP, QMS, and Regulatory Compliance Consulting
                </h2>
                <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Expert consulting services for pharmaceuticals and medical devices to ensure quality, compliance, and
                  regulatory excellence
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Quality & Compliance Services */}
                <Card>
                  <CardHeader>
                    <Shield className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">Quality Management & GMP Compliance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• GMP implementation gap assessment and remediation planning</li>
                      <li>• Quality Management System (QMS) implementation and gap assessment</li>
                      <li>• Personnel training on GMP, GDP, and QMS requirements</li>
                      <li>• Data integrity audits and remediation plans</li>
                      <li>• Good distribution practice (GDP) compliance audits</li>
                      <li>• Cold chain management consulting</li>
                      <li>• All ISO standards implementation and certification support</li>
                      <li>• Risk management for any organizations</li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Regulatory Services */}
                <Card>
                  <CardHeader>
                    <Package className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">Regulatory Strategy & Market Access</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground mb-4">
                      <li>• Medicine and medical device dossier compilation (CTD format)</li>
                      <li>• Regulatory strategy development for local and international markets</li>
                      <li>• Import/export regulatory support</li>
                      <li>• Market entry strategy and regulatory landscape analysis</li>
                      <li>• Licensing, partnerships and technology transfer advisory</li>
                      <li>• Dossier submission and follow-up</li>
                      <li>• National regulatory authority WHO level 4 accreditation support</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-12">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Us for Regulatory Consulting</Link>
                </Button>
              </div>
            </div>

            <div className="text-center mt-24">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us to Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
