'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle2, Star, Users, Award } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-secondary animate-gradient" style={{ backgroundSize: '300% 300%' }}></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-float"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl animate-morph"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 border-4 border-white/20 rounded-3xl rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border-4 border-white/20 rounded-full animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gold/20 rounded-2xl rotate-45 animate-float-fast"></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse"></div>

      {/* Sparkles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 text-white/20 animate-pulse"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 16}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        >
          <Sparkles className="w-full h-full" />
        </div>
      ))}

      <div className="container-premium mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-28 h-28 bg-white/10 backdrop-blur-md rounded-[32px] mb-10 animate-float shadow-glow">
            <Sparkles className="w-14 h-14 text-white animate-pulse" />
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold mb-8 leading-tight text-shadow-lg">
            Ready to
            <span className="block mt-2">GlowUp?</span>
          </h2>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-14 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy customers who discovered the joy of professional beauty services at home
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link
              href="/book"
              className="bg-white text-purple-600 px-12 py-6 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3 group"
            >
              Book an Artist
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href="/artist/register"
              className="bg-transparent border-3 border-white text-white px-12 py-6 rounded-2xl font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-500 hover:scale-105 inline-flex items-center justify-center gap-3 group"
            >
              Join as Artist
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
            {[
              { icon: CheckCircle2, text: 'Verified Artists', color: 'text-green-300' },
              { icon: Star, text: 'Satisfaction Guaranteed', color: 'text-gold' },
              { icon: Users, text: '10K+ Customers', color: 'text-white' },
              { icon: Award, text: 'Premium Quality', color: 'text-gold' },
            ].map(({ icon: Icon, text, color }) => (
              <div key={text} className="flex items-center gap-4 justify-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <span className="font-semibold text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
