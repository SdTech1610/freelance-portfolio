import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { Hero } from "@/components/sections/hero"

// Dynamic imports for sections below the fold
const TechStack = dynamic(() => import("@/components/sections/tech-stack").then(mod => mod.TechStack), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
})
const Testimonials = dynamic(() => import("@/components/sections/testimonials").then(mod => mod.Testimonials), {
  loading: () => <div className="h-96 animate-pulse bg-muted/20" />
})

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the official portfolio of Smit Doshi, a senior full stack developer and freelancer."
}

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Testimonials />
    </>
  )
}
