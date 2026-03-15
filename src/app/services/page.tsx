import type { Metadata } from "next"
import { Services as ServicesSection } from "@/components/sections/services"
import { Testimonials } from "@/components/sections/testimonials"

export const metadata: Metadata = {
  title: "Services",
  description: "Senior freelance developer services including full stack development, API design, and performance optimization."
}

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <ServicesSection />
      <Testimonials />
    </div>
  )
}
