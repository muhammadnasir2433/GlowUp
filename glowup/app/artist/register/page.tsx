'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Upload, Camera, MapPin, Phone, Mail, DollarSign, Clock, CheckCircle } from 'lucide-react'

export default function ArtistRegister() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    services: [] as string[],
    prices: {} as Record<string, string>,
    bio: '',
    experience: '',
    portfolio: [] as File[],
  })

  const services = [
    'Bridal Makeup',
    'Party Makeup',
    'Casual Makeup',
    'Mehndi',
    'Hair Styling',
    'Skincare',
    'Nail Art',
    'Eyebrow Threading',
    'Facial',
    'Waxing',
  ]

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit form logic here
    console.log('Form submitted:', formData)
    alert('Registration submitted successfully! We will review your application.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join as a <span className="gradient-text">Beauty Artist</span>
          </h1>
          <p className="text-lg text-gray-600">
            Start earning on your own terms. Set your schedule, your prices, your way.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= s ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > s ? <CheckCircle className="w-6 h-6" /> : s}
                </div>
                {s < 3 && (
                  <div className={`w-20 md:w-32 h-1 mx-2 ${
                    step > s ? 'bg-rose-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="card p-8 md:p-12">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="+92 300 1234567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Karachi, Lahore, etc."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="e.g., 3"
                    min="0"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    About You / Bio *
                  </label>
                  <textarea
                    required
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Tell us about your experience, specialties, and what makes you unique..."
                  />
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-primary"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Services & Pricing */}
          {step === 2 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Services & Pricing</h2>
              <p className="text-gray-600 mb-6">Select the services you offer and set your prices</p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {services.map((service) => (
                  <div
                    key={service}
                    onClick={() => handleServiceToggle(service)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      formData.services.includes(service)
                        ? 'border-rose-500 bg-rose-50'
                        : 'border-gray-200 hover:border-rose-300'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{service}</span>
                      {formData.services.includes(service) && (
                        <CheckCircle className="w-5 h-5 text-rose-500" />
                      )}
                    </div>
                    {formData.services.includes(service) && (
                      <div className="mt-3">
                        <label className="text-sm text-gray-600 mb-1 block">Price (PKR)</label>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-gray-500" />
                          <input
                            type="number"
                            placeholder="0"
                            value={formData.prices[service] || ''}
                            onChange={(e) => setFormData({
                              ...formData,
                              prices: { ...formData.prices, [service]: e.target.value }
                            })}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="btn-primary"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Portfolio Upload */}
          {step === 3 && (
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Upload Portfolio</h2>
              <p className="text-gray-600 mb-6">Showcase your best work to attract clients</p>
              
              <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center hover:border-rose-400 transition-colors cursor-pointer">
                <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">Upload Your Portfolio</p>
                <p className="text-gray-500 mb-4">Drag and drop images here, or click to browse</p>
                <p className="text-sm text-gray-400">Supports: JPG, PNG, MP4 (Max 10MB each)</p>
                <input
                  type="file"
                  multiple
                  accept="image/*,video/*"
                  className="hidden"
                  id="portfolio-upload"
                  onChange={(e) => {
                    if (e.target.files) {
                      setFormData({ ...formData, portfolio: Array.from(e.target.files) })
                    }
                  }}
                />
                <label htmlFor="portfolio-upload" className="btn-primary inline-block mt-4 cursor-pointer">
                  <Upload className="w-4 h-4 inline mr-2" />
                  Choose Files
                </label>
              </div>

              {formData.portfolio.length > 0 && (
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    {formData.portfolio.length} file(s) selected
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {formData.portfolio.map((file, index) => (
                      <div key={index} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-gray-600 text-center px-2">{file.name.slice(0, 15)}...</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Terms */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" required className="mt-1 w-5 h-5 text-rose-500 rounded" />
                  <span className="text-sm text-gray-700">
                    I agree to the <Link href="/terms" className="text-rose-600 hover:underline">Terms of Service</Link> and{' '}
                    <Link href="/privacy" className="text-rose-600 hover:underline">Privacy Policy</Link>. I confirm that all information provided is accurate.
                  </span>
                </label>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="btn-secondary"
                >
                  Back
                </button>
                <button type="submit" className="btn-primary">
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Benefits */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Earn More</h3>
            <p className="text-gray-600 text-sm">Set your own prices and keep 85% of earnings</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
            <p className="text-gray-600 text-sm">Work when you want, where you want</p>
          </div>
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Growing Community</h3>
            <p className="text-gray-600 text-sm">Join 500+ artists already on GlowUp</p>
          </div>
        </div>
      </div>
    </div>
  )
}
