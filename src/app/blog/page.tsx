import type { Metadata } from "next"
import { Blog as BlogSection } from "@/components/sections/blog"

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical guides, thoughts, and experiences from the world of full stack development."
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      {/* <BlogSection /> */}
    </div>
  )
}
