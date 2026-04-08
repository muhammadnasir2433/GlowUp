'use client'

import Link from 'next/link'
import { Search, Calendar, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Browse Artists Nearby',
    description: 'Search and filter through our verified beauty artists in your area. View portfolios, ratings, and real reviews from real customers.',
    icon: Search,
    gradient: 'from-pink-500 to-pink-600',
    features: ['View artist portfolios', 'Read authentic reviews', 'Compare prices'],
  },
  {
    number: 2,
    title: 'Book Your Service',
    description: 'Choose your preferred date, time, and service. Select an artist that matches your style, budget, and availability.',
    icon: Calendar,
    gradient: 'from-purple-500 to-purple-600',
    features: ['Flexible scheduling', 'Instant confirmation', 'Secure booking'],
  },
  {
    number: 3,
    title: 'Artist Comes Home',
    description: 'Your verified artist arrives at your doorstep with all professional equipment. Relax and enjoy premium beauty services at home.',
    icon: Sparkles,
    gradient: 'from-gold to-gold-dark',
    features: ['Professional equipment', 'Premium products', 'Satisfaction guaranteed'],
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-pink-soft/50 to-white">
      {/* Background Elements */}
      <div className="blob blob-pink w-96 h-96 top-20 left-10"></div>
      <div className="blob blob-purple w-96 h-96 bottom-20 right-10"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-7 py-3.5 rounded-full mb-7 shadow-soft">
            <Calendar className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Simple & Easy Process</span>
          </div>
          <h2 className="text-section-md lg:text-section text-dark mb-6">
            How <span className="gradient-text">GlowUp</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting beautiful has never been easier. Just 3 simple steps to your perfect look
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-16 mb-20 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-40 left-1/4 right-1/4 h-1 z-0">
            <div className="w-full h-full bg-gradient-primary rounded-full opacity-30"></div>
            <div className="absolute top-1/2 left-0 w-4 h-4 bg-pink rounded-full -translate-y-1/2 animate-pulse shadow-glow"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-purple rounded-full -translate-y-1/2 -translate-x-1/2 animate-pulse shadow-glow" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 right-0 w-4 h-4 bg-gold rounded-full -translate-y-1/2 animate-pulse shadow-gold" style={{ animationDelay: '1s' }}></div>
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="relative reveal"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative z-10">
                  {/* Step Card */}
                  <div className="card-glass text-center group hover:shadow-glow transition-all duration-500">
                    {/* Step Number & Icon */}
                    <div className="relative mb-10">
                      <div className={`w-28 h-28 mx-auto bg-gradient-to-r ${step.gradient} rounded-[32px] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="w-14 h-14 text-white" />
                      </div>

                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 md:right-1/4 md:left-auto w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-medium border-3 border-pink animate-pulse-glow">
                        <span className="font-display font-bold text-2xl gradient-text">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold text-dark mb-4 group-hover:text-pink transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <div className="w-7 h-7 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <Link href="/book" className="btn-primary text-lg px-14 py-6 inline-flex items-center gap-3 group shadow-glow-lg">
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <p className="text-gray-600 mt-6 text-base">
            Join 10,000+ happy customers who trust GlowUp
          </p>
        </div>
      </div>
    </section>
  )
}
