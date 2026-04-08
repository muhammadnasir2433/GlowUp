'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Sparkles className="w-8 h-8 text-rose-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full"></div>
            </div>
            <span className="font-display text-2xl font-bold gradient-text">
              GlowUp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors">
              Home
            </Link>
            <Link href="/artists" className="text-gray-700 hover:text-rose-600 transition-colors">
              Find Artists
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-rose-600 transition-colors">
              Services
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/artist/register" className="btn-secondary text-sm px-4 py-2">
              Join as Artist
            </Link>
            <Link href="/book" className="btn-primary text-sm px-4 py-2">
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-rose-600 transition-colors py-2">
                Home
              </Link>
              <Link href="/artists" className="text-gray-700 hover:text-rose-600 transition-colors py-2">
                Find Artists
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-rose-600 transition-colors py-2">
                Services
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-rose-600 transition-colors py-2">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-rose-600 transition-colors py-2">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Link href="/artist/register" className="btn-secondary text-center">
                  Join as Artist
                </Link>
                <Link href="/book" className="btn-primary text-center">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
