"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Mastering Next.js 14 App Router",
    excerpt: "Everything you need to know about server components, layouts, and robust data fetching in the latest Next.js version.",
    date: "March 10, 2024",
    readTime: "8 min read",
    category: "Next.js",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "The Ultimate Guide to TypeScript in 2024",
    excerpt: "Why TypeScript is more important than ever and how to leverage its advanced features for cleaner code.",
    date: "February 25, 2024",
    readTime: "12 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Golang for High Performance Backend",
    excerpt: "Comparing Golang with Node.js and why you should consider it for your next high-load microservice.",
    date: "January 15, 2024",
    readTime: "10 min read",
    category: "Golang",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
  }
]

export function Blog() {
  return (
    <SectionReveal id="blog" className="bg-slate-900/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Latest from <span className="text-gradient">Blog</span></h2>
            <p className="max-w-xl text-muted-foreground text-lg leading-relaxed">
              Sharing my thoughts, experiences, and technical guides for the developer community.
            </p>
          </div>
          <Button variant="outline" className="border-white/10 hover:bg-white/5 h-12 px-8 rounded-full" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="glass h-full border-white/5 group hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-white border-0">{post.category}</Badge>
                  </div>
                </div>
                <CardHeader className="p-6 pb-2 flex-grow">
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </CardHeader>
                <CardFooter className="p-6 pt-0 mt-auto">
                  <Button variant="link" className="p-0 h-auto text-primary group-hover:text-primary/100" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
