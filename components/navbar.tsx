"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Code, Briefcase, GraduationCap, Book, Send, Menu, X, ChevronUp } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "home", icon: <Home className="h-[18px] w-[18px]" /> },
    { name: "Skills", href: "tech-stack", icon: <Code className="h-[18px] w-[18px]" /> },
    { name: "Projects", href: "projects", icon: <Code className="h-[18px] w-[18px] rotate-90" /> },
    { name: "Experience", href: "experience", icon: <Briefcase className="h-[18px] w-[18px]" /> },
    { name: "Education", href: "education", icon: <GraduationCap className="h-[18px] w-[18px]" /> },
    { name: "Testimonials", href: "testimonials", icon: <Book className="h-[18px] w-[18px]" /> },
    { name: "Contact", href: "contact", icon: <Send className="h-[18px] w-[18px]" /> },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/60 backdrop-blur-xl shadow-sm" : "bg-transparent backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="text-2xl font-bold text-primary">
            Memory<span className="text-destructive">Leaked</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button>Resume</Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button className="w-full">Resume</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
