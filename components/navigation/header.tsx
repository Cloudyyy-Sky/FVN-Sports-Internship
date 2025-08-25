"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Menu, X, Play, Calendar, Trophy, Users, Settings, Bell, MessageCircle } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { UserNav } from "./user-nav"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, loading } = useAuth()

  const navigationItems = [
    { name: "Live", href: "/live", icon: Play, badge: "LIVE" },
    { name: "Schedule", href: "/schedule", icon: Calendar },
    { name: "Sports", href: "/sports", icon: Trophy },
    { name: "Highlights", href: "/highlights", icon: Play },
    { name: "Teams", href: "/teams", icon: Users },
    { name: "Community", href: "/community", icon: MessageCircle },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-serif font-black">
            FVN
          </div>
          <span className="font-serif font-black text-xl">Sports</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <item.icon className="h-4 w-4" />
              <span>{item.name}</span>
              {item.badge && (
                <Badge variant="destructive" className="ml-1 text-xs live-indicator">
                  {item.badge}
                </Badge>
              )}
            </Link>
          ))}
          {user && (
            <Link
              href="/admin"
              className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary"
            >
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </Link>
          )}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-sm mx-6">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search teams, players, games..." className="pl-8" />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">3</Badge>
          </Button>

          {loading ? (
            <div className="w-8 h-8 bg-gray-700 rounded-full animate-pulse" />
          ) : user ? (
            <UserNav user={user} />
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search teams, players, games..." className="pl-8" />
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                  {item.badge && (
                    <Badge variant="destructive" className="ml-auto text-xs live-indicator">
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              ))}
              {user && (
                <Link
                  href="/admin"
                  className="flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </Link>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
