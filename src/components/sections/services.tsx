"use client"

import { motion } from "framer-motion"
import { Code2, Globe, Server, Zap, Info, ArrowUpRight } from "lucide-react"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const servicesData = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "Full Stack Development",
    description: "End-to-end development of web applications using Next.js, Node.js, and Golang.",
    details: ["SPA & PWA development", "Custom CMS solutions", "Feature-rich dashboards"]
  },
  {
    icon: <Globe className="h-10 w-10 text-cyan-400" />,
    title: "Website Development",
    description: "Modern, responsive, and SEO-friendly websites that convert visitors into customers.",
    details: ["Landing pages", "Portfolio websites", "E-commerce platforms"]
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "API Development",
    description: "Robust and scalable RESTful and GraphQL APIs built with best practices.",
    details: ["Microservices architecture", "Authentication & Authorization", "Third-party integrations"]
  },
  {
    icon: <Zap className="h-10 w-10 text-cyan-400" />,
    title: "Performance Optimization",
    description: "Speeding up your web apps for better user experience and higher SEO ranking.",
    details: ["Core Web Vitals improvement", "Database indexing", "Asset optimization"]
  }
]

export function Services() {
  return (
    <SectionReveal id="services" className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert <br /> <span className="text-gradient">Services</span></h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            I offer a wide range of services to help your business grow.
            From concept to deployment, I ensure every detail is covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {servicesData.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full border-white/5 group hover:border-primary/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-3 transition-transform group-hover:scale-110 group-hover:bg-primary/10">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {service.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                      <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-primary/80 transition-colors">
                        <Link href="/contact" className="flex items-center">
                          Get Quote <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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
