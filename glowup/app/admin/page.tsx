'use client'

import { useState } from 'react'
import { Users, Calendar, DollarSign, TrendingUp, Check, X, Eye, Shield, BarChart3, UserCheck } from 'lucide-react'

// Mock data
const mockPendingArtists = [
  { id: 1, name: 'Maria Ahmad', email: 'maria@email.com', phone: '+92 300 1234567', location: 'Karachi', services: ['Bridal Makeup', 'Party Makeup'], experience: 5, appliedDate: '2026-04-01' },
  { id: 2, name: 'Nadia Khan', email: 'nadia@email.com', phone: '+92 301 2345678', location: 'Lahore', services: ['Mehndi', 'Nail Art'], experience: 3, appliedDate: '2026-04-02' },
  { id: 3, name: 'Sanaullah Malik', email: 'sana@email.com', phone: '+92 302 3456789', location: 'Islamabad', services: ['Hair Styling'], experience: 7, appliedDate: '2026-04-03' },
]

const mockBookings = [
  { id: 101, customer: 'Ayesha Siddiqui', artist: 'Ayesha Makeup Artist', service: 'Bridal Makeup', date: '2026-04-15', status: 'confirmed', amount: 25000 },
  { id: 102, customer: 'Sara Ali', artist: 'Sara Beauty Studio', service: 'Party Makeup', date: '2026-04-16', status: 'pending', amount: 8000 },
  { id: 103, customer: 'Fatima Noor', artist: 'Fatima Glam Artist', service: 'Skincare', date: '2026-04-17', status: 'completed', amount: 7000 },
  { id: 104, customer: 'Zainab Raza', artist: 'Zainab Mehndi Artist', service: 'Mehndi', date: '2026-04-18', status: 'cancelled', amount: 12000 },
]

const mockAnalytics = {
  totalUsers: 10234,
  totalArtists: 523,
  totalBookings: 15678,
  totalRevenue: 12500000,
  commission: 1875000,
  growth: {
    users: 12.5,
    artists: 8.3,
    bookings: 15.2,
    revenue: 18.7,
  }
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-rose-600" />
              <div>
                <h1 className="font-display text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-gray-600">Manage your beauty services platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-blue-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Users</p>
            <p className="text-2xl font-bold text-gray-900">{mockAnalytics.totalUsers.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">+{mockAnalytics.growth.users}%</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <UserCheck className="w-8 h-8 text-purple-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Artists</p>
            <p className="text-2xl font-bold text-gray-900">{mockAnalytics.totalArtists.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">+{mockAnalytics.growth.artists}%</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-rose-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Bookings</p>
            <p className="text-2xl font-bold text-gray-900">{mockAnalytics.totalBookings.toLocaleString()}</p>
            <p className="text-sm text-green-600 mt-1">+{mockAnalytics.growth.bookings}%</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900">PKR {(mockAnalytics.totalRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-green-600 mt-1">+{mockAnalytics.growth.revenue}%</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <BarChart3 className="w-8 h-8 text-gold-500" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Commission Earned</p>
            <p className="text-2xl font-bold text-gray-900">PKR {(mockAnalytics.commission / 1000000).toFixed(1)}M</p>
            <p className="text-sm text-green-600 mt-1">15% rate</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-soft mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              {['overview', 'pending-artists', 'bookings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-medium capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-rose-500 text-rose-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab === 'pending-artists' ? 'Pending Artists' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Platform Analytics</h2>
                
                {/* Chart Placeholder */}
                <div className="bg-gradient-to-br from-rose-50 to-gold-50 rounded-2xl p-8 mb-8">
                  <h3 className="font-bold text-gray-900 mb-4">Monthly Growth</h3>
                  <div className="h-64 flex items-end justify-around gap-2">
                    {[40, 55, 45, 70, 65, 80, 75, 90, 85, 95, 88, 100].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-gradient-to-t from-rose-500 to-rose-400 rounded-t-lg transition-all hover:from-rose-600 hover:to-rose-500"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-600 mt-2">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Services */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Top Services</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Bridal Makeup', bookings: 4523, revenue: 113075000 },
                        { name: 'Party Makeup', bookings: 3891, revenue: 31128000 },
                        { name: 'Mehndi', bookings: 2456, revenue: 29472000 },
                        { name: 'Hair Styling', bookings: 2134, revenue: 12804000 },
                        { name: 'Skincare', bookings: 1876, revenue: 13132000 },
                      ].map((service, index) => (
                        <div key={service.name} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center text-sm font-bold text-rose-600">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{service.name}</p>
                              <p className="text-sm text-gray-600">{service.bookings.toLocaleString()} bookings</p>
                            </div>
                          </div>
                          <p className="font-bold text-gray-900">PKR {(service.revenue / 1000000).toFixed(1)}M</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="card p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Top Cities</h3>
                    <div className="space-y-4">
                      {[
                        { city: 'Karachi', artists: 156, bookings: 4523 },
                        { city: 'Lahore', artists: 134, bookings: 3891 },
                        { city: 'Islamabad', artists: 89, bookings: 2456 },
                        { city: 'Rawalpindi', artists: 67, bookings: 1876 },
                        { city: 'Faisalabad', artists: 45, bookings: 1234 },
                      ].map((city, index) => (
                        <div key={city.city} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gold-100 rounded-full flex items-center justify-center text-sm font-bold text-gold-600">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium text-gray-900">{city.city}</p>
                              <p className="text-sm text-gray-600">{city.artists} artists</p>
                            </div>
                          </div>
                          <p className="font-bold text-gray-900">{city.bookings.toLocaleString()} bookings</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Pending Artists Tab */}
            {activeTab === 'pending-artists' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Pending Artist Applications</h2>
                <div className="space-y-4">
                  {mockPendingArtists.map((artist) => (
                    <div key={artist.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-soft transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900 text-lg">{artist.name}</h3>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium">
                              Pending
                            </span>
                          </div>
                          <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                            <p>📧 {artist.email}</p>
                            <p>📱 {artist.phone}</p>
                            <p>📍 {artist.location}</p>
                            <p>⏱️ {artist.experience} years experience</p>
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {artist.services.map((service) => (
                              <span key={service} className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-xs font-medium">
                                {service}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-2">Applied: {artist.appliedDate}</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="p-3 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
                            <Check className="w-5 h-5 text-green-600" />
                          </button>
                          <button className="p-3 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
                            <X className="w-5 h-5 text-red-600" />
                          </button>
                          <button className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
                            <Eye className="w-5 h-5 text-blue-600" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Bookings</h2>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Booking ID</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Customer</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Artist</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Service</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockBookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium">#{booking.id}</td>
                          <td className="py-3 px-4 text-sm">{booking.customer}</td>
                          <td className="py-3 px-4 text-sm">{booking.artist}</td>
                          <td className="py-3 px-4 text-sm">{booking.service}</td>
                          <td className="py-3 px-4 text-sm">{booking.date}</td>
                          <td className="py-3 px-4 text-sm font-semibold">PKR {booking.amount.toLocaleString()}</td>
                          <td className="py-3 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              booking.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
