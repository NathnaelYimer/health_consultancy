import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Comprehensive Services
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Delivering end-to-end solutions that bridge global standards with local expertise
          </p>
        </div>

        <div className="space-y-20">
          {pillars.map((pillar, pillarIndex) => (
            <div key={pillarIndex} className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-400 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                  {pillar.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillar.services.map((service, serviceIndex) => (
                  <Card 
                    key={`${pillarIndex}-${serviceIndex}`} 
                    className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border border-gray-200 dark:border-gray-700"
                  >
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 mb-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Quality & Compliance Standards
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "ICH-GCP (E6 R2/R3)",
                icon: <BookOpenCheck className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              },
              {
                title: "WHO & EFDA Regulations",
                icon: <FileText className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              },
              {
                title: "Declaration of Helsinki",
                icon: <ShieldCheck className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              },
              {
                title: "International GMP & GDP",
                icon: <Gauge className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="mb-3">{item.icon}</div>
                <h4 className="font-medium text-gray-900 dark:text-white">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
