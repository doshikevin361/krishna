import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, DollarSign, Briefcase, Filter, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "New York, NY",
      type: "Full-time",
      salary: "$120k - $150k",
      posted: "2 days ago",
      description: "Join our innovative team building next-generation software solutions...",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
    },
    {
      id: 2,
      title: "Marketing Manager",
      company: "Growth Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$90k - $110k",
      posted: "1 week ago",
      description: "Lead marketing initiatives for a fast-growing startup...",
      skills: ["Digital Marketing", "SEO", "Analytics", "Content Strategy"],
    },
    {
      id: 3,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Boston, MA",
      type: "Contract",
      salary: "$80/hour",
      posted: "3 days ago",
      description: "Analyze complex datasets to drive business insights...",
      skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    },
    {
      id: 4,
      title: "UX Designer",
      company: "Design Studio",
      location: "Remote",
      type: "Full-time",
      salary: "$85k - $105k",
      posted: "5 days ago",
      description: "Create exceptional user experiences for web and mobile applications...",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      id: 5,
      title: "Financial Analyst",
      company: "Investment Group",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$75k - $95k",
      posted: "1 week ago",
      description: "Analyze financial data and provide strategic recommendations...",
      skills: ["Excel", "Financial Modeling", "Bloomberg", "PowerBI"],
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "Cloud Systems",
      location: "Austin, TX",
      type: "Contract",
      salary: "$95/hour",
      posted: "4 days ago",
      description: "Manage cloud infrastructure and deployment pipelines...",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">
              Current Opportunities
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Dream Job</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover exciting career opportunities with top companies across various industries
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="Job title or keywords" className="pl-10" />
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input placeholder="Location" className="pl-10" />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full-time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="part-time">Part-time</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Search className="mr-2 h-4 w-4" />
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
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Latest Job Openings</h2>
              <p className="text-slate-600">{jobs.length} positions available</p>
            </div>
            <Button variant="outline" className="border-slate-300 bg-transparent">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>

          <div className="grid gap-6">
            {jobs.map((job) => (
              <Card key={job.id} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                      <p className="text-emerald-600 font-medium mb-2">{job.company}</p>
                      <p className="text-slate-600 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-slate-100 text-slate-700">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.posted}
                        </div>
                      </div>
                    </div>

                    <div className="ml-6 flex flex-col gap-2">
                      <Button className="bg-emerald-600 hover:bg-emerald-700">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        Save Job
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
            >
              Load More Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Job Alerts */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Never Miss an Opportunity</h2>
            <p className="text-xl text-slate-600 mb-8">Get notified when new jobs matching your criteria are posted</p>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <Input placeholder="Your email address" type="email" />
                  <Input placeholder="Job title or keywords" />
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Preferred location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York, NY</SelectItem>
                      <SelectItem value="sf">San Francisco, CA</SelectItem>
                      <SelectItem value="boston">Boston, MA</SelectItem>
                      <SelectItem value="chicago">Chicago, IL</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 py-3">Create Job Alert</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See the Right Fit?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Our recruiters are constantly working with new opportunities. Let us know what you're looking for.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg">
            Contact Our Recruiters
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
