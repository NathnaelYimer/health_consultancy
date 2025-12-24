import { Briefcase, FileText, Users, Award } from "lucide-react"

const stats = [
  { id: 1, name: 'Years of Combined Experience', value: '15+', icon: Briefcase },
  { id: 2, name: 'Clinical Trials Managed', value: '50+', icon: FileText },
  { id: 3, name: 'Regulatory Approvals', value: '100+', icon: Award },
  { id: 4, name: 'Team Members', value: '25+', icon: Users },
]

export function StatsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.id} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
