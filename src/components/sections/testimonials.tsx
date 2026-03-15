"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonialsData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO at TechStream",
    content: "Smit delivered our platform ahead of schedule with exceptional quality. His expertise in Next.js and frontend performance is top-notch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Founder of GreenLabs",
    content: "Working with Smit was a breeze. He translated our complex requirements into a simple, beautiful interface. Highly recommended!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Engineering at CloudScale",
    content: "Excellent communication and technical skills. He helped us migrate our legacy backend to a modern Node.js architecture seamlessly.",
    rating: 4,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  }
]

export function Testimonials() {
  const [current, setCurrent] = React.useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonialsData.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length)

  return (
    <SectionReveal id="testimonials" className="bg-background relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gradient">Client Testimonials</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Don't just take my word for it. Here's what some of my global clients have
            to say about our collaboration.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-white/5 p-8 sm:p-12 relative overflow-hidden">
                <Quote className="absolute -top-6 -left-6 w-32 h-32 text-primary/5 -rotate-12 pointer-events-none" />
                <CardContent className="p-0 flex flex-col items-center text-center relative z-10">
                  <div className="flex space-x-1 mb-8">
                    {[...Array(testimonialsData[current].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg md:text-2xl italic text-muted-foreground leading-relaxed mb-12 relative">
                    "{testimonialsData[current].content}"
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="relative w-16 h-16 mb-4">
                      <Image
                        src={testimonialsData[current].avatar}
                        alt={testimonialsData[current].name}
                        fill
                        sizes="64px"
                        quality={75}
                        className="rounded-full border-2 border-primary/20 object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{testimonialsData[current].name}</h4>
                    <p className="text-sm text-primary/80 font-medium">{testimonialsData[current].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-4 mt-12">
            <Button variant="outline" size="icon" onClick={prev} className="rounded-full border-white/10 hover:bg-white/5">
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} className="rounded-full border-white/10 hover:bg-white/5">
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </SectionReveal>
  )
}
