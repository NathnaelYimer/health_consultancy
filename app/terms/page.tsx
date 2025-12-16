import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8">Terms of Use</h1>
              <p className="text-muted-foreground mb-12">Last updated: December 2025</p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Acceptance of Terms</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      By accessing and using the Dr. Abel Health Consulting website and services, you accept and agree
                      to be bound by these Terms of Use. If you do not agree to these terms, please do not use our
                      services.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Services</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      Dr. Abel Health Consulting provides professional consultancy services in health research, clinical
                      trials, regulatory affairs, quality management, and related areas. All services are subject to
                      availability and separate contractual agreements.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Professional Advice</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      Information provided on this website is for general informational purposes only and does not
                      constitute professional advice. Specific consultancy services require formal engagement through a
                      service agreement.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Intellectual Property</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      All content on this website, including text, graphics, logos, and publications, is the property of
                      Dr. Abel Health Consulting or our content providers and is protected by copyright and intellectual
                      property laws. You may not reproduce, distribute, or create derivative works without express
                      written permission.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>5. User Conduct</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>You agree not to:</p>
                    <ul>
                      <li>Use our services for any unlawful purpose</li>
                      <li>Attempt to gain unauthorized access to our systems</li>
                      <li>Transmit harmful code or malware</li>
                      <li>Impersonate others or provide false information</li>
                      <li>Violate any applicable laws or regulations</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>6. Limitation of Liability</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      Dr. Abel Health Consulting shall not be liable for any indirect, incidental, special, or
                      consequential damages arising from use of our website or services. Our total liability shall not
                      exceed the amount paid for the specific service in question.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>7. Modifications</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                      posting to this page. Your continued use of our services constitutes acceptance of modified terms.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>8. Governing Law</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      These terms shall be governed by and construed in accordance with the laws of Ethiopia. Any
                      disputes shall be subject to the exclusive jurisdiction of Ethiopian courts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>9. Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      For questions about these Terms of Use, please contact:
                      <br />
                      <strong>Email:</strong> abel.gedefaw@yahoo.com
                      <br />
                      <strong>Phone:</strong> +251 912 445575
                    </p>
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
