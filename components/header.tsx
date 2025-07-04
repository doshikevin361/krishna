"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, Mail } from "lucide-react"
import ExecuraLogo from "@/components/execura-logo"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-emerald-100/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group">
            <ExecuraLogo size="md" animated={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About Krishna" },
              { href: "/jobs", label: "Jobs" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-slate-700 hover:text-emerald-600 font-semibold transition-all duration-300 group py-2"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="group border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
            >
              <Mail className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              For Employers
            </Button>
            <Button className="group bg-gradient-to-r from-emerald-500 via-emerald-600 to-purple-600 hover:from-emerald-600 hover:via-purple-500 hover:to-purple-700 text-white shadow-xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 font-semibold">
              <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Call Krishna
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl hover:bg-emerald-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-emerald-100/50 bg-white/95 backdrop-blur-xl rounded-b-3xl shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Krishna" },
                { href: "/jobs", label: "Jobs" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-emerald-600 font-semibold transition-colors px-4 py-3 rounded-xl hover:bg-emerald-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button
                  variant="outline"
                  className="border-2 border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-50 justify-center font-semibold"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  For Employers
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-purple-600 hover:from-emerald-600 hover:to-purple-700 text-white justify-center font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Krishna
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
