"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Filter, Code, Globe, Database } from "lucide-react"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projectData = [
    {
    "id": 1,
    "title": "Developer Portfolio Website",
    "description": "A modern and responsive developer portfolio built with Next.js, featuring smooth animations, dark/light mode, project showcases, and a clean UI for personal branding.",
    "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    "category": "Frontend",
    "tech": ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    "github": "",
    "live": "https://www.sdtechword.in"
  },
  {
    "id": 2,
    "title": "Blog Website with CMS",
    "description": "A modern blog platform built with Astro for the frontend and Decap CMS for content management. Features a clean UI, markdown-based posts, admin panel for managing blogs, and fast static site generation.",
    "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    "category": "Full Stack",
    "tech": ["Astro", "HTML", "CSS", "JavaScript", "Decap CMS"],
    "github": "",
    "live": "https://blog.sdtechworld.in"
  },
  {
  "id": 3,
  "title": "Online Cake Shop Website",
  "description": "An e-commerce platform for a cake shop with features like product catalog, online ordering, user authentication, cart management, order tracking, and admin dashboard for managing products and orders.",
  "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
  "category": "Frontend",
  "tech": ["HTML", "CSS", "JS", "SEO"],
  "github": "",
  "live": "https://parshwacakes.netlify.app/"
  },
  {
  "id": 4,
  "title": "Software Engineering & Payment System Integration",
  "description": "Delivered end-to-end software engineering consulting focused on improving accessibility and responsiveness across web and mobile platforms. Collaborated closely with stakeholders to ensure compliance with international usability standards and optimized user experience. Designed and implemented scalable and secure payment systems, from initial setup to advanced configurations, enabling seamless and reliable transactions.",
  "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
  "category": "Full Stack",
  "tech": ["Web Accessibility", "Responsive Design", "Payment Gateway Integration", "Security", "Performance Optimization"],
  "github": "",
  "live": "http://brand-to-product.com/credits"
  },
  {
    "id": 5,
    "title": "Inflera AI Web Application",
    "description": "Developed a full-stack AI-powered web application with a modern and scalable architecture. Built responsive UI components and complex state management on the frontend, while implementing secure backend APIs, database integrations, and cloud deployments for efficient performance and reliability.",
    "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
    "category": "Full Stack",
    "tech": ["React.js", "Redux", "SCSS", "Python", "Flask", "PostgreSQL", "AWS", "Vercel", "Wasabi"],
    "github": "",
    "live": "https://app.inflera.ai/"
  }
]

const categories = ["All", "Full Stack", "Frontend", "Backend"]

export function Projects() {
  const [filter, setFilter] = React.useState("All")

  const filteredProjects = filter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === filter)

  return (
    <SectionReveal id="projects" className="bg-slate-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Recent <span className="text-gradient">Work</span></h2>
          <p className="max-w-2xl text-muted-foreground text-lg leading-relaxed mb-8">
            Check out some of my recent projects. I specialize in building end-to-end 
            solutions for diverse business needs.
          </p>

          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                 className={cat === filter ? "bg-primary text-white border-0" : "border-white/10 hover:bg-white/5"}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {
              filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="glass overflow-hidden h-full border-white/5 group hover:border-primary/20 transition-all duration-500">
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                     <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                     />
                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                        {
                          project.github != "" &&
                          <Button variant="outline" size="icon" className="shadow-lg hover:bg-white/10 border-white/20" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-5 w-5" />
                            </a>
                        </Button>
                        }
                        <Button variant="outline" size="icon" className="shadow-lg hover:bg-white/10 border-white/20" asChild>
                             <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        </Button>
                     </div>
                  </div>
                  <CardHeader className="p-4 sm:p-6 pb-2">
                    <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs border-0">
                            {project.category}
                        </Badge>
                         <div className="flex space-x-1">
                            {project.tech.slice(0, 3).map(t => (
                                <span key={t} className="text-[10px] text-muted-foreground uppercase tracking-widest leading-none font-bold">{t}</span>
                            ))}
                         </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </CardContent>
                   <CardFooter className="p-4 sm:p-6 pt-0 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map(t => (
                                <Badge key={t} variant="outline" className="text-[10px] border-white/5 py-0 px-2 line-height-none uppercase">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                   </CardFooter>
                </Card>
              </motion.div>
            ))
              ) : (
                <h2 className="text-center text-2xl w-[100%] flex justify-center">No Projects</h2>
              )
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionReveal>
  )
}
