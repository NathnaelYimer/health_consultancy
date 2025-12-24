import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function LeadershipSection() {
  const leaders = [
    {
      name: "Dr. Abel Gedefaw, MD, MPH",
      role: "Clinical Research & CRO Development Lead",
      bio: "A clinician specializing in Obstetrics and Gynecology with 30+ publications and direct experience as a National PI for multi-center trials. Established the first clinical trial unit at Hawassa University.",
      image: "/images/dr-abel-gedefaw.jpg",
      fallback: "AG"
    },
    {
      name: "Wassu Gedefaw, MSc, Clinical Pharmacy",
      role: "Head of Regulatory & Quality Systems",
      bio: "Led the Ethiopian FDA to achieve WHO Maturity Level 3. Expert in GMP, GDP, and QMS, providing unmatched advantage in regulatory strategy and quality compliance.",
      image: "/images/wassu-gedefaw.jpg",
      fallback: "WG"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
          <p className="text-lg text-muted-foreground">
            A unique partnership of clinical research and regulatory excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <Card key={index} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 bg-gradient-to-r from-primary/10 to-secondary/10">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <Avatar className="w-32 h-32 border-4 border-white">
                    <AvatarImage src={leader.image} alt={leader.name} />
                    <AvatarFallback className="text-2xl font-bold">{leader.fallback}</AvatarFallback>
                  </Avatar>
                </div>
              </div>
              <CardHeader className="pt-20 text-center">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-primary font-medium">{leader.role}</p>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-center">
                  {leader.bio}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
