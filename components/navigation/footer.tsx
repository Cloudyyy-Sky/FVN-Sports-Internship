"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"
import { useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState("")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    // Simulate newsletter subscription
    setTimeout(() => {
      setSubscriptionMessage("Thanks for subscribing! Check your email for confirmation.")
      setEmail("")
      setIsSubscribing(false)
      setTimeout(() => setSubscriptionMessage(""), 3000)
    }, 1000)
  }

  const footerSections = [
    {
      title: "Sports",
      links: [
        { name: "Football", href: "/sports/football" },
        { name: "Basketball", href: "/sports/basketball" },
        { name: "Baseball", href: "/sports/baseball" },
        { name: "Soccer", href: "/sports/soccer" },
        { name: "Hockey", href: "/sports/hockey" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Live Streaming", href: "/live" },
        { name: "Highlights", href: "/highlights" },
        { name: "Schedule", href: "/schedule" },
        { name: "Teams", href: "/teams" },
        { name: "Players", href: "/players" },
      ],
    },
    {
      title: "Account",
      links: [
        { name: "Sign In", href: "/auth/login" },
        { name: "Sign Up", href: "/auth/signup" },
        { name: "Subscription", href: "/subscription" },
        { name: "My Profile", href: "/profile" },
        { name: "Settings", href: "/settings" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "About Us", href: "/about" },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        {/* Newsletter Signup */}
        <div className="mb-12 text-center">
          <h3 className="font-serif font-bold text-2xl mb-4">Stay in the Game</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get the latest scores, highlights, and exclusive content delivered straight to your inbox.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex max-w-md mx-auto gap-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90" disabled={isSubscribing}>
              <Mail className="h-4 w-4 mr-2" />
              {isSubscribing ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          {subscriptionMessage && <p className="text-green-600 text-sm mt-2">{subscriptionMessage}</p>}
        </div>

        <Separator className="mb-12" />

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-serif font-semibold text-lg mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif font-black">
                FVN
              </div>
              <span className="font-serif font-black text-xl">Sports</span>
            </Link>
            <span className="text-muted-foreground text-sm">© 2024 FVN Sports. All rights reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Button key={social.name} variant="ghost" size="icon" asChild className="hover:text-primary">
                <Link href={social.href} aria-label={social.name}>
                  <social.icon className="h-4 w-4" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
