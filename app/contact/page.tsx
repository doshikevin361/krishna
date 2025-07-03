import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Sparkles, Star } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
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
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Start the{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Ready to find your perfect match? Connect with Krishna and our team in Ahmedabad to achieve your
              recruitment goals.
            </p>
          </div>
        </div>
      </section>

      {/* CEO Contact Highlight */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-purple-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-4">
                      K
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Krishna Patel</h3>
                      <p className="text-emerald-600 font-semibold">CEO & Founder</p>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Connect directly with our CEO for executive searches, strategic partnerships, or important
                    recruitment needs.
                  </p>
                  <div className="flex justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <Phone className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <div className="font-semibold text-slate-900">Direct Line</div>
                      <div className="text-emerald-600 font-bold text-lg">+91 8849510517</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <Mail className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-purple-600">krishna@execura.com</div>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <MapPin className="h-6 w-6 text-emerald-600 mr-4" />
                    <div>
                      <div className="font-semibold text-slate-900">Location</div>
                      <div className="text-slate-600">Ahmedabad, Gujarat</div>
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
              <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader>
                  <CardTitle className="text-3xl text-slate-900 flex items-center">
                    <Send className="mr-3 h-8 w-8 text-emerald-600" />
                    Send Us a Message
                  </CardTitle>
                  <p className="text-slate-600 text-lg">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-slate-700 font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-slate-700 font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-700 font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-700 font-medium">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        placeholder="Your Company"
                        className="border-slate-200 focus:border-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-slate-700 font-medium">
                        Service Interested In
                      </Label>
                      <Select>
                        <SelectTrigger className="border-slate-200 focus:border-emerald-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="permanent">Permanent Placement</SelectItem>
                          <SelectItem value="contract">Contract Staffing</SelectItem>
                          <SelectItem value="executive">Executive Search</SelectItem>
                          <SelectItem value="consulting">Talent Consulting</SelectItem>
                          <SelectItem value="ceo-meeting">Meeting with Krishna</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-slate-700 font-medium">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your hiring needs or how we can help you..."
                      className="min-h-[120px] border-slate-200 focus:border-emerald-500"
                      required
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
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
                      <div className="font-semibold text-slate-900">Phone</div>
                      <div className="text-emerald-600 font-bold">+91 8849510517</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Email</div>
                      <div className="text-purple-600">info@execura.com</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors">
                    <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Address</div>
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
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Monday - Friday</div>
                      <div className="text-slate-600">9:00 AM - 7:00 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Saturday</div>
                      <div className="text-slate-600">10:00 AM - 4:00 PM IST</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-3 bg-white rounded-lg">
                    <Clock className="h-5 w-5 text-slate-400" />
                    <div>
                      <div className="font-semibold text-slate-900">Sunday</div>
                      <div className="text-slate-600">Closed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-gradient-to-br from-emerald-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-emerald-600" />
                    <h3 className="font-semibold text-slate-900">Quick Response</h3>
                  </div>
                  <p className="text-slate-700 text-sm mb-4">
                    Need immediate assistance? Call Krishna directly at +91 8849510517 or send an email. We typically
                    respond within 2 hours during business hours.
                  </p>
                  <div className="text-center">
                    <Badge className="bg-emerald-100 text-emerald-700 px-3 py-1">
                      Based in Ahmedabad, Serving All of India
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Visit Our Office in Ahmedabad</h2>
            <p className="text-xl text-slate-600">Located in Gujarat's premier business hub</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-purple-100 h-96 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-purple-500/10"></div>
            <div className="text-center relative z-10">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Execura Recruitment Solutions</h3>
              <p className="text-slate-600 text-lg">Ahmedabad, Gujarat, India</p>
              <p className="text-sm text-slate-500 mt-2">Interactive map integration available</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
