import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, CheckCircle, ArrowRight, Heart, Phone, Mail, MapPin, Star, Sparkles } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
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
              About Execura
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Talent with{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text text-transparent">
                Opportunity
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              For over 15 years, we've been the bridge between exceptional talent and outstanding opportunities,
              creating perfect placements that drive success across Ahmedabad and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-24 bg-gradient-to-br from-emerald-50 via-white to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-emerald-100 to-purple-100 text-slate-700 px-4 py-2 rounded-full">
                Leadership
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Meet Our Founder & CEO
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-emerald-400 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl p-8 rounded-3xl">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-2xl mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                      K
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Krishna Patel</h3>
                    <p className="text-emerald-600 font-semibold text-xl mb-4">CEO & Founder</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center text-slate-600">
                        <Phone className="h-5 w-5 mr-3 text-emerald-500" />
                        <span className="font-medium">+91 8849510517</span>
                      </div>
                      <div className="flex items-center justify-center text-slate-600">
                        <Mail className="h-5 w-5 mr-3 text-purple-500" />
                        <span>krishna@execura.com</span>
                      </div>
                      <div className="flex items-center justify-center text-slate-600">
                        <MapPin className="h-5 w-5 mr-3 text-emerald-500" />
                        <span>Ahmedabad, Gujarat</span>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">15+</div>
                        <div className="text-sm text-slate-600">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">500+</div>
                        <div className="text-sm text-slate-600">Companies Served</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-600">10K+</div>
                        <div className="text-sm text-slate-600">Placements</div>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Visionary Leadership</h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    Krishna Patel founded Execura in 2008 with a revolutionary vision: to transform the recruitment
                    industry by focusing on quality relationships over quantity transactions. Based in the vibrant
                    business hub of Ahmedabad, Krishna has built Execura into Gujarat's premier recruitment consultancy.
                  </p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    With deep roots in Gujarat's business community and extensive networks across India, Krishna
                    understands the unique challenges and opportunities in the regional job market. His personal
                    approach to recruitment has helped thousands of professionals find their perfect career match.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-emerald-50 to-purple-50 p-6 rounded-2xl border border-emerald-100">
                  <blockquote className="text-lg text-slate-700 italic mb-4">
                    "Every placement we make is not just a job filled or a candidate placed—it's a life changed, a dream
                    realized, and a company strengthened. That's the Execura difference."
                  </blockquote>
                  <cite className="text-emerald-600 font-semibold">- Krishna Patel, CEO & Founder</cite>
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

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-6">
                Founded in 2008 in the heart of Ahmedabad, Execura began with Krishna's simple yet powerful vision: to
                revolutionize the recruitment industry by focusing on quality over quantity, relationships over
                transactions.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                What started as a small team of passionate recruiters has grown into Gujarat's leading staffing
                consultancy, serving over 500 companies and placing more than 10,000 professionals across diverse
                industries throughout Ahmedabad, Gujarat, and across India.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our success is built on understanding that behind every job opening is a company's ambition, and behind
                every resume is a person's dream. We're here to make both come true, right here in Ahmedabad.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Learn About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">15+</div>
                  <div className="text-slate-600">Years in Ahmedabad</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                  <div className="text-slate-600">Gujarat Companies</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">10K+</div>
                  <div className="text-slate-600">Successful Placements</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-md text-center p-8 bg-gradient-to-br from-white to-emerald-50/50">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Integrity First</h3>
              <p className="text-slate-600">
                We believe in honest, transparent communication and ethical practices in every interaction. Trust is the
                foundation of lasting relationships.
              </p>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-md text-center p-8 bg-gradient-to-br from-white to-purple-50/50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Excellence Driven</h3>
              <p className="text-slate-600">
                We're committed to delivering exceptional results through meticulous attention to detail and continuous
                improvement in our processes.
              </p>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 border-0 shadow-md text-center p-8 bg-gradient-to-br from-white to-emerald-50/50">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">People Focused</h3>
              <p className="text-slate-600">
                Every decision we make considers the human impact. We're not just filling positions; we're changing
                lives and building careers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Choose Execura?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Local Expertise, Global Standards</h3>
                    <p className="text-slate-600">
                      Deep knowledge of Ahmedabad's business landscape combined with international recruitment best
                      practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proven Track Record</h3>
                    <p className="text-slate-600">
                      95% success rate with over 10,000 successful placements and long-term client relationships across
                      Gujarat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Personal Touch</h3>
                    <p className="text-slate-600">
                      Krishna personally oversees key placements, ensuring every client receives the attention they
                      deserve.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Technology-Driven</h3>
                    <p className="text-slate-600">
                      Advanced recruitment technology combined with human expertise for optimal results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Promise</h3>
              <p className="text-lg text-slate-700 mb-6">
                "We don't just fill positions; we build careers and transform organizations. Every placement is a
                commitment to excellence, rooted in Ahmedabad's values of trust and relationship-building."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                  K
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Krishna Patel</div>
                  <div className="text-sm text-slate-600">CEO & Founder</div>
                  <div className="text-sm text-emerald-600">+91 8849510517</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Execura Difference?</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Join hundreds of Ahmedabad companies who trust us with their most important hiring decisions.
          </p>
          <Button size="lg" className="bg-white text-emerald-600 hover:bg-slate-100 px-8 py-4 text-lg">
            Start Your Search Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
