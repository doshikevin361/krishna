"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Target, Sparkles } from "lucide-react"

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Animated Logo */}
          <Link href="/" className="group flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-emerald-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Target className="h-7 w-7 text-white group-hover:rotate-180 transition-transform duration-500" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full animate-pulse"></div>
            </div>
            <div className="group-hover:scale-105 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-emerald-600 group-hover:to-purple-600 transition-all duration-300">
                Execura
              </div>
              <div className="text-xs text-slate-600 -mt-1 group-hover:text-emerald-600 transition-colors duration-300 flex items-center">
                <Sparkles className="w-3 h-3 mr-1" />
                The perfect placement
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/about", label: "About" },
              { href: "/jobs", label: "Jobs" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-slate-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="outline"
              className="group border-emerald-500 text-emerald-600 hover:bg-emerald-50 bg-transparent transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Target className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              For Employers
            </Button>
            <Button className="group bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              For Job Seekers
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-slate-200/50 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/jobs", label: "Jobs" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-slate-700 hover:text-emerald-600 font-medium transition-colors px-4 py-2 rounded-lg hover:bg-emerald-50"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-600 bg-transparent hover:bg-emerald-50 justify-center"
                >
                  <Target className="w-4 h-4 mr-2" />
                  For Employers
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white justify-center">
                  <Sparkles className="w-4 h-4 mr-2" />
                  For Job Seekers
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
