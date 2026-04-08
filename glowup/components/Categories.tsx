'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, PartyPopper, Sparkles, PenTool, Scissors, Flower2, Star, ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    icon: Heart,
    description: 'Look stunning on your special day',
    price: 'From PKR 25,000',
    rating: 4.9,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    href: '/services/bridal'
  },
  {
    id: 'party',
    name: 'Party Makeup',
    icon: PartyPopper,
    description: 'Glam up for any celebration',
    price: 'From PKR 8,000',
    rating: 4.8,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    href: '/services/party'
  },
  {
    id: 'casual',
    name: 'Casual Makeup',
    icon: Sparkles,
    description: 'Everyday beauty enhancement',
    price: 'From PKR 5,000',
    rating: 4.7,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    href: '/services/casual'
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    icon: PenTool,
    description: 'Beautiful henna designs',
    price: 'From PKR 12,000',
    rating: 4.9,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    image: 'bg-gradient-to-br from-green-400 to-green-600',
    href: '/services/mehndi'
  },
  {
    id: 'hair',
    name: 'Hair Styling',
    icon: Scissors,
    description: 'Professional hair care & styling',
    price: 'From PKR 6,000',
    rating: 4.8,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    href: '/services/hair'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    icon: Flower2,
    description: 'Rejuvenating skin treatments',
    price: 'From PKR 7,000',
    rating: 4.9,
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    image: 'bg-gradient-to-br from-teal-400 to-teal-600',
    href: '/services/skincare'
  },
  {
    id: 'nails',
    name: 'Nail Art',
    icon: Star,
    description: 'Creative nail designs',
    price: 'From PKR 3,000',
    rating: 4.7,
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    image: 'bg-gradient-to-br from-rose-400 to-rose-600',
    href: '/services/nails'
  },
  {
    id: 'facial',
    name: 'Facial Treatment',
    icon: Sparkles,
    description: 'Deep cleansing facials',
    price: 'From PKR 5,500',
    rating: 4.8,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    href: '/services/facial'
  },
]

export default function Categories() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary rounded-full filter blur-3xl opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-secondary rounded-full filter blur-3xl opacity-5"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Our Premium Services</span>
          </div>
          <h2 className="text-section text-dark mb-6">
            Explore Our <span className="gradient-text">Beauty Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from a wide range of professional beauty services delivered to your doorstep with premium quality
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            const isHovered = hoveredId === category.id
            
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group relative"
                onMouseEnter={() => setHoveredId(category.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`card-premium h-full flex flex-col ${isHovered ? 'animate-scale-in' : ''}`}>
                  {/* Image Section */}
                  <div className={`relative h-48 ${category.image} rounded-2xl mb-6 overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transition-transform duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-gold fill-current" />
                            <span className="text-sm font-semibold">{category.rating}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>

                    {/* Glow Border */}
                    <div className={`absolute inset-0 border-2 border-white/0 rounded-2xl transition-all duration-300 ${isHovered ? 'border-white/50 shadow-glow' : ''}`}></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-pink transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Starting from</p>
                        <p className="text-lg font-bold gradient-text">{category.price}</p>
                      </div>
                      <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-glow">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 reveal">
          <Link href="/services" className="btn-primary inline-flex items-center gap-3 text-lg px-10 py-5">
            View All Services
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
