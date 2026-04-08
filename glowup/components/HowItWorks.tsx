'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Search, Calendar, Sparkles, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Browse Artists Nearby',
    description: 'Search and filter through our verified beauty artists in your area. View portfolios, ratings, and real reviews from real customers.',
    icon: Search,
    color: 'from-pink-500 to-pink-600',
    features: ['View artist portfolios', 'Read authentic reviews', 'Compare prices'],
  },
  {
    number: 2,
    title: 'Book Your Service',
    description: 'Choose your preferred date, time, and service. Select an artist that matches your style, budget, and availability.',
    icon: Calendar,
    color: 'from-purple-500 to-purple-600',
    features: ['Flexible scheduling', 'Instant confirmation', 'Secure booking'],
  },
  {
    number: 3,
    title: 'Artist Comes Home',
    description: 'Your verified artist arrives at your doorstep with all professional equipment. Relax and enjoy premium beauty services at home.',
    icon: Sparkles,
    color: 'from-gold-500 to-gold-600',
    features: ['Professional equipment', 'Premium products', 'Satisfaction guaranteed'],
  },
]

export default function HowItWorks() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary rounded-full filter blur-3xl opacity-10 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-secondary rounded-full filter blur-3xl opacity-10 animate-float"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-6">
            <Calendar className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Simple & Easy Process</span>
          </div>
          <h2 className="text-section text-dark mb-6">
            How <span className="gradient-text">GlowUp</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Getting beautiful has never been easier. Just 3 simple steps to your perfect look
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number} 
                className="relative reveal"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Connector Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-full w-full h-1 z-0">
                    <div className="w-full h-full bg-gradient-to-r from-pink-300 to-purple-300 rounded-full opacity-30"></div>
                    <div className="absolute top-1/2 right-0 w-3 h-3 bg-pink-500 rounded-full -translate-y-1/2 animate-pulse"></div>
                  </div>
                )}
                
                <div className="relative z-10">
                  {/* Step Card */}
                  <div className="card-premium text-center group hover:shadow-glow transition-all duration-500">
                    {/* Step Number & Icon */}
                    <div className="relative mb-8">
                      <div className={`w-24 h-24 mx-auto bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 md:right-1/3 md:left-auto w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-medium border-2 border-pink-500">
                        <span className="font-display font-bold text-xl gradient-text">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-2xl font-bold text-dark mb-4 group-hover:text-pink transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 pt-6 border-t border-gray-100">
                      {step.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
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
          <Link href="/book" className="btn-primary text-lg px-12 py-6 inline-flex items-center gap-3 group">
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-gray-600 mt-6">
            Join 10,000+ happy customers who trust GlowUp
          </p>
        </div>
      </div>
    </section>
  )
}
