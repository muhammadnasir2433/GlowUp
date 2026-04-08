'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Heart, PartyPopper, Sparkles, PenTool, Scissors, Flower2, Star, ArrowRight, Sparkle } from 'lucide-react'

const categories = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    icon: Heart,
    description: 'Look stunning on your special day',
    price: 'From PKR 25,000',
    rating: 4.9,
    gradient: 'from-pink-500 to-pink-600',
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
    gradient: 'from-purple-500 to-purple-600',
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
    gradient: 'from-blue-500 to-blue-600',
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
    gradient: 'from-green-500 to-green-600',
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
    gradient: 'from-orange-500 to-orange-600',
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
    gradient: 'from-teal-500 to-teal-600',
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
    gradient: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50',
    image: 'bg-gradient-to-br from-rose-400 to-rose-600',
    href: '/services/nails'
  },
  {
    id: 'facial',
    name: 'Facial Treatment',
    icon: Sparkle,
    description: 'Deep cleansing facials',
    price: 'From PKR 5,500',
    rating: 4.8,
    gradient: 'from-indigo-500 to-indigo-600',
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
      <div className="blob blob-pink w-96 h-96 top-20 -left-48"></div>
      <div className="blob blob-purple w-96 h-96 bottom-20 -right-48"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-7 py-3.5 rounded-full mb-7 shadow-soft">
            <Sparkles className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Our Premium Services</span>
          </div>
          <h2 className="text-section-md lg:text-section text-dark mb-6">
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
                <div className={`card-glass h-full flex flex-col ${isHovered ? 'animate-scale-in shadow-glow' : 'shadow-soft'}`}>
                  {/* Image Section */}
                  <div className={`relative h-52 ${category.image} rounded-3xl mb-6 overflow-hidden group-hover:shadow-lg transition-shadow duration-500`}>
                    {/* Icon Center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className={`w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center transition-all duration-500 ${
                          isHovered ? 'scale-125 rotate-12 shadow-lg' : 'scale-100'
                        }`}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-500 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-5 left-5 right-5">
                        <div className="flex items-center justify-between text-white">
                          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                            <Star className="w-4 h-4 text-gold fill-current" />
                            <span className="text-sm font-semibold">{category.rating}</span>
                          </div>
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Glow Border */}
                    <div className={`absolute inset-0 border-3 border-white/0 rounded-3xl transition-all duration-500 ${
                      isHovered ? 'border-white/60 shadow-glow' : ''
                    }`}></div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-dark mb-3 group-hover:text-pink transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-5 leading-relaxed">{category.description}</p>

                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Starting from</p>
                        <p className="text-lg font-bold gradient-text-static">{category.price}</p>
                      </div>
                      <div className={`w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-glow ${
                        isHovered ? 'scale-110' : 'scale-100'
                      }`}>
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-20 reveal">
          <Link href="/services" className="btn-primary inline-flex items-center gap-3 text-lg px-12 py-6 shadow-glow">
            View All Services
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
