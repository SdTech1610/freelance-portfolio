"use client"

import * as React from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, MessageCircle, Github, Linkedin, Twitter } from "lucide-react"
import { SectionReveal } from "@/components/layout/section-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          name: values.email,
          title: "Freelance Inquiry",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      if (result.status !== 200) {
        throw new Error("Failed to send message")
      }

      setSubmitted(true)
      form.reset()
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SectionReveal id="contact" className="bg-slate-900/40 relative">
      <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">
            Interested in working together? Please fill out the form below or reach out
            directly through any of my social profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-lg font-semibold text-foreground">sdtech1610@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-lg font-semibold text-foreground">+91 7984230684</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-lg font-semibold text-foreground">Remote, India</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-bold text-foreground">Follow Me</h4>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/SdTech1610" className="w-10 h-10 bg-white/5 hover:bg-primary/20 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/smit-doshi-9990b020b/" className="w-10 h-10 bg-white/5 hover:bg-primary/20 hover:text-white rounded-full flex items-center justify-center transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="mt-12">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full border-0">
                <a href="https://wa.me/917984230684" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-white/5 shadow-2xl">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="h-10 w-10 text-primary animate-bounce" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }: { field: any }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary/50 py-6" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }: { field: any }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" className="bg-white/5 border-white/10 focus:border-primary/50 py-6" {...field} />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }: { field: any }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message here..."
                                className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage className="text-xs" />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white border-0 py-6"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  )
}
