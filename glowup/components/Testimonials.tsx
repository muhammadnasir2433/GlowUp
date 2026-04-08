'use client'

import { useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ayesha Khan',
    role: 'Bride',
    image: 'bg-rose-300',
    rating: 5,
    text: 'GlowUp made my wedding day so special! My bridal makeup was absolutely perfect, and the artist came right to my home. Highly recommended!',
    service: 'Bridal Makeup',
  },
  {
    id: 2,
    name: 'Sara Ahmed',
    role: 'Regular Customer',
    image: 'bg-gold-300',
    rating: 5,
    text: 'I\'ve been using GlowUp for all my party makeup needs. The artists are professional, punctual, and incredibly talented. Love this service!',
    service: 'Party Makeup',
  },
  {
    id: 3,
    name: 'Fatima Ali',
    role: 'Regular Customer',
    image: 'bg-blush-300',
    rating: 5,
    text: 'The convenience of having a beauty artist come home is unmatched. Great quality service and very affordable prices. My go-to for all events!',
    service: 'Casual Makeup',
  },
  {
    id: 4,
    name: 'Zainab Hassan',
    role: 'Bride',
    image: 'bg-purple-300',
    rating: 5,
    text: 'My mehndi ceremony look was stunning thanks to GlowUp. The artist understood exactly what I wanted and delivered beyond my expectations!',
    service: 'Mehndi',
  },
  {
    id: 5,
    name: 'Hira Malik',
    role: 'Regular Customer',
    image: 'bg-blue-300',
    rating: 5,
    text: 'The skincare treatment I received was amazing. My skin has never looked better! The artist was knowledgeable and used quality products.',
    service: 'Skincare',
  },
  {
    id: 6,
    name: 'Amna Raza',
    role: 'Regular Customer',
    image: 'bg-green-300',
    rating: 5,
    text: 'Got my hair styled for a wedding and it was perfect! The stylist was so talented and made sure I was happy with every detail.',
    service: 'Hair Styling',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3)

  const nextSlide = () => {
    if (currentIndex + 3 < testimonials.length) {
      setCurrentIndex(currentIndex + 3)
    } else {
      setCurrentIndex(0)
    }
  }

  const prevSlide = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3)
    } else {
      setCurrentIndex(Math.max(0, testimonials.length - 3))
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Real reviews from real customers who loved their GlowUp experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* More Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(3, 6).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-rose-100">Happy Customers</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-rose-100">Verified Artists</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">4.9</div>
              <div className="text-rose-100">Average Rating</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl font-bold mb-2">15K+</div>
              <div className="text-rose-100">Services Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="card p-8 hover:scale-105 transition-transform duration-300">
      <Quote className="w-8 h-8 text-rose-300 mb-4" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className={`w-12 h-12 ${testimonial.image} rounded-full`}></div>
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.role} • {testimonial.service}</p>
        </div>
      </div>
    </div>
  )
}
