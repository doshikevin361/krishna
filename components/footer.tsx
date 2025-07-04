import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, Heart } from "lucide-react"
import ExecuraLogo from "@/components/execura-logo"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-500/3 to-purple-500/3 rounded-full blur-3xl animate-spin-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-block mb-6">
              <ExecuraLogo
                size="lg"
                animated={true}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed max-w-md">
              Founded by Krishna Patel in Ahmedabad, Execura is your trusted partner in finding the perfect match
              between exceptional talent and outstanding opportunities across India.
            </p>

            {/* Krishna Contact Highlight */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 mb-6">
              <h4 className="text-emerald-300 font-semibold mb-3 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Direct Line to Krishna
              </h4>
              <div className="text-2xl font-bold text-white mb-1">+91 8849510517</div>
              <div className="text-slate-300 text-sm">CEO & Founder • Available Mon-Sat</div>
            </div>

            <div className="flex space-x-4">
              {[
                { icon: Linkedin, color: "hover:text-blue-400", href: "#" },
                { icon: Twitter, color: "hover:text-sky-400", href: "#" },
                { icon: Facebook, color: "hover:text-blue-500", href: "#" },
                { icon: Instagram, color: "hover:text-pink-400", href: "#" },
              ].map(({ icon: Icon, color, href }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center ${color} transition-all duration-300 hover:scale-110 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-white/30`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-emerald-300 to-purple-300 bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-4 text-slate-400">
              {[
                "Permanent Placement",
                "Contract Staffing",
                "Executive Search",
                "Talent Consulting",
                "HR Outsourcing",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="hover:text-emerald-400 transition-all duration-300 hover:translate-x-2 inline-block group flex items-center"
                  >
                    <span className="w-2 h-2 bg-emerald-400/60 rounded-full mr-3 group-hover:bg-emerald-400 transition-colors"></span>
                    <span className="group-hover:text-emerald-300">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-purple-300 to-emerald-300 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-4 text-slate-400 mb-8">
              {[
                { href: "/about", label: "About Krishna" },
                { href: "/jobs", label: "Current Jobs" },
                { href: "/contact", label: "Contact Us" },
                { href: "/careers", label: "Join Our Team" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block group flex items-center"
                  >
                    <span className="w-2 h-2 bg-purple-400/60 rounded-full mr-3 group-hover:bg-purple-400 transition-colors"></span>
                    <span className="group-hover:text-purple-300">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-4 text-slate-400">
              <div className="flex items-center space-x-3 group hover:text-emerald-400 transition-colors">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors border border-emerald-500/20">
                  <Mail className="h-5 w-5" />
                </div>
                <span>krishna@execura.com</span>
              </div>
              <div className="flex items-center space-x-3 group hover:text-emerald-400 transition-colors">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors border border-emerald-500/20">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">Execura Recruitment Solutions</div>
                  <div className="text-sm">Ahmedabad, Gujarat, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400">
              <span>&copy; {new Date().getFullYear()} Execura Recruitment Solutions.</span>
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
              <span>in Ahmedabad</span>
            </div>
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
