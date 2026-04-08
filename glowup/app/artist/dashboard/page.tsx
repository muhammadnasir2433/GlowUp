'use client'

import { useState } from 'react'
import { Calendar, DollarSign, Clock, Star, Users, TrendingUp, Check, X, MapPin } from 'lucide-react'

// Mock data
const mockBookings = [
  { id: 1, client: 'Ayesha Khan', service: 'Bridal Makeup', date: '2026-04-15', time: '10:00 AM', status: 'confirmed', price: 25000 },
  { id: 2, client: 'Sara Ahmed', service: 'Party Makeup', date: '2026-04-16', time: '2:00 PM', status: 'pending', price: 8000 },
  { id: 3, client: 'Fatima Ali', service: 'Casual Makeup', date: '2026-04-17', time: '11:00 AM', status: 'completed', price: 5000 },
  { id: 4, client: 'Zainab Hassan', service: 'Mehndi', date: '2026-04-18', time: '3:00 PM', status: 'confirmed', price: 12000 },
]

const mockEarnings = {
  today: 8000,
  thisWeek: 35000,
  thisMonth: 125000,
  total: 450000,
}

export default function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState('bookings')
  const [availability, setAvailability] = useState({
    monday: { enabled: true, start: '09:00', end: '18:00' },
    tuesday: { enabled: true, start: '09:00', end: '18:00' },
    wednesday: { enabled: true, start: '09:00', end: '18:00' },
    thursday: { enabled: true, start: '09:00', end: '18:00' },
    friday: { enabled: true, start: '09:00', end: '18:00' },
    saturday: { enabled: true, start: '10:00', end: '16:00' },
    sunday: { enabled: false, start: '10:00', end: '16:00' },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-soft">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-gray-900">Artist Dashboard</h1>
              <p className="text-gray-600">Welcome back, Ayesha! 👋</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="w-8 h-8 text-green-600" />
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">Today's Earnings</p>
            <p className="text-2xl font-bold text-gray-900">PKR {mockEarnings.today.toLocaleString()}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-blue-600" />
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-sm text-gray-600 mb-1">This Week</p>
            <p className="text-2xl font-bold text-gray-900">PKR {mockEarnings.thisWeek.toLocaleString()}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-600" />
              <Star className="w-5 h-5 text-gold-400 fill-current" />
            </div>
            <p className="text-sm text-gray-600 mb-1">This Month</p>
            <p className="text-2xl font-bold text-gray-900">PKR {mockEarnings.thisMonth.toLocaleString()}</p>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <Star className="w-8 h-8 text-gold-500 fill-current" />
              <span className="text-sm font-semibold text-gold-600">4.9</span>
            </div>
            <p className="text-sm text-gray-600 mb-1">Total Earnings</p>
            <p className="text-2xl font-bold text-gray-900">PKR {mockEarnings.total.toLocaleString()}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-soft mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex gap-8 px-6">
              {['bookings', 'availability', 'earnings'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 font-medium capitalize border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-rose-500 text-rose-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Bookings Tab */}
            {activeTab === 'bookings' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Bookings</h2>
                <div className="space-y-4">
                  {mockBookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-soft transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900 text-lg">{booking.client}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                              booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-600 mb-2">{booking.service}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {booking.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {booking.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              Client's Location
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-rose-600">PKR {booking.price.toLocaleString()}</p>
                          {booking.status === 'pending' && (
                            <div className="flex gap-2 mt-2">
                              <button className="p-2 bg-green-100 hover:bg-green-200 rounded-lg transition-colors">
                                <Check className="w-5 h-5 text-green-600" />
                              </button>
                              <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg transition-colors">
                                <X className="w-5 h-5 text-red-600" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Availability Tab */}
            {activeTab === 'availability' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Manage Availability</h2>
                <div className="space-y-4">
                  {Object.entries(availability).map(([day, schedule]) => (
                    <div key={day} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                      <label className="flex items-center gap-3 flex-1">
                        <input
                          type="checkbox"
                          checked={schedule.enabled}
                          onChange={(e) => setAvailability({
                            ...availability,
                            [day]: { ...schedule, enabled: e.target.checked }
                          })}
                          className="w-5 h-5 text-rose-500 rounded"
                        />
                        <span className="font-medium capitalize text-gray-900">{day}</span>
                      </label>
                      {schedule.enabled && (
                        <div className="flex items-center gap-2">
                          <input
                            type="time"
                            value={schedule.start}
                            onChange={(e) => setAvailability({
                              ...availability,
                              [day]: { ...schedule, start: e.target.value }
                            })}
                            className="px-3 py-2 border border-gray-300 rounded-lg"
                          />
                          <span className="text-gray-500">to</span>
                          <input
                            type="time"
                            value={schedule.end}
                            onChange={(e) => setAvailability({
                              ...availability,
                              [day]: { ...schedule, end: e.target.value }
                            })}
                            className="px-3 py-2 border border-gray-300 rounded-lg"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <button className="btn-primary mt-6">Save Availability</button>
              </div>
            )}

            {/* Earnings Tab */}
            {activeTab === 'earnings' && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">Earnings Overview</h2>
                <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-8 text-white mb-8">
                  <p className="text-rose-100 mb-2">Total Lifetime Earnings</p>
                  <p className="text-5xl font-bold mb-4">PKR {mockEarnings.total.toLocaleString()}</p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-sm text-rose-100">Today</p>
                      <p className="text-xl font-bold">PKR {mockEarnings.today.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-rose-100">This Week</p>
                      <p className="text-xl font-bold">PKR {mockEarnings.thisWeek.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-rose-100">This Month</p>
                      <p className="text-xl font-bold">PKR {mockEarnings.thisMonth.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Recent Transactions</h3>
                  <div className="space-y-3">
                    {mockBookings.filter(b => b.status === 'completed').map((booking) => (
                      <div key={booking.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div>
                          <p className="font-medium text-gray-900">{booking.service}</p>
                          <p className="text-sm text-gray-600">{booking.client} • {booking.date}</p>
                        </div>
                        <p className="font-bold text-green-600">+PKR {booking.price.toLocaleString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
