import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DataProtectionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8">Data Protection Policy</h1>
              <p className="text-muted-foreground mb-12">Last updated: December 2025</p>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>1. Our Commitment to Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      Dr. Abel Health Consulting is committed to protecting the privacy and security of personal data in
                      accordance with applicable data protection laws and international best practices. This policy
                      outlines our approach to handling sensitive information in our consultancy and research
                      activities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>2. Data Protection Principles</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We process all personal data in accordance with the following principles:</p>
                    <ul>
                      <li>
                        <strong>Lawfulness, fairness, and transparency:</strong> We process data legally and inform
                        individuals about data use
                      </li>
                      <li>
                        <strong>Purpose limitation:</strong> Data is collected for specific, legitimate purposes only
                      </li>
                      <li>
                        <strong>Data minimization:</strong> We collect only necessary information
                      </li>
                      <li>
                        <strong>Accuracy:</strong> We maintain accurate and up-to-date records
                      </li>
                      <li>
                        <strong>Storage limitation:</strong> Data is retained only as long as necessary
                      </li>
                      <li>
                        <strong>Integrity and confidentiality:</strong> We implement appropriate security measures
                      </li>
                      <li>
                        <strong>Accountability:</strong> We demonstrate compliance with data protection principles
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>3. Research Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>For research and clinical trial activities, we implement enhanced data protection measures:</p>
                    <ul>
                      <li>Informed consent procedures meeting international ethical standards</li>
                      <li>Data anonymization and pseudonymization where appropriate</li>
                      <li>Secure data storage and transmission protocols</li>
                      <li>Access controls limiting data use to authorized personnel</li>
                      <li>Regular data protection impact assessments</li>
                      <li>Compliance with Good Clinical Practice (GCP) guidelines</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>4. Client Data Protection</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>When providing consultancy services, we protect client confidential information through:</p>
                    <ul>
                      <li>Non-disclosure agreements and confidentiality clauses in service contracts</li>
                      <li>Secure file storage and communication channels</li>
                      <li>Limited access to client information on a need-to-know basis</li>
                      <li>Regular staff training on data protection and confidentiality</li>
                      <li>Secure disposal of documents and data when no longer required</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>5. Technical and Organizational Measures</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>We implement comprehensive security measures including:</p>
                    <ul>
                      <li>Encrypted data storage and transmission</li>
                      <li>Regular system security updates and patches</li>
                      <li>Access controls and authentication protocols</li>
                      <li>Regular security audits and vulnerability assessments</li>
                      <li>Incident response and breach notification procedures</li>
                      <li>Staff training on data security best practices</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>6. Data Subject Rights</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>Individuals have the right to:</p>
                    <ul>
                      <li>Be informed about how their data is used</li>
                      <li>Access their personal data</li>
                      <li>Rectify inaccurate data</li>
                      <li>Request erasure of data (right to be forgotten)</li>
                      <li>Restrict or object to data processing</li>
                      <li>Data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                    <p>To exercise these rights, please contact us at abel.gedefaw@yahoo.com</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>7. Data Breach Response</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>In the event of a data breach, we will:</p>
                    <ul>
                      <li>Contain and assess the breach immediately</li>
                      <li>Notify affected individuals within 72 hours where required</li>
                      <li>Report to relevant supervisory authorities as required by law</li>
                      <li>Document the breach and our response</li>
                      <li>Implement measures to prevent future breaches</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>8. International Data Transfers</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      When transferring data internationally for collaborative research or consultancy, we ensure
                      adequate safeguards through:
                    </p>
                    <ul>
                      <li>Data processing agreements with international partners</li>
                      <li>Compliance with applicable data transfer mechanisms</li>
                      <li>Assessment of data protection standards in recipient countries</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>9. Contact for Data Protection Matters</CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-gray max-w-none">
                    <p>
                      For questions about data protection or to exercise your data rights:
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
