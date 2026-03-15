"use client"

import { motion } from "framer-motion"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const techCategories = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Redux", "Framer Motion"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Golang", "Express", "NestJS", "FastAPI"],
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Drizzle"],
  },
  {
    name: "Tools & DevOps",
    skills: ["Docker", "GitHub", "AWS", "Vercel", "Jest", "Postman"],
  },
]

export function TechStack() {
  return (
    <SectionReveal id="tech-stack" className="bg-background overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expertise In Modern <br /> <span className="text-gradient">Tech Stack</span></h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            I use the best technologies to build high-performance products that scale.
            A combination of modern frontend frameworks and robust backend technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="will-change-transform"
            >
              <Card className="glass border-white/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full p-2">
                <CardContent className="p-4 sm:p-6 text-left">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <span className="w-1.5 h-6 bg-primary rounded-full mr-3" />
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 bg-white/5 hover:bg-primary/20 hover:text-white transition-colors cursor-default">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
