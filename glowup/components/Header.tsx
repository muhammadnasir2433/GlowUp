'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles, Calendar } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop/Tablet Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-card rounded-none border-b border-pink-200/30 shadow-soft' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-premium mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow animate-pulse-glow">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gold rounded-full animate-float"></div>
              </div>
              <span className="font-display text-3xl font-extrabold gradient-text">
                GlowUp
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {['Home', 'Artists', 'Services', 'Blog', 'Contact'].map((item) => (
                <Link 
                  key={item} 
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="text-dark font-medium hover:text-pink transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/artist/register" className="btn-secondary text-sm px-6 py-3">
                Join as Artist
              </Link>
              <Link href="/book" className="btn-primary text-sm px-6 py-3">
                <Calendar className="w-4 h-4 inline mr-2" />
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-pink-50 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-pink" />
              ) : (
                <Menu className="w-7 h-7 text-dark" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 pb-6 animate-fade-in-up">
              <div className="flex flex-col gap-4">
                {['Home', 'Artists', 'Services', 'Blog', 'Contact'].map((item) => (
                  <Link 
                    key={item}
                    href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                    className="text-dark font-medium hover:text-pink py-3 px-4 rounded-xl hover:bg-pink-50 transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 pt-4 mt-4 border-t border-pink-200">
                  <Link href="/artist/register" className="btn-secondary text-center">
                    Join as Artist
                  </Link>
                  <Link href="/book" className="btn-primary text-center">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Bottom Booking Bar */}
      <div className="lg:hidden mobile-bottom-bar">
        <Link href="/book" className="btn-primary w-full flex items-center justify-center gap-3">
          <Calendar className="w-5 h-5" />
          <span className="font-semibold">Book Your Artist Now</span>
        </Link>
      </div>
    </>
  )
}
