"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse pointer-events-none will-change-[transform,opacity]" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] animate-bounce pointer-events-none will-change-transform" style={{ animationDuration: '8s' }} />
      </div>

      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20 uppercase tracking-widest leading-none">
            Welcome to SD Tech World
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
            Building Digital Experiences <br />
            With <span className="text-gradient">Modern Tech</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Leading senior full stack developer specializing in high-performance web applications,
            smooth user interfaces, and scalable backend solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <Button asChild size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-full group">
              <Link href="/contact" className="flex items-center">
                Hire Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-white/10 hover:bg-white/5 rounded-full">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a href="https://github.com/SdTech1610" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/smit-doshi-9990b020b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="/about" className="text-muted-foreground/40 hover:text-primary/100 transition-colors">
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <div className="w-1 h-2 bg-current rounded-full" />
          </div>
        </Link>
      </div>
    </section>
  )
}
