'use client'

import { Shield, Lock, Home, Award, CheckCircle2, Star, Users, Clock } from 'lucide-react'

const trustFeatures = [
  {
    icon: Shield,
    title: 'Verified Artists',
    description: 'All our artists go through a rigorous verification process including background checks and skill assessments.',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Lock,
    title: 'Secure Booking',
    description: 'Your bookings and payments are 100% secure with end-to-end encryption and trusted payment partners.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Home,
    title: 'Safe Home Service',
    description: 'We prioritize your safety with verified addresses, real-time tracking, and 24/7 customer support.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Professional Quality',
    description: 'Premium beauty services with professional-grade products and equipment brought to your doorstep.',
    color: 'from-gold to-gold-dark',
    bgColor: 'bg-gold/10',
  },
]

const stats = [
  { icon: Users, value: '10K+', label: 'Happy Customers', color: 'text-pink' },
  { icon: Shield, value: '500+', label: 'Verified Artists', color: 'text-purple' },
  { icon: Star, value: '4.9', label: 'Average Rating', color: 'text-gold' },
  { icon: Clock, value: '30 min', label: 'Avg. Response Time', color: 'text-green-500' },
]

export default function TrustAndSafety() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-soft/40 to-white"></div>
      <div className="blob blob-pink w-[600px] h-[600px] -top-96 -left-48 opacity-10"></div>
      <div className="blob blob-purple w-[600px] h-[600px] -bottom-96 -right-48 opacity-10"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-7 py-3.5 rounded-full mb-7 shadow-soft">
            <Shield className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Trust & Safety</span>
          </div>
          <h2 className="text-section-md lg:text-section text-dark mb-6">
            Why Thousands <span className="gradient-text">Trust GlowUp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your safety and satisfaction are our top priority. Here's what makes us different.
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="reveal group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="card-glass h-full text-center hover:shadow-glow transition-all duration-500">
                  {/* Icon */}
                  <div className={`w-24 h-24 mx-auto mb-6 ${feature.bgColor} rounded-[28px] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-bold text-dark mb-4 group-hover:text-pink transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Check Mark */}
                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Guaranteed</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="reveal">
          <div className="glass-strong rounded-[40px] p-12 lg:p-16 shadow-glass-lg">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-dark mb-4">
                Trusted by <span className="gradient-text-static">Thousands</span>
              </h3>
              <p className="text-gray-600 text-lg">
                Real numbers from real customers who love GlowUp
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className={`w-16 h-16 mx-auto mb-4 ${color} bg-current/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${color}`} />
                  </div>
                  <div className={`font-display text-4xl lg:text-5xl font-extrabold ${color} mb-2`}>
                    {value}
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-16 reveal">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Shield, text: 'SSL Secured' },
              { icon: Lock, text: 'Payment Protection' },
              { icon: CheckCircle2, text: 'Verified Business' },
            ].map(({ icon: Icon, text }) => (
              <div 
                key={text}
                className="flex items-center gap-3 glass-card px-6 py-4 rounded-full shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <Icon className="w-5 h-5 text-green-600" />
                <span className="text-sm font-semibold text-dark">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
