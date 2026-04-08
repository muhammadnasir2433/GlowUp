'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Sparkles, Star, CheckCircle, Play, Users, Award } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 lg:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-soft via-white to-purple-lavender"></div>

        {/* Animated Gradient Orbs with Parallax */}
        <div
          className="absolute top-20 left-10 w-[500px] h-[500px] bg-gradient-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"
          style={{ transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-[500px] h-[500px] bg-gradient-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px)` }}
        ></div>
        <div
          className="absolute -bottom-20 left-1/2 w-[500px] h-[500px] bg-gold rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`, animationDelay: '3s' }}
        ></div>

        {/* Morphing Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-primary opacity-5 animate-morph"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #FF3CAC 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-premium mx-auto px-6 relative z-10">
        <div className="grid xl:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center xl:text-left animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-4 glass-card px-7 py-3.5 rounded-full mb-10 animate-scale-in shadow-soft">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-dark">Trusted by 10,000+ customers</span>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br from-pink to-purple animate-pulse"
                    style={{ animationDelay: `${i * 200}ms` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-hero-md lg:text-hero text-dark mb-8 leading-tight">
              Your Personal
              <span className="block mt-2">
                <span className="gradient-text animate-gradient">Beauty Artist</span>
              </span>
              <span className="block">at Home</span>
            </h1>

            {/* Subtext */}
            <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto xl:mx-0 leading-relaxed">
              Book <span className="font-semibold text-pink">verified makeup artists</span> near you in minutes with GlowUp. 
              Premium beauty services delivered to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center xl:justify-start mb-14">
              <Link 
                href="/book" 
                className="btn-primary text-lg px-12 py-6 inline-flex items-center justify-center gap-3 group shadow-glow"
              >
                Book an Artist
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link 
                href="/artist/register" 
                className="btn-secondary text-lg px-12 py-6 inline-flex items-center justify-center gap-3 group"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Join as Artist
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-10 pt-10 border-t border-gray-200">
              {[
                { value: '500+', label: 'Verified Artists', icon: Users },
                { value: '10K+', label: 'Happy Clients', icon: Award },
                { value: '4.9', label: 'Average Rating', icon: Star },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="text-center xl:text-left group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2 justify-center xl:justify-start">
                    <Icon className="w-5 h-5 text-pink" />
                    <div className="font-display text-4xl font-extrabold gradient-text-static">{value}</div>
                  </div>
                  <div className="text-gray-600 text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden xl:block">
            <div className="relative w-full h-[750px]">
              {/* Main Image Container */}
              <div
                className="absolute inset-12 bg-gradient-primary rounded-[40px] shadow-glow-lg overflow-hidden animate-float-slow"
                style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-40 h-40 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-pulse-glow-lg">
                      <Sparkles className="w-20 h-20 opacity-60" />
                    </div>
                    <p className="text-3xl font-bold mb-3">Beauty Artist at Work</p>
                    <p className="text-lg opacity-80">Professional • Verified • Premium</p>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>

              {/* Floating Card 1 - Booking Confirmation */}
              <div
                className="absolute left-0 top-32 glass-strong p-6 animate-float shadow-glass-lg"
                style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
              >
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-lg">Booking Confirmed!</p>
                    <p className="text-gray-600">Artist arriving in 30 min</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Reviews */}
              <div
                className="absolute right-0 bottom-56 glass-strong p-6 animate-float shadow-glass-lg"
                style={{ animationDelay: '2s', transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)` }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className={`w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-pink-${i * 100} to-purple-${i * 200} animate-pulse`}
                        style={{ animationDelay: `${i * 150}ms` }}
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 font-semibold">500+ 5-Star Reviews</p>
              </div>

              {/* Floating Card 3 - Live Demo Button */}
              <div
                className="absolute right-16 top-24 glass-strong p-5 animate-float cursor-pointer hover:scale-110 transition-transform duration-300 shadow-glass-lg"
                style={{ animationDelay: '4s', transform: `translate(${mousePosition.x * 0.6}px, ${mousePosition.y * 0.6}px)` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow animate-pulse-glow">
                    <Play className="w-7 h-7 text-white fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-dark">Watch Demo</p>
                    <p className="text-xs text-gray-600">2 min video</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-12 right-24 w-24 h-24 border-4 border-pink-300 rounded-3xl rotate-12 animate-float-slow opacity-40"></div>
              <div className="absolute bottom-24 left-12 w-20 h-20 border-4 border-purple-300 rounded-full animate-float opacity-40"></div>
              <div className="absolute top-1/2 left-0 w-16 h-16 bg-gold rounded-2xl rotate-45 animate-float-fast opacity-30 shadow-gold"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="w-9 h-14 border-3 border-pink-400 rounded-full flex items-start justify-center p-2.5 shadow-soft">
          <div className="w-2 h-4 bg-gradient-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
