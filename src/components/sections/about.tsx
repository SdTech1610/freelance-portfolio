"use client"

import { motion } from "framer-motion"
import { Briefcase, Layers, Rocket, Users } from "lucide-react"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: <Rocket className="h-6 w-6 text-primary" />, 
    title: "10+", 
    subtitle: "Projects Delivered",
    description: "Successful delivery of web and mobile applications for global clients."
  },
  {
   icon: <Briefcase className="h-6 w-6 text-primary" />, 
   title: "4+", 
   subtitle: "Years Experience",
   description: "Expertise in full stack development with modern tech stack."
  },
  {
   icon: <Layers className="h-6 w-6 text-primary" />,
   title: "20+",
   subtitle: "Freelance Projects",
   description: "Completed diverse freelance assignments across various domains."
  }
]

export function About() {
  return (
    <SectionReveal id="about" className="bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              I Help Brands To <br />
              <span className="text-gradient">Scale Digitally</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              As a senior full stack developer with over 4 years of hands-on experience, 
              I specialize in turning complex ideas into high-performance web solutions. 
              My journey began in web development in 2020, and since then, I've had the pleasure 
              of working with numerous startups and enterprises.
            </p>
             <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm passionate about clean code, performance optimization, and accessibility. 
              Currently, I'm available for freelance projects and consulting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <motion.div
                 key={idx}
                 whileHover={{ y: -5 }}
                 className={idx === 2 ? "sm:col-span-2" : ""}
              >
                  <Card className="glass h-full border-white/5 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4">{item.icon}</div>
                       <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                       <p className="font-semibold text-primary/80 mb-2">{item.subtitle}</p>
                       <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
