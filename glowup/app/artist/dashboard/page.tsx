'use client'

import { useState } from 'react'
import { 
  Calendar, DollarSign, Clock, Star, Users, TrendingUp, Check, X, MapPin,
  LayoutDashboard, CalendarDays, Wallet, Image, MessageSquare, Settings,
  ChevronRight, Bell, Search, Filter, ArrowUpRight, ArrowDownRight
} from 'lucide-react'

// Mock data
const mockBookings = [
  { id: 1, client: 'Ayesha Khan', service: 'Bridal Makeup', date: '2026-04-15', time: '10:00 AM', status: 'confirmed', price: 25000, location: 'Clifton, Karachi' },
  { id: 2, client: 'Sara Ahmed', service: 'Party Makeup', date: '2026-04-16', time: '2:00 PM', status: 'pending', price: 8000, location: 'Gulshan, Karachi' },
  { id: 3, client: 'Fatima Ali', service: 'Casual Makeup', date: '2026-04-17', time: '11:00 AM', status: 'completed', price: 5000, location: 'DHA, Karachi' },
  { id: 4, client: 'Zainab Hassan', service: 'Mehndi', date: '2026-04-18', time: '3:00 PM', status: 'confirmed', price: 12000, location: 'PECHS, Karachi' },
  { id: 5, client: 'Hira Malik', service: 'Hair Styling', date: '2026-04-19', time: '1:00 PM', status: 'pending', price: 6000, location: 'North Nazimabad' },
]

const mockEarnings = {
  today: 8000,
  thisWeek: 35000,
  thisMonth: 125000,
  total: 450000,
  growth: 12.5,
}

const weeklyData = [
  { day: 'Mon', earnings: 12000, bookings: 3 },
  { day: 'Tue', earnings: 8000, bookings: 2 },
  { day: 'Wed', earnings: 15000, bookings: 4 },
  { day: 'Thu', earnings: 10000, bookings: 3 },
  { day: 'Fri', earnings: 18000, bookings: 5 },
  { day: 'Sat', earnings: 22000, bookings: 6 },
  { day: 'Sun', earnings: 5000, bookings: 1 },
]

const menuItems = [
  { id: 'overview', icon: LayoutDashboard, label: 'Overview' },
  { id: 'bookings', icon: CalendarDays, label: 'Bookings' },
  { id: 'earnings', icon: Wallet, label: 'Earnings' },
  { id: 'portfolio', icon: Image, label: 'Portfolio' },
  { id: 'reviews', icon: MessageSquare, label: 'Reviews' },
  { id: 'availability', icon: Clock, label: 'Availability' },
  { id: 'settings', icon: Settings, label: 'Settings' },
]

export default function ArtistDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50/20 to-purple-50/20">
      {/* Sidebar */}
      <aside 
        className={`fixed left-0 top-0 h-full bg-white shadow-glass z-40 transition-all duration-300 border-r border-pink-100 ${
          sidebarOpen ? 'w-72' : 'w-24'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <Star className="w-6 h-6 text-white fill-current" />
            </div>
            {sidebarOpen && (
              <div className="animate-fade-in-up">
                <h1 className="font-display text-xl font-bold gradient-text">GlowUp</h1>
                <p className="text-xs text-gray-500">Artist Portal</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                activeTab === id
                  ? 'bg-gradient-primary text-white shadow-glow'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && (
                <span className="font-medium">{label}</span>
              )}
              {sidebarOpen && activeTab === id && (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ))}
        </nav>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-4 top-8 w-8 h-8 bg-white rounded-full shadow-medium flex items-center justify-center border border-pink-200 hover:scale-110 transition-transform"
        >
          <ChevronRight className={`w-4 h-4 text-pink transition-transform ${sidebarOpen ? 'rotate-180' : ''}`} />
        </button>
      </aside>

      {/* Main Content */}
      <main className={`transition-all duration-300 ${sidebarOpen ? 'ml-72' : 'ml-24'}`}>
        {/* Top Bar */}
        <header className="sticky top-0 z-30 glass-card border-b border-pink-100 rounded-none">
          <div className="flex items-center justify-between px-8 py-5">
            <div>
              <h2 className="font-display text-2xl font-bold text-dark capitalize">{activeTab}</h2>
              <p className="text-gray-600 text-sm">Welcome back, Ayesha! 👋</p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="hidden md:flex items-center gap-3 glass-card px-4 py-2.5 rounded-xl">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none outline-none text-sm w-48"
                />
              </div>

              {/* Notifications */}
              <button className="relative w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:shadow-glow transition-all">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink rounded-full text-white text-xs flex items-center justify-center font-bold">3</span>
              </button>

              {/* Profile */}
              <div className="flex items-center gap-3 glass-card px-4 py-2.5 rounded-xl">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg"></div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-dark">Ayesha Khan</p>
                  <p className="text-xs text-gray-500">Pro Artist</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    title: "Today's Earnings", 
                    value: mockEarnings.today, 
                    icon: DollarSign, 
                    color: 'from-green-500 to-green-600',
                    growth: '+15%',
                    trend: 'up'
                  },
                  { 
                    title: 'This Week', 
                    value: mockEarnings.thisWeek, 
                    icon: Calendar, 
                    color: 'from-blue-500 to-blue-600',
                    growth: '+8%',
                    trend: 'up'
                  },
                  { 
                    title: 'This Month', 
                    value: mockEarnings.thisMonth, 
                    icon: TrendingUp, 
                    color: 'from-purple-500 to-purple-600',
                    growth: '+12.5%',
                    trend: 'up'
                  },
                  { 
                    title: 'Total Bookings', 
                    value: 156, 
                    icon: Users, 
                    color: 'from-pink-500 to-pink-600',
                    growth: '+5%',
                    trend: 'up',
                    isBookings: true
                  },
                ].map(({ title, value, icon: Icon, color, growth, trend, isBookings }) => (
                  <div key={title} className="card-premium group hover:shadow-glow transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                        trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                        {growth}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{title}</p>
                    <p className="text-3xl font-display font-bold text-dark">
                      {isBookings ? value : `PKR ${value.toLocaleString()}`}
                    </p>
                  </div>
                ))}
              </div>

              {/* Charts Section */}
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Earnings Chart */}
                <div className="lg:col-span-2 card-premium">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="font-display text-xl font-bold text-dark">Earnings Overview</h3>
                      <p className="text-gray-600 text-sm">Last 7 days performance</p>
                    </div>
                    <div className="flex items-center gap-2 glass-card px-4 py-2 rounded-xl">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">This Week</span>
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-64 flex items-end justify-around gap-3 px-4">
                    {weeklyData.map((data, index) => {
                      const height = (data.earnings / 25000) * 100
                      return (
                        <div key={data.day} className="flex-1 flex flex-col items-center gap-2">
                          <div className="relative w-full group">
                            {/* Tooltip */}
                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-dark text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              PKR {data.earnings.toLocaleString()}
                              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-dark rotate-45"></div>
                            </div>
                            {/* Bar */}
                            <div
                              className="w-full bg-gradient-to-t from-pink-500 to-pink-400 rounded-t-xl transition-all duration-500 hover:from-pink-600 hover:to-pink-500 cursor-pointer"
                              style={{ height: `${height}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-gray-600">{data.day}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="card-premium">
                  <h3 className="font-display text-xl font-bold text-dark mb-6">Quick Stats</h3>
                  <div className="space-y-6">
                    {[
                      { label: 'Completion Rate', value: 98, color: 'from-green-500 to-green-400' },
                      { label: 'Customer Satisfaction', value: 95, color: 'from-pink-500 to-pink-400' },
                      { label: 'Response Time', value: 88, color: 'from-purple-500 to-purple-400' },
                      { label: 'Repeat Customers', value: 72, color: 'from-blue-500 to-blue-400' },
                    ].map(({ label, value, color }) => (
                      <div key={label}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-600">{label}</span>
                          <span className="text-sm font-bold text-dark">{value}%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000`}
                            style={{ width: `${value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Rating */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Overall Rating</p>
                        <div className="flex items-center gap-2">
                          <span className="text-4xl font-display font-bold gradient-text">4.9</span>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-5 h-5 text-gold fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Total Reviews</p>
                        <p className="text-2xl font-bold text-dark">234</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Bookings */}
              <div className="card-premium">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-xl font-bold text-dark">Recent Bookings</h3>
                  <button 
                    onClick={() => setActiveTab('bookings')}
                    className="text-pink font-semibold text-sm hover:underline flex items-center gap-2"
                  >
                    View All
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {mockBookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex flex-col md:flex-row md:items-center justify-between p-5 bg-gray-50 rounded-2xl hover:bg-pink-50 transition-colors group">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-glow">
                          {booking.client.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-semibold text-dark text-lg">{booking.client}</h4>
                          <p className="text-gray-600 text-sm">{booking.service}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {booking.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {booking.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {booking.location}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:justify-end gap-4">
                        <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                          booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                          booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                        <p className="text-xl font-bold gradient-text">PKR {booking.price.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === 'bookings' && (
            <div className="card-premium">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-display text-xl font-bold text-dark">All Bookings</h3>
                <div className="flex items-center gap-3">
                  <div className="glass-card px-4 py-2.5 rounded-xl flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <select className="bg-transparent border-none outline-none text-sm font-medium">
                      <option>All Status</option>
                      <option>Confirmed</option>
                      <option>Pending</option>
                      <option>Completed</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {mockBookings.map((booking) => (
                  <div key={booking.id} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-gray-50 rounded-2xl hover:bg-pink-50 transition-colors group">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-glow">
                        {booking.client.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark text-lg">{booking.client}</h4>
                        <p className="text-gray-600">{booking.service}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {booking.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {booking.time}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-6">
                      <span className={`px-4 py-2 rounded-full text-xs font-semibold ${
                        booking.status === 'confirmed' ? 'bg-green-100 text-green-700' :
                        booking.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                        booking.status === 'completed' ? 'bg-blue-100 text-blue-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                      <p className="text-2xl font-bold gradient-text">PKR {booking.price.toLocaleString()}</p>
                      {booking.status === 'pending' && (
                        <div className="flex gap-2">
                          <button className="p-3 bg-green-100 hover:bg-green-200 rounded-xl transition-colors">
                            <Check className="w-5 h-5 text-green-600" />
                          </button>
                          <button className="p-3 bg-red-100 hover:bg-red-200 rounded-xl transition-colors">
                            <X className="w-5 h-5 text-red-600" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Earnings Tab */}
          {activeTab === 'earnings' && (
            <div className="space-y-8">
              {/* Total Earnings Card */}
              <div className="bg-gradient-primary rounded-3xl p-10 text-white shadow-glow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="relative z-10">
                  <p className="text-white/80 mb-2 text-lg">Total Lifetime Earnings</p>
                  <p className="text-6xl font-display font-extrabold mb-6">PKR {mockEarnings.total.toLocaleString()}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/20">
                    <div>
                      <p className="text-sm text-white/70 mb-1">Today</p>
                      <p className="text-2xl font-bold">PKR {mockEarnings.today.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">This Week</p>
                      <p className="text-2xl font-bold">PKR {mockEarnings.thisWeek.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">This Month</p>
                      <p className="text-2xl font-bold">PKR {mockEarnings.thisMonth.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Growth</p>
                      <p className="text-2xl font-bold flex items-center gap-2">
                        +{mockEarnings.growth}%
                        <ArrowUpRight className="w-5 h-5" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transactions */}
              <div className="card-premium">
                <h3 className="font-display text-xl font-bold text-dark mb-6">Recent Transactions</h3>
                <div className="space-y-4">
                  {mockBookings.filter(b => b.status === 'completed' || b.status === 'confirmed').map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0 hover:bg-pink-50 px-4 -mx-4 rounded-xl transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white font-bold shadow-glow">
                          {booking.client.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-dark">{booking.service}</p>
                          <p className="text-sm text-gray-600">{booking.client} • {booking.date}</p>
                        </div>
                      </div>
                      <p className="text-xl font-bold text-green-600">+PKR {booking.price.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs Placeholder */}
          {!['overview', 'bookings', 'earnings'].includes(activeTab) && (
            <div className="card-premium text-center py-20">
              <div className="w-24 h-24 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow animate-float">
                {menuItems.find(item => item.id === activeTab)?.icon && (
                  <div className="text-white">
                    {(() => {
                      const Icon = menuItems.find(item => item.id === activeTab)?.icon
                      return Icon ? <Icon className="w-12 h-12" /> : null
                    })()}
                  </div>
                )}
              </div>
              <h3 className="font-display text-2xl font-bold text-dark mb-3 capitalize">{activeTab}</h3>
              <p className="text-gray-600">This section is under development. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
