'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-secondary animate-gradient" style={{ backgroundSize: '200% 200%' }}></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border-4 border-white/20 rounded-2xl rotate-12 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 border-4 border-white/20 rounded-full animate-float-slow"></div>
      
      <div className="container-premium mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl mb-8 animate-float">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold mb-6 leading-tight">
            Ready to
            <span className="block mt-2">GlowUp?</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy customers who discovered the joy of professional beauty services at home
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <Link
              href="/book"
              className="bg-white text-purple-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center justify-center gap-3 group"
            >
              Book an Artist
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/artist/register"
              className="bg-transparent border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
            >
              Join as Artist
              <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/20">
            {[
              { icon: '✓', text: 'Verified Artists' },
              { icon: '🔒', text: 'Secure Booking' },
              { icon: '⭐', text: 'Satisfaction Guaranteed' },
              { icon: '💬', text: '24/7 Support' },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl">
                  {icon}
                </div>
                <span className="font-medium text-sm md:text-base">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
