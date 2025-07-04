import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Execura Recruitment Solutions | The Perfect Placement - Krishna Patel CEO",
  description:
    "Founded by Krishna Patel in Ahmedabad, Execura is Gujarat's premier recruitment consultancy. 15+ years experience, 10,000+ placements, 500+ companies served. Call +91 8849510517",
  keywords:
    "recruitment, staffing, jobs, Ahmedabad, Gujarat, Krishna Patel, executive search, permanent placement, contract staffing, talent consulting",
  authors: [{ name: "Krishna Patel", url: "https://execura.com" }],
  creator: "Execura Recruitment Solutions",
  publisher: "Execura Recruitment Solutions",
  robots: "index, follow",
  openGraph: {
    title: "Execura Recruitment Solutions | The Perfect Placement",
    description: "Founded by Krishna Patel in Ahmedabad. 15+ years experience in recruitment. Call +91 8849510517",
    url: "https://execura.com",
    siteName: "Execura Recruitment Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Execura Recruitment Solutions | The Perfect Placement",
    description: "Founded by Krishna Patel in Ahmedabad. Premier recruitment consultancy in Gujarat.",
    creator: "@ExecuraRecruitment",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#10b981",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="application-name" content="Execura Recruitment Solutions" />
        <meta name="apple-mobile-web-app-title" content="Execura" />
        <meta name="format-detection" content="telephone=+918849510517" />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad, Gujarat, India" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
