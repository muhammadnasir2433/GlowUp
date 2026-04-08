'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star, CheckCircle, Play } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        
        {/* Animated Gradient Orbs */}
        <div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
        ></div>
        <div 
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-gradient-gold rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"
          style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #FF4D8D 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-premium mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-8 animate-scale-in">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-dark">Trusted by 10,000+ customers</span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-pink-${i * 100} to-purple-${i * 100}`}></div>
                ))}
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-hero text-dark mb-6 leading-tight">
              Book Your
              <span className="block gradient-text mt-2 animate-gradient">Personal Beauty</span>
              <span className="block">Artist at Home</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              GlowUp connects you with <span className="font-semibold text-pink">verified makeup artists</span> near you in minutes. 
              Premium beauty services at your doorstep.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
              <Link href="/book" className="btn-primary text-lg px-10 py-5 inline-flex items-center justify-center gap-3 group">
                Book an Artist
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/artist/register" className="btn-secondary text-lg px-10 py-5 inline-flex items-center justify-center gap-3">
                <Sparkles className="w-5 h-5" />
                Join as Artist
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 pt-8 border-t border-gray-200">
              {[
                { value: '500+', label: 'Verified Artists' },
                { value: '10K+', label: 'Happy Clients' },
                { value: '4.9', label: 'Average Rating' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <div className="font-display text-4xl font-extrabold gradient-text">{value}</div>
                  <div className="text-gray-600 text-sm font-medium mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[700px]">
              {/* Main Image Container */}
              <div 
                className="absolute inset-12 bg-gradient-primary rounded-3xl shadow-glow overflow-hidden animate-float-slow"
                style={{ transform: `translate(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Sparkles className="w-32 h-32 mx-auto mb-6 opacity-50 animate-pulse-glow" />
                    <p className="text-2xl font-bold">Beauty Artist at Work</p>
                    <p className="text-lg mt-2 opacity-75">Professional • Verified • Premium</p>
                  </div>
                </div>
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
              
              {/* Floating Card 1 - Booking Confirmation */}
              <div 
                className="absolute left-0 top-32 glass-card p-5 animate-float shadow-glass"
                style={{ transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">Booking Confirmed!</p>
                    <p className="text-gray-600">Artist arriving in 30 min</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Reviews */}
              <div 
                className="absolute right-0 bottom-48 glass-card p-5 animate-float shadow-glass"
                style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-${i * 100} to-purple-${i * 200}`}></div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 font-medium">500+ 5-Star Reviews</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 - Live Demo Button */}
              <div 
                className="absolute right-12 top-20 glass-card p-4 animate-float cursor-pointer hover:scale-105 transition-transform"
                style={{ animationDelay: '4s', transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                    <Play className="w-6 h-6 text-white fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Watch Demo</p>
                    <p className="text-xs text-gray-600">2 min video</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-10 right-20 w-20 h-20 border-4 border-pink-300 rounded-2xl rotate-12 animate-float-slow opacity-50"></div>
              <div className="absolute bottom-20 left-10 w-16 h-16 border-4 border-purple-300 rounded-full animate-float opacity-50"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-pink-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
