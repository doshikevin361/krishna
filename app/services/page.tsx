import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, CheckCircle, ArrowRight, Clock, Shield, Zap } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Recruitment Solutions</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              From executive search to contract staffing, we provide tailored solutions for all your hiring needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Permanent Placement</h2>
              <p className="text-lg text-slate-600 mb-6">
                Find the right full-time employees who will grow with your organization. Our comprehensive screening
                process ensures perfect cultural and skill fit.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Executive and C-level recruitment
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Mid-level management positions
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Entry-level and graduate hiring
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Specialized technical roles
                </li>
              </ul>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-emerald-600">1</span>
                    </div>
                    <span className="text-slate-700">Requirements Analysis</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-emerald-600">2</span>
                    </div>
                    <span className="text-slate-700">Candidate Sourcing</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-emerald-600">3</span>
                    </div>
                    <span className="text-slate-700">Screening & Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-emerald-600">4</span>
                    </div>
                    <span className="text-slate-700">Interview Coordination</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-semibold text-emerald-600">5</span>
                    </div>
                    <span className="text-slate-700">Offer & Onboarding</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="lg:order-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Contract Staffing</h2>
              <p className="text-lg text-slate-600 mb-6">
                Flexible workforce solutions for project-based needs, seasonal demands, or temporary coverage. Scale
                your team up or down as needed.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Temporary staffing solutions
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Contract-to-hire opportunities
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Project-based team assembly
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Seasonal workforce management
                </li>
              </ul>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="lg:order-1 bg-slate-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl text-center">
                  <Clock className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">24hrs</div>
                  <div className="text-sm text-slate-600">Quick Turnaround</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-600">Compliance</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <Zap className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Skills Available</div>
                </div>
                <div className="bg-white p-4 rounded-xl text-center">
                  <TrendingUp className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Executive Search</h2>
              <p className="text-lg text-slate-600 mb-6">
                Leadership recruitment for C-suite and senior positions. Our executive search practice focuses on
                finding transformational leaders.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  C-level executive placement
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Board member recruitment
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Senior management roles
                </li>
                <li className="flex items-center text-slate-700">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Succession planning support
                </li>
              </ul>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Why Choose Our Executive Search?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-medium text-slate-900">Confidential Process</div>
                    <div className="text-sm text-slate-600">Discreet handling of sensitive searches</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-medium text-slate-900">Global Network</div>
                    <div className="text-sm text-slate-600">Access to top talent worldwide</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-medium text-slate-900">Deep Assessment</div>
                    <div className="text-sm text-slate-600">Comprehensive leadership evaluation</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3"></div>
                  <div>
                    <div className="font-medium text-slate-900">Market Intelligence</div>
                    <div className="text-sm text-slate-600">Industry insights and benchmarking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Comprehensive support beyond recruitment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Talent Consulting</CardTitle>
                <CardDescription>Strategic workforce planning and talent management advice</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Workforce planning</li>
                  <li>• Compensation benchmarking</li>
                  <li>• Talent retention strategies</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">HR Outsourcing</CardTitle>
                <CardDescription>Complete HR function management for growing companies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Payroll management</li>
                  <li>• Benefits administration</li>
                  <li>• Compliance support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Training & Development</CardTitle>
                <CardDescription>Skills development and training programs for your team</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Leadership development</li>
                  <li>• Technical skills training</li>
                  <li>• Team building programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Hiring?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Let's discuss how our recruitment services can help you build the perfect team.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg">
            Schedule a Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
