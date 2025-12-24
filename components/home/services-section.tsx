import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { 
  Microscope, 
  ClipboardCheck, 
  Gauge, 
  FileSearch, 
  Database, 
  FileCheck, 
  ClipboardList, 
  BookOpenCheck, 
  FileBarChart,
  ShieldCheck,
  Users,
  FileText,
  FileArchive,
  FileWarning,
  ClipboardSignature,
  FileSpreadsheet,
  FileCode,
  FilePieChart
} from "lucide-react"

export function ServicesSection() {
  const pillars = [
    {
      title: "PILLAR I: CLINICAL RESEARCH ORGANIZATION (CRO) SERVICES",
      description: "Under establishment – phased operationalization. TMB is actively preparing to operate as a full-service CRO, aligned with ICH-GCP, EFDA, and WHO requirements.",
      services: [
        {
          title: "Study Planning & Feasibility",
          description: "Country and site feasibility assessments, investigator and site selection, operational and regulatory risk assessment",
          icon: <FileSearch className="w-6 h-6 text-primary" />
        },
        {
          title: "Trial Startup & Regulatory Management",
          description: "EFDA Clinical Trial Application (CTA) support, ethics committee submission and lifecycle management, regulatory correspondence",
          icon: <ClipboardSignature className="w-6 h-6 text-primary" />
        },
        {
          title: "Clinical Trial Operations",
          description: "Trial coordination and site management, Investigator Site File (ISF) and TMF setup, vendor and logistics coordination",
          icon: <ClipboardList className="w-6 h-6 text-primary" />
        },
        {
          title: "Monitoring & Quality Oversight",
          description: "On-site, remote, and risk-based monitoring, GCP compliance oversight, inspection readiness support",
          icon: <ShieldCheck className="w-6 h-6 text-primary" />
        },
        {
          title: "Pharmacovigilance & Safety",
          description: "AE/SAE/SUSAR reporting systems, DSMB coordination, safety narrative and summary reporting",
          icon: <FileWarning className="w-6 h-6 text-primary" />
        },
        {
          title: "Data Management & Biostatistics",
          description: "CRF development (paper & EDC), database setup and validation, data cleaning, locking, and analysis",
          icon: <FileSpreadsheet className="w-6 h-6 text-primary" />
        },
        {
          title: "Study Close-out & Reporting",
          description: "Regulatory close-out activities, final clinical study reports, archiving and audit support",
          icon: <FileArchive className="w-6 h-6 text-primary" />
        }
      ]
    },
    {
      title: "PILLAR II: REGULATORY, GMP, GDP & QMS CONSULTING",
      description: "Fully operational services for pharmaceuticals, medical devices, and research institutions.",
      services: [
        {
          title: "Regulatory Strategy & Intelligence",
          description: "Product Registration (Pharma & Devices), Clinical Trial Application (CTA) Submissions, Variations, Renewals, Expert navigation of EFDA and African NRAs",
          icon: <FileText className="w-6 h-6 text-primary" />
        },
        {
          title: "Quality & Compliance Consulting",
          description: "GMP/GDP Audits & Gap Analysis, Quality Management System (QMS) Design & Implementation, CAPA Management, Facility readiness and inspection preparation, SOP development and implementation",
          icon: <Gauge className="w-6 h-6 text-primary" />
        },
        {
          title: "Regulatory Agency Advancement",
          description: "Preparation for WHO Global Benchmarking (Maturity Levels), Capacity Building for National Regulatory Authorities",
          icon: <FileBarChart className="w-6 h-6 text-primary" />
        },
        {
          title: "Pharmacovigilance System Development",
          description: "Establishment of corporate or national drug safety monitoring systems",
          icon: <FileCheck className="w-6 h-6 text-primary" />
        }
      ]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Comprehensive Services</h2>
          <p className="text-lg text-muted-foreground">
            Delivering end-to-end solutions that bridge global standards with local expertise
          </p>
        </div>

        {pillars.map((pillar, pillarIndex) => (
          <div key={pillarIndex} className="mb-16">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-primary mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground max-w-4xl mx-auto">{pillar.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pillar.services.map((service, serviceIndex) => (
                <Card key={`${pillarIndex}-${serviceIndex}`} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                      {service.icon}
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Commitment to Quality</h3>
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[/* eslint-disable @typescript-eslint/no-unused-vars */
              { text: "ICH-GCP (E6 R2/R3)", icon: <BookOpenCheck className="w-5 h-5 mx-auto mb-2" /> },
              { text: "WHO & EFDA Regulations", icon: <FileText className="w-5 h-5 mx-auto mb-2" /> },
              { text: "Declaration of Helsinki", icon: <ShieldCheck className="w-5 h-5 mx-auto mb-2" /> },
              { text: "International GMP & GDP", icon: <Gauge className="w-5 h-5 mx-auto mb-2" /> }
            ].map((item, index) => (
              <div key={index} className="bg-muted/30 p-4 rounded-lg">
                <div className="text-primary">{item.icon}</div>
                <p className="text-sm font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
