'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, MapPin, Star, Filter, DollarSign, Clock, Heart, ChevronDown } from 'lucide-react'

// Mock data
const mockArtists = [
  {
    id: 1,
    name: 'Ayesha Makeup Artist',
    image: 'bg-rose-300',
    rating: 4.9,
    reviews: 234,
    location: 'Karachi, Clifton',
    services: ['Bridal Makeup', 'Party Makeup', 'Casual Makeup'],
    startingPrice: 5000,
    experience: 8,
    verified: true,
  },
  {
    id: 2,
    name: 'Sara Beauty Studio',
    image: 'bg-gold-300',
    rating: 4.8,
    reviews: 189,
    location: 'Lahore, Gulberg',
    services: ['Party Makeup', 'Mehndi', 'Hair Styling'],
    startingPrice: 4000,
    experience: 6,
    verified: true,
  },
  {
    id: 3,
    name: 'Fatima Glam Artist',
    image: 'bg-blush-300',
    rating: 5.0,
    reviews: 312,
    location: 'Islamabad, F-7',
    services: ['Bridal Makeup', 'Skincare', 'Facial'],
    startingPrice: 8000,
    experience: 10,
    verified: true,
  },
  {
    id: 4,
    name: 'Zainab Mehndi Artist',
    image: 'bg-green-300',
    rating: 4.7,
    reviews: 156,
    location: 'Rawalpindi, Satellite Town',
    services: ['Mehndi', 'Nail Art'],
    startingPrice: 3000,
    experience: 5,
    verified: true,
  },
  {
    id: 5,
    name: 'Hira Hair Stylist',
    image: 'bg-purple-300',
    rating: 4.9,
    reviews: 201,
    location: 'Karachi, DHA',
    services: ['Hair Styling', 'Hair Treatment', 'Keratin'],
    startingPrice: 6000,
    experience: 7,
    verified: true,
  },
  {
    id: 6,
    name: 'Amna Skin Expert',
    image: 'bg-blue-300',
    rating: 4.8,
    reviews: 178,
    location: 'Lahore, DHA',
    services: ['Skincare', 'Facial', 'Chemical Peel'],
    startingPrice: 7000,
    experience: 9,
    verified: true,
  },
]

const services = ['All Services', 'Bridal Makeup', 'Party Makeup', 'Casual Makeup', 'Mehndi', 'Hair Styling', 'Skincare']
const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under PKR 5,000', min: 0, max: 5000 },
  { label: 'PKR 5,000 - 10,000', min: 5000, max: 10000 },
  { label: 'PKR 10,000+', min: 10000, max: Infinity },
]

export default function ArtistsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedService, setSelectedService] = useState('All Services')
  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0])
  const [sortBy, setSortBy] = useState('rating')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])
  }

  const filteredArtists = mockArtists
    .filter(artist => {
      const matchesSearch = artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           artist.location.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesService = selectedService === 'All Services' || artist.services.includes(selectedService)
      const matchesPrice = artist.startingPrice >= selectedPriceRange.min && artist.startingPrice < selectedPriceRange.max
      return matchesSearch && matchesService && matchesPrice
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'price-low') return a.startingPrice - b.startingPrice
      if (sortBy === 'price-high') return b.startingPrice - a.startingPrice
      if (sortBy === 'reviews') return b.reviews - a.reviews
      return 0
    })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Find Your Beauty Artist</h1>
          <p className="text-xl text-rose-100 mb-8">Browse verified artists in your area</p>
          
          {/* Search Bar */}
          <div className="max-w-3xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, location, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white rounded-2xl shadow-soft p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                  <Filter className="w-5 h-5" />
                  Filters
                </h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
                >
                  <ChevronDown className={`w-5 h-5 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                {/* Service Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Service Type</h3>
                  <div className="space-y-2">
                    {services.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="service"
                          checked={selectedService === service}
                          onChange={() => setSelectedService(service)}
                          className="w-4 h-4 text-rose-500"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Price Range
                  </h3>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPriceRange === range}
                          onChange={() => setSelectedPriceRange(range)}
                          className="w-4 h-4 text-rose-500"
                        />
                        <span className="text-sm text-gray-700">{range.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  >
                    <option value="rating">Highest Rated</option>
                    <option value="reviews">Most Reviews</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Artists Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">{filteredArtists.length} artists found</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredArtists.map((artist) => (
                <div key={artist.id} className="card hover:scale-105 transition-transform duration-300">
                  <div className="relative">
                    <div className={`h-48 ${artist.image} rounded-t-2xl`}></div>
                    <button
                      onClick={() => toggleFavorite(artist.id)}
                      className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(artist.id) ? 'fill-rose-500 text-rose-500' : 'text-gray-400'}`} />
                    </button>
                    {artist.verified && (
                      <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Verified
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-900 mb-2">{artist.name}</h3>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-gold-400 fill-current" />
                        <span className="font-semibold">{artist.rating}</span>
                        <span>({artist.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {artist.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{artist.experience} years experience</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {artist.services.slice(0, 3).map((service) => (
                        <span key={service} className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-medium">
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-sm text-gray-600">Starting from</p>
                        <p className="text-2xl font-bold text-rose-600">PKR {artist.startingPrice.toLocaleString()}</p>
                      </div>
                      <Link href={`/book/${artist.id}`} className="btn-primary">
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredArtists.length === 0 && (
              <div className="text-center py-16">
                <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No artists found</h3>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
