'use client'

import Link from 'next/link'
import { MapPin, Star, Clock, Heart, Bookmark, CheckCircle2, ArrowRight } from 'lucide-react'

const artists = [
  {
    id: 1,
    name: 'Ayesha Rahman',
    title: 'Senior Makeup Artist',
    avatar: 'bg-gradient-to-br from-pink-400 to-pink-600',
    rating: 4.9,
    reviews: 234,
    price: 'PKR 15,000',
    services: ['Bridal Makeup', 'Party Makeup', 'Casual Makeup'],
    location: 'Karachi, Clifton',
    distance: '2.5 km away',
    availability: 'Available Today',
    isVerified: true,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Sana Ali',
    title: 'Beauty & Skincare Expert',
    avatar: 'bg-gradient-to-br from-purple-400 to-purple-600',
    rating: 4.8,
    reviews: 189,
    price: 'PKR 12,000',
    services: ['Skincare', 'Facial Treatment', 'Mehndi'],
    location: 'Karachi, Gulshan',
    distance: '3.8 km away',
    availability: 'Available Tomorrow',
    isVerified: true,
    isFavorite: true,
  },
  {
    id: 3,
    name: 'Fatima Khan',
    title: 'Bridal Specialist',
    avatar: 'bg-gradient-to-br from-blue-400 to-blue-600',
    rating: 5.0,
    reviews: 312,
    price: 'PKR 25,000',
    services: ['Bridal Makeup', 'Mehndi', 'Hair Styling'],
    location: 'Karachi, DHA',
    distance: '1.2 km away',
    availability: 'Available Today',
    isVerified: true,
    isFavorite: false,
  },
  {
    id: 4,
    name: 'Zara Hussain',
    title: 'Hair & Makeup Artist',
    avatar: 'bg-gradient-to-br from-green-400 to-green-600',
    rating: 4.7,
    reviews: 156,
    price: 'PKR 10,000',
    services: ['Hair Styling', 'Party Makeup', 'Nail Art'],
    location: 'Karachi, PECHS',
    distance: '4.5 km away',
    availability: 'Available in 2 days',
    isVerified: true,
    isFavorite: false,
  },
]

export default function NearbyArtists() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-soft/30 via-white to-purple-lavender/30"></div>
      <div className="blob blob-pink w-96 h-96 -top-48 right-0"></div>
      <div className="blob blob-purple w-96 h-96 -bottom-48 left-0"></div>

      <div className="container-premium mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-7 py-3.5 rounded-full mb-7 shadow-soft">
            <MapPin className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Artists Near You</span>
          </div>
          <h2 className="text-section-md lg:text-section text-dark mb-6">
            Meet Our <span className="gradient-text">Top-Rated Artists</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Verified professional beauty artists ready to come to your doorstep
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="card-glass h-full flex flex-col hover:shadow-glow transition-all duration-500">
                {/* Artist Avatar */}
                <div className="relative mb-6">
                  <div className={`w-full h-56 ${artist.avatar} rounded-3xl overflow-hidden shadow-medium group-hover:shadow-lg transition-shadow duration-500`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-24 h-24 mx-auto mb-3 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white/30">
                          <span className="text-4xl font-bold">{artist.name.charAt(0)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Favorite Button */}
                    <button className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      artist.isFavorite 
                        ? 'bg-pink text-white shadow-glow' 
                        : 'bg-white/80 backdrop-blur-sm text-dark hover:bg-pink hover:text-white'
                    }`}>
                      <Heart className={`w-5 h-5 ${artist.isFavorite ? 'fill-current' : ''}`} />
                    </button>

                    {/* Verified Badge */}
                    {artist.isVerified && (
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span className="text-xs font-semibold text-dark">Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Artist Info */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="font-display text-xl font-bold text-dark mb-2 group-hover:text-pink transition-colors duration-300">
                      {artist.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{artist.title}</p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 text-gold fill-current" />
                        <span className="font-bold text-dark">{artist.rating}</span>
                      </div>
                      <span className="text-sm text-gray-500">({artist.reviews} reviews)</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {artist.services.slice(0, 2).map((service) => (
                        <span 
                          key={service}
                          className="text-xs px-3 py-1.5 bg-pink-soft text-pink rounded-full font-medium"
                        >
                          {service}
                        </span>
                      ))}
                      {artist.services.length > 2 && (
                        <span className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium">
                          +{artist.services.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Location & Availability */}
                  <div className="space-y-3 mb-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-pink flex-shrink-0" />
                      <span>{artist.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-purple flex-shrink-0" />
                      <span>{artist.distance}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-green-600">{artist.availability}</span>
                    </div>
                  </div>
                </div>

                {/* Price & Book Button */}
                <div className="pt-5 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Starting from</p>
                      <p className="text-lg font-bold gradient-text-static">{artist.price}</p>
                    </div>
                  </div>
                  <Link 
                    href={`/book?artist=${artist.id}`}
                    className="btn-primary w-full py-4 text-center flex items-center justify-center gap-2 group/btn shadow-glow"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center reveal">
          <Link href="/artists" className="btn-secondary inline-flex items-center gap-3 text-lg px-12 py-6">
            View All Artists
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
