'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sparkles, Calendar } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
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
            ? 'glass-strong border-b border-pink-200/30 shadow-soft'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-premium mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gold rounded-full animate-float shadow-gold"></div>
              </div>
              <span className="font-display text-3xl font-extrabold gradient-text">
                GlowUp
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {['Home', 'Artists', 'Services', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                  className="text-dark font-medium hover:text-pink transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-500"></span>
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-5">
              <Link 
                href="/artist/register" 
                className="btn-secondary text-sm px-7 py-3.5 hover:scale-105 transition-transform"
              >
                Join as Artist
              </Link>
              <Link 
                href="/book" 
                className="btn-primary text-sm px-7 py-3.5 flex items-center gap-2 group hover:scale-105 transition-transform"
              >
                <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-3 rounded-xl hover:bg-pink-50 transition-all duration-300 hover:scale-110"
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
              <div className="glass-card rounded-2xl p-6">
                <div className="flex flex-col gap-3">
                  {['Home', 'Artists', 'Services', 'Blog', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                      className="text-dark font-medium hover:text-pink py-4 px-5 rounded-xl hover:bg-pink-50 transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-pink-200">
                    <Link 
                      href="/artist/register" 
                      className="btn-secondary text-center py-4"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Join as Artist
                    </Link>
                    <Link 
                      href="/book" 
                      className="btn-primary text-center py-4 flex items-center justify-center gap-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Calendar className="w-5 h-5" />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Mobile Bottom Booking Bar */}
      <div className="lg:hidden mobile-bottom-bar">
        <Link href="/book" className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-base">
          <Calendar className="w-6 h-6" />
          <span className="font-semibold">Book Your Beauty Artist</span>
        </Link>
      </div>
    </>
  )
}
