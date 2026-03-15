import type { Metadata } from "next"
import { Contact as ContactSection } from "@/components/sections/contact"

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with Smit Doshi for freelance projects, consulting, or general inquiries."
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  )
}
