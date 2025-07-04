"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Briefcase,
  Filter,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { subscribeNewsletter } from "@/app/actions"

export default function JobsPage() {
  const [subscribeResult, setSubscribeResult] = useState<{ success: boolean; message: string } | null>(null)
  const [isSubscribing, setIsSubscribing] = useState(false)

  async function handleNewsletterSubmit(formData: FormData) {
    setIsSubscribing(true)
    setSubscribeResult(null)

    const result = await subscribeNewsletter(formData)
    setSubscribeResult(result)
    setIsSubscribing(false)

    if (result.success) {
      const form = document.getElementById("newsletter-form") as HTMLFormElement
      form?.reset()
    }
  }

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Ahmedabad",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      salary: "₹12-18 LPA",
      posted: "2 days ago",
      description: "Join our innovative team building next-generation software solutions in Ahmedabad's tech hub...",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      featured: true,
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Growth Solutions Gujarat",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      salary: "₹8-12 LPA",
      posted: "1 week ago",
      description: "Lead marketing initiatives for a fast-growing startup in Gujarat's business capital...",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Strategy"],
      featured: false,
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Pro India",
      location: "Ahmedabad, Gujarat",
      type: "Contract",
      salary: "₹2000/day",
      posted: "3 days ago",
      description: "Analyze complex datasets to drive business insights for leading Gujarat companies...",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
      featured: true,
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Design Studio Ahmedabad",
      location: "Remote/Ahmedabad",
      type: "Full-time",
      salary: "₹6-10 LPA",
      posted: "5 days ago",
      description: "Create exceptional user experiences for web and mobile applications...",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
      featured: false,
    },
    {
      id: 5,
      title: "Financial Analyst",
      company: "Investment Group Gujarat",
      location: "Ahmedabad, Gujarat",
      type: "Full-time",
      salary: "₹5-8 LPA",
      posted: "1 week ago",
      description: "Analyze financial data and provide strategic recommendations for Gujarat businesses...",
      skills: ["Excel", "Financial Modeling", "Bloomberg", "PowerBI"],
      featured: false,
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Cloud Systems Ahmedabad",
      location: "Ahmedabad, Gujarat",
      type: "Contract",
      salary: "₹1800/day",
      posted: "4 days ago",
      description: "Manage cloud infrastructure and deployment pipelines for leading tech companies...",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
      featured: true,
    },
  ]

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
              Current Opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find Your Dream Job in{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text text-transparent">
                Ahmedabad
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover exciting career opportunities with top companies across Gujarat, personally curated by Krishna
              and the Execura team.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 bg-gradient-to-br from-emerald-50 to-purple-50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Job title or keywords"
                    className="pl-12 h-14 border-2 border-slate-200 focus:border-emerald-500 rounded-xl text-lg"
                  />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <Input
                    placeholder="Ahmedabad, Gujarat"
                    className="pl-12 h-14 border-2 border-slate-200 focus:border-emerald-500 rounded-xl text-lg"
                  />
                </div>
                <Select>
                  <SelectTrigger className="h-14 border-2 border-slate-200 focus:border-emerald-500 rounded-xl text-lg">
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="h-14 bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                  <Search className="mr-3 h-5 w-5" />
                  Search Jobs
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Latest Opportunities in Ahmedabad</h2>
              <p className="text-slate-600 text-lg">{jobs.length} positions available • Curated by Krishna</p>
            </div>
            <Button variant="outline" className="border-2 border-slate-300 bg-transparent hover:bg-slate-50 rounded-xl">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid gap-8">
            {jobs.map((job) => (
              <Card
                key={job.id}
                className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden ${
                  job.featured ? "bg-gradient-to-r from-emerald-50 via-white to-purple-50" : "bg-white"
                }`}
              >
                {job.featured && (
                  <div className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-6 py-2 text-center font-semibold">
                    ⭐ Featured by Krishna • High Priority Placement
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-2xl font-bold text-slate-900 mr-4">{job.title}</h3>
                        {job.featured && (
                          <Badge className="bg-gradient-to-r from-emerald-500 to-purple-500 text-white px-3 py-1 rounded-full">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <p className="text-emerald-600 font-bold text-lg mb-3">{job.company}</p>
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">{job.description}</p>

                      <div className="flex flex-wrap gap-3 mb-6">
                        {job.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6 text-slate-600">
                        <div className="flex items-center bg-slate-50 px-4 py-2 rounded-xl">
                          <MapPin className="h-5 w-5 mr-2 text-emerald-500" />
                          <span className="font-medium">{job.location}</span>
                        </div>
                        <div className="flex items-center bg-slate-50 px-4 py-2 rounded-xl">
                          <Briefcase className="h-5 w-5 mr-2 text-purple-500" />
                          <span className="font-medium">{job.type}</span>
                        </div>
                        <div className="flex items-center bg-slate-50 px-4 py-2 rounded-xl">
                          <DollarSign className="h-5 w-5 mr-2 text-emerald-500" />
                          <span className="font-medium">{job.salary}</span>
                        </div>
                        <div className="flex items-center bg-slate-50 px-4 py-2 rounded-xl">
                          <Clock className="h-5 w-5 mr-2 text-slate-500" />
                          <span className="font-medium">{job.posted}</span>
                        </div>
                      </div>
                    </div>

                    <div className="ml-8 flex flex-col gap-3">
                      <Button className="bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
                        Apply Now
                        <ArrowRight className="ml-3 h-5 w-5" />
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-slate-300 hover:bg-slate-50 px-8 py-3 rounded-xl bg-transparent"
                      >
                        Save Job
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-emerald-300 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-xl bg-transparent"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Call Krishna
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent px-12 py-4 text-lg font-semibold rounded-xl"
            >
              Load More Opportunities
            </Button>
          </div>
        </div>
      </section>

      {/* Job Alerts */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Never Miss Your Perfect Match</h2>
            <p className="text-xl text-slate-600 mb-12">
              Get personalized job alerts from Krishna's team when new opportunities matching your profile are available
            </p>

            <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10">
                {subscribeResult && (
                  <div
                    className={`mb-6 p-4 rounded-xl flex items-center space-x-3 ${
                      subscribeResult.success
                        ? "bg-emerald-50 border border-emerald-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    {subscribeResult.success ? (
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    ) : (
                      <AlertCircle className="h-6 w-6 text-red-600" />
                    )}
                    <p className={`font-medium ${subscribeResult.success ? "text-emerald-700" : "text-red-700"}`}>
                      {subscribeResult.message}
                    </p>
                  </div>
                )}

                <form id="newsletter-form" action={handleNewsletterSubmit} className="space-y-6">
                  <Input
                    name="email"
                    placeholder="Your email address"
                    type="email"
                    required
                    className="h-14 border-2 border-slate-200 focus:border-emerald-500 rounded-xl text-lg"
                  />
                  <Input
                    name="jobTitle"
                    placeholder="Job title or keywords (e.g., Software Engineer)"
                    className="h-14 border-2 border-slate-200 focus:border-emerald-500 rounded-xl text-lg"
                  />
                  <Select name="location">
                    <SelectTrigger className="h-14 border-2 border-slate-200 focus:border-emerald-500 rounded-xl text-lg">
                      <SelectValue placeholder="Preferred location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ahmedabad">Ahmedabad, Gujarat</SelectItem>
                      <SelectItem value="gandhinagar">Gandhinagar, Gujarat</SelectItem>
                      <SelectItem value="surat">Surat, Gujarat</SelectItem>
                      <SelectItem value="vadodara">Vadodara, Gujarat</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="anywhere">Anywhere in India</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button
                    type="submit"
                    disabled={isSubscribing}
                    className="w-full bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white py-6 text-xl font-bold rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    {isSubscribing ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Setting Up Your Alerts...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-3 h-6 w-6" />
                        Get Job Alerts from Krishna
                      </>
                    )}
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <Badge className="bg-gradient-to-r from-emerald-100 to-purple-100 text-slate-700 px-6 py-3 rounded-full">
                    Join 2000+ professionals getting opportunities from Krishna
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 via-emerald-700 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/20 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-300/15 rounded-full animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Don't See the Right Opportunity?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-3xl mx-auto leading-relaxed">
            Krishna and our team are constantly working with new opportunities across Ahmedabad and Gujarat. Let us know
            what you're looking for and we'll find your perfect match.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-slate-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-110"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Krishna: +91 8849510517
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-emerald-600 px-12 py-6 text-xl font-bold rounded-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
              <Mail className="mr-3 h-6 w-6" />
              Email Your Resume
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
