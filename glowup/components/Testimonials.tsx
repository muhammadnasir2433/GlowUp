'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Star, Clock, Heart, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'Bride',
    avatar: 'bg-gradient-to-br from-pink-400 to-pink-600',
    rating: 5,
    text: 'GlowUp made my wedding day absolutely magical! My bridal makeup was flawless and lasted the entire event. The artist was professional and understood exactly what I wanted. Highly recommended!',
    service: 'Bridal Makeup',
    image: 'bg-gradient-to-br from-pink-200 to-pink-400',
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    role: 'Regular Customer',
    avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
    rating: 5,
    text: 'I\'ve been using GlowUp for all my party makeup needs. The convenience of having an artist come home is unmatched. Quality is always consistent and the artists are incredibly talented!',
    service: 'Party Makeup',
    image: 'bg-gradient-to-br from-purple-200 to-purple-400',
  },
  {
    id: 3,
    name: 'Fatima Ali',
    role: 'Regular Customer',
    avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
    rating: 5,
    text: 'The skincare treatment I received was transformative. My skin has never looked better! The artist was knowledgeable, used premium products, and made sure I was comfortable throughout.',
    service: 'Skincare',
    image: 'bg-gradient-to-br from-blue-200 to-blue-400',
  },
  {
    id: 4,
    name: 'Zainab Hassan',
    role: 'Bride',
    avatar: 'bg-gradient-to-br from-green-400 to-green-600',
    rating: 5,
    text: 'My mehndi ceremony look was absolutely stunning thanks to GlowUp. The artist was punctual, professional, and created the most beautiful makeup look I could have imagined!',
    service: 'Mehndi',
    image: 'bg-gradient-to-br from-green-200 to-green-400',
  },
  {
    id: 5,
    name: 'Hira Malik',
    role: 'Regular Customer',
    avatar: 'bg-gradient-to-br from-orange-400 to-orange-600',
    rating: 5,
    text: 'Got my hair styled for a wedding and it was perfection! The stylist was so talented and patient, making sure I was happy with every detail. Will definitely book again!',
    service: 'Hair Styling',
    image: 'bg-gradient-to-br from-orange-200 to-orange-400',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-6">
            <Star className="w-5 h-5 text-gold fill-current" />
            <span className="text-sm font-semibold text-dark">What Our Clients Say</span>
          </div>
          <h2 className="text-section text-dark mb-6">
            Real Reviews from <span className="gradient-text">Real Customers</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See why thousands trust GlowUp for their beauty needs
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="card-premium p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-8xl font-serif text-pink-200 opacity-50 leading-none">"</div>

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Image Side */}
              <div className="relative">
                <div className={`aspect-square ${current.image} rounded-3xl overflow-hidden shadow-medium`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className={`w-24 h-24 mx-auto mb-4 ${current.avatar} rounded-full border-4 border-white shadow-lg`}></div>
                      <p className="text-xl font-bold">{current.name}</p>
                      <p className="text-sm opacity-90">{current.role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Service Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full whitespace-nowrap">
                  <p className="text-sm font-semibold text-dark">{current.service}</p>
                </div>
              </div>

              {/* Content Side */}
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gold fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{current.text}"
                </p>

                {/* Author Info */}
                <div>
                  <p className="font-display text-xl font-bold text-dark">{current.name}</p>
                  <p className="text-gray-600">{current.role}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setIsAutoPlaying(false)
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentIndex 
                        ? 'w-12 h-3 bg-gradient-primary' 
                        : 'w-3 h-3 bg-gray-300 hover:bg-pink-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-xl border-2 border-gray-200 flex items-center justify-center hover:border-pink-500 hover:bg-pink-50 transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 reveal">
          {[
            { value: '10K+', label: 'Happy Customers', icon: '💖' },
            { value: '500+', label: 'Verified Artists', icon: '✨' },
            { value: '4.9', label: 'Average Rating', icon: '⭐' },
            { value: '15K+', label: 'Services Done', icon: '🎨' },
          ].map(({ value, label, icon }) => (
            <div key={label} className="card-premium text-center group hover:shadow-glow transition-all">
              <div className="text-5xl mb-4">{icon}</div>
              <div className="font-display text-4xl font-extrabold gradient-text mb-2">{value}</div>
              <div className="text-gray-600 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
