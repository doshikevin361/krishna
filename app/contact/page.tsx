"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Sparkles, Star, CheckCircle, AlertCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { submitContactForm } from "@/app/actions"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitResult(null)

    const result = await submitContactForm(formData)
    setSubmitResult(result)
    setIsSubmitting(false)

    if (result.success) {
      // Reset form
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full animate-bounce shadow-xl">
              <Sparkles className="w-4 h-4 mr-2" />
              Connect with Krishna
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start Your{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text text-transparent">
                Success Story
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to find your perfect match? Connect directly with Krishna and our expert team in Ahmedabad to
              transform your recruitment journey.
            </p>
          </div>
        </div>
      </section>

      {/* Krishna Direct Contact */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Card className="max-w-5xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-purple-500/5"></div>
            <CardContent className="p-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 via-emerald-600 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-2xl mr-6 hover:scale-110 transition-transform duration-300">
                      K
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-slate-900">Krishna Patel</h3>
                      <p className="text-emerald-600 font-semibold text-lg">CEO & Founder</p>
                      <p className="text-slate-600">15+ Years Experience</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                    Connect directly with Krishna for executive searches, strategic partnerships, or important
                    recruitment needs. Based in Ahmedabad, serving clients across India.
                  </p>
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
                    Available Mon-Sat • Quick Response Guaranteed
                  </Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center p-6 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-2xl hover:from-emerald-100 hover:to-emerald-200 transition-all duration-300 group cursor-pointer">
                    <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Direct Line</div>
                      <div className="text-emerald-600 font-bold text-2xl">+91 8849510517</div>
                      <div className="text-slate-600 text-sm">Call anytime Mon-Sat 9AM-7PM</div>
                    </div>
                  </div>

                  <div className="flex items-center p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group cursor-pointer">
                    <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Email Krishna</div>
                      <div className="text-purple-600 font-bold text-xl">krishna@execura.com</div>
                      <div className="text-slate-600 text-sm">Response within 2 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center p-6 bg-gradient-to-r from-emerald-50 to-purple-50 rounded-2xl hover:from-emerald-100 hover:to-purple-100 transition-all duration-300 group cursor-pointer">
                    <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Visit Our Office</div>
                      <div className="text-slate-700 font-medium">Ahmedabad, Gujarat</div>
                      <div className="text-slate-600 text-sm">Schedule a meeting with Krishna</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white via-slate-50/50 to-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl text-slate-900 flex items-center">
                    <Send className="mr-4 h-8 w-8 text-emerald-600" />
                    Send Message to Krishna
                  </CardTitle>
                  <p className="text-slate-600 text-lg">
                    Fill out the form below and Krishna will personally review your message. We guarantee a response
                    within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  {submitResult && (
                    <div
                      className={`p-4 rounded-xl flex items-center space-x-3 ${
                        submitResult.success
                          ? "bg-emerald-50 border border-emerald-200"
                          : "bg-red-50 border border-red-200"
                      }`}
                    >
                      {submitResult.success ? (
                        <CheckCircle className="h-6 w-6 text-emerald-600" />
                      ) : (
                        <AlertCircle className="h-6 w-6 text-red-600" />
                      )}
                      <p className={`font-medium ${submitResult.success ? "text-emerald-700" : "text-red-700"}`}>
                        {submitResult.message}
                      </p>
                    </div>
                  )}

                  <form id="contact-form" action={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-slate-700 font-semibold">
                          First Name *
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="John"
                          required
                          className="border-2 border-slate-200 focus:border-emerald-500 rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-slate-700 font-semibold">
                          Last Name *
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Doe"
                          required
                          className="border-2 border-slate-200 focus:border-emerald-500 rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-semibold">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@company.com"
                          required
                          className="border-2 border-slate-200 focus:border-emerald-500 rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-700 font-semibold">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          className="border-2 border-slate-200 focus:border-emerald-500 rounded-xl h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-slate-700 font-semibold">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          className="border-2 border-slate-200 focus:border-emerald-500 rounded-xl h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-slate-700 font-semibold">
                          Service Interested In
                        </Label>
                        <Select name="service">
                          <SelectTrigger className="border-2 border-slate-200 focus:border-emerald-500 rounded-xl h-12">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="permanent">Permanent Placement</SelectItem>
                            <SelectItem value="contract">Contract Staffing</SelectItem>
                            <SelectItem value="executive">Executive Search</SelectItem>
                            <SelectItem value="consulting">Talent Consulting</SelectItem>
                            <SelectItem value="ceo-meeting">Personal Meeting with Krishna</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-700 font-semibold">
                        Your Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell Krishna about your hiring needs, career goals, or how Execura can help you..."
                        className="min-h-[140px] border-2 border-slate-200 focus:border-emerald-500 rounded-xl"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-emerald-500 via-emerald-600 to-purple-600 hover:from-emerald-600 hover:via-purple-500 hover:to-purple-700 text-white py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                          Sending to Krishna...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 h-6 w-6" />
                          Send Message to Krishna
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center">
                    <Phone className="mr-3 h-6 w-6 text-emerald-600" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Krishna's Direct Line</div>
                      <div className="text-emerald-600 font-bold text-lg">+91 8849510517</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-purple-600 font-medium">krishna@execura.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Headquarters</div>
                      <div className="text-slate-600">
                        Execura Recruitment Solutions
                        <br />
                        Ahmedabad, Gujarat, India
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-900 flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-purple-600" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-emerald-100">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Monday - Friday</div>
                      <div className="text-slate-600">9:00 AM - 7:00 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-purple-100">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Saturday</div>
                      <div className="text-slate-600">10:00 AM - 4:00 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg border border-slate-200">
                    <Clock className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-semibold text-slate-900">Sunday</div>
                      <div className="text-slate-600">Closed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10"></div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-emerald-600" />
                    <h3 className="font-bold text-slate-900">Quick Response Promise</h3>
                  </div>
                  <p className="text-slate-700 text-sm mb-4">
                    Krishna personally reviews every message. Call directly at +91 8849510517 for urgent matters. We
                    guarantee a response within 2 hours during business hours.
                  </p>
                  <div className="text-center">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-4 py-2 font-semibold">
                      Trusted by 500+ Companies in Ahmedabad
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
