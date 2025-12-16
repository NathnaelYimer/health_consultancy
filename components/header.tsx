"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Dr. Abel Health Consulting" width={200} height={60} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/publications" className="text-sm font-medium hover:text-primary transition-colors">
            Publications
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contact Us
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                🌐 EN <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>አማርኛ (Amharic)</DropdownMenuItem>
              <DropdownMenuItem>Afan Oromo</DropdownMenuItem>
              <DropdownMenuItem>ትግርኛ (Tigrinya)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <Link href="/contact">Request Consultation</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="/" className="text-sm font-medium hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/publications"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Publications
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Request Consultation
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
