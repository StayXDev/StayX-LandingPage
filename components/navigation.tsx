"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold">
            Stay<span className="text-primary">X</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/#agents"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Features
          </Link>
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            Demo
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {/* <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Sign In</Link>
          </Button> */}
          <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
            <Link href="/contact">Start Free Trial</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <Link
              href="/#agents"
              className="text-sm font-medium text-muted-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-muted-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="ghost" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
              <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Start Free Trial
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
