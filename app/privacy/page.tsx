import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8">Privacy Policy</h1>
              <p className="text-muted-foreground mb-12">Last updated: December 2025</p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Information We Collect</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      We collect information that you provide directly to us, including when you request consultancy
                      services, subscribe to our newsletter, or contact us. This may include:
                    </p>
                    <ul>
                      <li>Name and contact information (email, phone number)</li>
                      <li>Organization name and role</li>
                      <li>Information about your inquiry or service request</li>
                      <li>Communications with our team</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. How We Use Your Information</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We use the information we collect to:</p>
                    <ul>
                      <li>Provide, maintain, and improve our consultancy services</li>
                      <li>Respond to your inquiries and service requests</li>
                      <li>Send you updates, newsletters, and relevant health information</li>
                      <li>Comply with legal obligations and protect our rights</li>
                      <li>Conduct research and analysis to improve our services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Information Sharing</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      We do not sell or rent your personal information to third parties. We may share your information
                      only in the following circumstances:
                    </p>
                    <ul>
                      <li>With your explicit consent</li>
                      <li>With service providers who assist us in operating our business</li>
                      <li>When required by law or to protect rights and safety</li>
                      <li>In connection with a business transfer or acquisition</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Data Security</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal
                      information against unauthorized access, alteration, disclosure, or destruction. However, no
                      internet transmission is completely secure, and we cannot guarantee absolute security.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>5. Your Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>You have the right to:</p>
                    <ul>
                      <li>Access and receive a copy of your personal information</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Lodge a complaint with a supervisory authority</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>6. Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      If you have questions about this Privacy Policy or our data practices, please contact us at:
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
