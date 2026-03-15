import { About as AboutSection } from "@/components/sections/about"
import { TechStack } from "@/components/sections/tech-stack"

export const metadata = {
  title: "About Me",
  description: "Learn more about Smit Doshi, a senior full stack developer and freelancer with over 4 years of experience."
}

export default function AboutPage() {
  return (
    <div className="pt-16">
      <AboutSection />
      <TechStack />
    </div>
  )
}
