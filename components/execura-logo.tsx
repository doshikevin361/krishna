"use client"

import { Target, Sparkles } from "lucide-react"

interface ExecuraLogoProps {
  size?: "sm" | "md" | "lg" | "xl"
  showText?: boolean
  animated?: boolean
  className?: string
}

export default function ExecuraLogo({
  size = "md",
  showText = true,
  animated = true,
  className = "",
}: ExecuraLogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-24 h-24",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  }

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-7 w-7",
    lg: "h-9 w-9",
    xl: "h-14 w-14",
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative group">
        {/* Main Logo Circle */}
        <div
          className={`
          ${sizeClasses[size]} 
          bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 
          rounded-2xl flex items-center justify-center shadow-2xl 
          ${animated ? "group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" : ""}
          relative overflow-hidden
        `}
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 via-purple-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

          {/* Target Icon */}
          <Target
            className={`
            ${iconSizeClasses[size]} 
            text-white relative z-10
            ${animated ? "group-hover:rotate-180 transition-transform duration-700" : ""}
          `}
          />

          {/* Sparkle Effect */}
          <div className="absolute -top-1 -right-1">
            <div className="w-3 h-3 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Floating Elements */}
        {animated && (
          <>
            <div className="absolute -top-2 -left-2 w-2 h-2 bg-emerald-300/60 rounded-full animate-float"></div>
            <div className="absolute -bottom-1 -right-3 w-1.5 h-1.5 bg-purple-300/60 rounded-full animate-float-delayed"></div>
          </>
        )}

        {/* Glow Effect */}
        <div
          className={`
          absolute inset-0 ${sizeClasses[size]} 
          bg-gradient-to-r from-emerald-400 to-purple-400 
          rounded-2xl blur-xl opacity-0 
          ${animated ? "group-hover:opacity-30 transition-opacity duration-500" : ""}
          -z-10
        `}
        ></div>
      </div>

      {showText && (
        <div className={`${animated ? "group-hover:scale-105 transition-transform duration-300" : ""}`}>
          <div
            className={`
            ${textSizeClasses[size]} 
            font-bold bg-gradient-to-r from-slate-900 via-emerald-600 to-purple-600 
            bg-clip-text text-transparent
            ${animated ? "group-hover:from-emerald-500 group-hover:to-purple-500 transition-all duration-500" : ""}
          `}
          >
            Execura
          </div>
          <div
            className={`
            ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : size === "lg" ? "text-base" : "text-lg"} 
            text-slate-600 -mt-1 flex items-center
            ${animated ? "group-hover:text-emerald-600 transition-colors duration-300" : ""}
          `}
          >
            <Sparkles className={`${size === "sm" ? "w-3 h-3" : "w-4 h-4"} mr-1`} />
            The perfect placement
          </div>
        </div>
      )}
    </div>
  )
}
