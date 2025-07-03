"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, CheckCircle, Star, ArrowRight, Phone, Mail, Sparkles, TrendingUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedCounter from "@/components/animated-counter"
import ParticleBackground from "@/components/particle-background"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Header />

      {/* Hero Section with Particles */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <ParticleBackground />

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div
            className={`max-w-5xl mx-auto text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3 text-sm font-semibold rounded-full shadow-lg animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              #1 Recruitment Partner
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Find Your{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent animate-gradient-x">
                Perfect
              </span>{" "}
              Match
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-slate-300 leading-relaxed max-w-3xl mx-auto">
              The perfect placement for exceptional talent and outstanding opportunities.
              <span className="block mt-2 text-emerald-300 font-medium">Where careers meet destiny.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-10 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105"
              >
                Find Talent
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-10 py-6 text-lg font-semibold rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <Sparkles className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Explore Jobs
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="relative">
              <div className="absolute -top-20 -left-20 w-16 h-16 bg-emerald-400/20 rounded-full animate-float"></div>
              <div className="absolute -top-10 -right-16 w-12 h-12 bg-purple-400/20 rounded-full animate-float-delayed"></div>
              <div className="absolute -bottom-16 left-10 w-20 h-20 bg-emerald-300/15 rounded-full animate-float-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 to-purple-50/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-emerald-500/25">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Companies Served</div>
            </div>

            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-500/25">
                <Target className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={10} suffix="K+" />
              </div>
              <div className="text-slate-600 font-medium">Placements Made</div>
            </div>

            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-emerald-500/25">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-slate-600 font-medium">Success Rate</div>
            </div>

            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-500/25">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-2">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-slate-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Animations */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-emerald-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-100 to-purple-100 text-slate-700 px-4 py-2 rounded-full">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6">
              Recruitment Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive staffing solutions tailored to your industry needs with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-white to-emerald-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  Permanent Placement
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Find the right full-time employees for your organization with our proven methodology
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Executive Search Excellence
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Mid-level Recruitment
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Entry-level Hiring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-white to-purple-50/50 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  Contract Staffing
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Flexible workforce solutions for project-based needs and seasonal demands
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Temporary Staffing
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Contract-to-Hire
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <CheckCircle className="h-5 w-5 text-purple-500 mr-3" />
                    Project Teams
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-xl hover:shadow-2xl bg-gradient-to-br from-white to-emerald-50/50 overflow-hidden relative md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  Executive Search
                </CardTitle>
                <CardDescription className="text-slate-600 text-base">
                  Leadership recruitment for C-suite and senior positions with global reach
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    C-Level Executives
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Board Members
                  </li>
                  <li className="flex items-center group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                    Senior Management
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mr-6">
                      K
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Krishna Patel</h3>
                      <p className="text-emerald-600 font-semibold">CEO & Founder</p>
                      <div className="flex items-center mt-2">
                        <Phone className="h-4 w-4 text-slate-500 mr-2" />
                        <span className="text-slate-600">+91 8849510517</span>
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                    "In today's competitive landscape, finding the right talent isn't just about matching skills—it's
                    about understanding dreams, aspirations, and cultural fit. At Execura, we've built our reputation on
                    creating perfect placements that benefit both candidates and companies for years to come."
                  </blockquote>
                  <div className="mt-6 flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-3 text-slate-600 font-medium">15+ Years of Excellence</span>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <Badge className="mb-4 bg-gradient-to-r from-emerald-100 to-purple-100 text-slate-700 px-4 py-2 rounded-full">
                    Leadership Message
                  </Badge>
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    A Message from Our CEO
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed mb-8">
                    With over 15 years of experience in recruitment and talent acquisition, I founded Execura with a
                    vision to revolutionize how companies and candidates connect.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                    <div className="text-slate-600">Companies Trusted Us</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
                    <div className="text-slate-600">Lives Transformed</div>
                  </div>
                </div>

                <Button className="group bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                  <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Connect with Krishna
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/30 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 rounded-full blur-3xl animate-spin-slow"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">Our Process</Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
                How We Create Perfect Matches
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our proven 5-step process ensures every placement is a perfect fit
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "Understanding your needs",
                  icon: "🔍",
                  color: "from-emerald-400 to-emerald-600",
                },
                {
                  step: "02",
                  title: "Sourcing",
                  desc: "Finding top talent",
                  icon: "🎯",
                  color: "from-purple-400 to-purple-600",
                },
                {
                  step: "03",
                  title: "Screening",
                  desc: "Rigorous evaluation",
                  icon: "✅",
                  color: "from-emerald-400 to-purple-500",
                },
                {
                  step: "04",
                  title: "Matching",
                  desc: "Perfect alignment",
                  icon: "🤝",
                  color: "from-purple-400 to-emerald-500",
                },
                {
                  step: "05",
                  title: "Success",
                  desc: "Ongoing support",
                  icon: "🚀",
                  color: "from-emerald-500 to-purple-500",
                },
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center mx-auto text-3xl shadow-2xl group-hover:scale-110 transition-transform duration-500 group-hover:rotate-12`}
                    >
                      {process.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-900 font-bold text-sm shadow-lg">
                      {process.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">
                    {process.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{process.desc}</p>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-purple-400 transform translate-x-4"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section with Hover Effects */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
          <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-white/10 text-white px-4 py-2 rounded-full backdrop-blur-sm">
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-emerald-200 to-purple-200 bg-clip-text text-transparent">
                Specialized Recruitment
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert talent acquisition across diverse sectors with deep industry knowledge
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Technology", icon: "💻", color: "from-emerald-400 to-emerald-600" },
              { name: "Healthcare", icon: "🏥", color: "from-purple-400 to-purple-600" },
              { name: "Finance", icon: "💰", color: "from-emerald-400 to-purple-500" },
              { name: "Manufacturing", icon: "🏭", color: "from-purple-400 to-emerald-500" },
              { name: "Retail", icon: "🛍️", color: "from-emerald-500 to-emerald-700" },
              { name: "Education", icon: "📚", color: "from-purple-500 to-purple-700" },
              { name: "Construction", icon: "🏗️", color: "from-emerald-400 to-purple-600" },
              { name: "Hospitality", icon: "🏨", color: "from-purple-400 to-emerald-600" },
            ].map((industry, index) => (
              <div
                key={industry.name}
                className="group bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 text-center border border-white/10 hover:border-white/30 hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl group-hover:rotate-12 transition-transform duration-500 shadow-lg`}
                >
                  {industry.icon}
                </div>
                <h3 className="font-bold text-white text-lg group-hover:text-emerald-300 transition-colors">
                  {industry.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with Animation */}
      <section className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-emerald-100 to-purple-100 text-slate-700 px-4 py-2 rounded-full">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Success stories from companies and candidates we've helped achieve their goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Krishna Patel",
                role: "CEO & Founder, Execura",
                content:
                  "At Execura, we don't just place candidates - we build careers and transform organizations. Every placement is a commitment to excellence and a step towards someone's dream.",
                rating: 5,
                gradient: "from-emerald-400 to-purple-600",
                isCEO: true,
              },
              {
                name: "Michael Chen",
                role: "Software Engineer",
                content:
                  "Professional, efficient, and results-driven. They helped me land my dream job in just 2 weeks. The process was smooth and supportive throughout.",
                rating: 5,
                gradient: "from-purple-400 to-purple-600",
              },
              {
                name: "Emily Rodriguez",
                role: "HR Director, Global Corp",
                content:
                  "Outstanding service! They provided quality candidates and made the hiring process seamless. Our partnership has been incredibly valuable.",
                rating: 5,
                gradient: "from-emerald-400 to-purple-500",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-white to-slate-50/50 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex mb-6 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-400 fill-current animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${testimonial.gradient} rounded-full mr-4 flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                    >
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                      <div className="text-slate-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Animation */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-purple-600/20 animate-gradient-x"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300/15 rounded-full animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Ready to Find Your{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
                Perfect Match?
              </span>
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Whether you're looking for top talent or your next career opportunity, we're here to make it happen.
              <span className="block mt-2 text-emerald-300">Let's create success together.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110"
              >
                <Phone className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                Contact Us Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-12 py-6 text-xl font-semibold rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
              >
                <Mail className="mr-3 h-6 w-6 group-hover:bounce transition-transform" />
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
