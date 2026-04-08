import Link from 'next/link'
import { Heart, PartyPopper, Sparkles, PenTool, Scissors, Flower2 } from 'lucide-react'

const categories = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    icon: Heart,
    description: 'Look stunning on your special day',
    color: 'from-rose-400 to-rose-500',
    bgColor: 'bg-rose-50',
    href: '/services/bridal'
  },
  {
    id: 'party',
    name: 'Party Makeup',
    icon: PartyPopper,
    description: 'Glam up for any celebration',
    color: 'from-gold-400 to-gold-500',
    bgColor: 'bg-gold-50',
    href: '/services/party'
  },
  {
    id: 'casual',
    name: 'Casual Makeup',
    icon: Sparkles,
    description: 'Everyday beauty enhancement',
    color: 'from-blush-400 to-blush-500',
    bgColor: 'bg-blush-50',
    href: '/services/casual'
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    icon: PenTool,
    description: 'Beautiful henna designs',
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-green-50',
    href: '/services/mehndi'
  },
  {
    id: 'hair',
    name: 'Hair Styling',
    icon: Scissors,
    description: 'Professional hair care & styling',
    color: 'from-purple-400 to-purple-500',
    bgColor: 'bg-purple-50',
    href: '/services/hair'
  },
  {
    id: 'skincare',
    name: 'Skincare',
    icon: Flower2,
    description: 'Rejuvenating skin treatments',
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
    href: '/services/skincare'
  },
]

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Beauty Services</h2>
          <p className="section-subtitle">
            Choose from a wide range of professional beauty services delivered to your doorstep
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.id}
                href={category.href}
                className="group card hover:scale-105 transition-all duration-300"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 bg-gradient-to-r ${category.color} bg-clip-text`} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="inline-flex items-center gap-2 text-rose-600 font-medium group-hover:gap-3 transition-all">
                    Book Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
