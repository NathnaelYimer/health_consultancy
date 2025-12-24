import { CheckCircle2, Globe, Award, ShieldCheck, Users, Target, BarChart2, Compass, Zap } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      title: "Dual Expertise",
      description: "Our unique combination of clinical research and regulatory systems expertise provides clients with comprehensive solutions",
      icon: <Award className="w-6 h-6 text-primary" />
    },
    {
      title: "Regulatory Insight",
      description: "Deep understanding of EFDA and WHO requirements, with direct experience in regulatory system strengthening",
      icon: <ShieldCheck className="w-6 h-6 text-primary" />
    },
    {
      title: "Local Presence",
      description: "Ethiopia-based team with extensive on-the-ground experience and networks across the healthcare sector",
      icon: <Compass className="w-6 h-6 text-primary" />
    },
    {
      title: "Cost Efficiency",
      description: "Significant cost savings compared to international CROs, with equivalent quality standards",
      icon: <Zap className="w-6 h-6 text-primary" />
    }
  ]

  const advantages = [
    "Large, diverse population with high disease burden in key therapeutic areas",
    "Recently achieved WHO Maturity Level 3 regulatory environment",
    "Improving regulatory and clinical trial infrastructure",
    "Strategic gateway to East African markets"
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Partner With TMB Health Consultancy</h2>
          <p className="text-lg text-muted-foreground">
            Combining local expertise with global standards to deliver exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Ethiopia's Strategic Advantages</h3>
            <p className="text-muted-foreground mb-6">
              Why Ethiopia represents a compelling opportunity for clinical research and regulatory advancement
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <p className="text-gray-700">{advantage}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-lg mb-3">For Sponsors Running Trials:</h4>
            <p className="text-muted-foreground mb-4 italic">
              "Our regulatory consulting division gives our CRO an insider's understanding of the evolving Ethiopian and African landscape. 
              This means faster approval times, proactive compliance, and de-risked trial execution. We don't just follow regulations; we help shape them."
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6">For Companies Needing Compliance:</h4>
            <p className="text-muted-foreground italic">
              "Our CRO experience with rigorous audits and real-world GCP application directly informs our practical, actionable quality consulting. 
              We know what inspectors look for because we've been in your shoes."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
