import Link from "next/link"
import { Target, Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 via-emerald-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Target className="h-8 w-8 text-white group-hover:rotate-180 transition-transform duration-500" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>
              <div className="group-hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent group-hover:from-emerald-300 group-hover:to-purple-300 transition-all duration-300">
                  Execura
                </div>
                <div className="text-sm text-slate-400 -mt-1 group-hover:text-emerald-400 transition-colors duration-300 flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" />
                  The perfect placement
                </div>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 text-lg leading-relaxed max-w-md">
              Your trusted partner in finding the perfect match between exceptional talent and outstanding
              opportunities. Where careers meet destiny.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, color: "hover:text-blue-400" },
                { icon: Twitter, color: "hover:text-sky-400" },
                { icon: Facebook, color: "hover:text-blue-500" },
                { icon: Instagram, color: "hover:text-pink-400" },
              ].map(({ icon: Icon, color }, index) => (
                <div
                  key={index}
                  className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20 cursor-pointer backdrop-blur-sm`}
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-4 text-slate-400">
              {["Permanent Placement", "Contract Staffing", "Executive Search", "Talent Consulting"].map(
                (service, index) => (
                  <li key={index}>
                    <Link
                      href="/services"
                      className="hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                    >
                      <span className="group-hover:text-emerald-300">{service}</span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-emerald-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4 text-slate-400 mb-8">
              {[
                { href: "/about", label: "About Us" },
                { href: "/jobs", label: "Current Jobs" },
                { href: "/contact", label: "Contact" },
                { href: "/careers", label: "Careers" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="group-hover:text-purple-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center space-x-3 group hover:text-emerald-400 transition-colors">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+91 8849510517</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-purple-400 transition-colors">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>info@execura.com</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-emerald-400 transition-colors">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div>Execura Recruitment Solutions</div>
                  <div>Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400">&copy; {new Date().getFullYear()} Execura. All rights reserved.</p>
            <div className="flex space-x-6 text-slate-400">
              <Link href="/privacy" className="hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-purple-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
