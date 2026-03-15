import type { Metadata } from "next"
import { Projects as ProjectsSection } from "@/components/sections/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio of Smit Doshi, featuring full stack, frontend, and backend projects."
}

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      <ProjectsSection />
    </div>
  )
}
