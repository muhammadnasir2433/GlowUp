'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, Clock, MapPin, DollarSign, CreditCard, Banknote, CheckCircle, 
  ArrowLeft, ArrowRight, Sparkles, Star, ChevronRight, ChevronLeft
} from 'lucide-react'

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('cod')
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  })

  const services = [
    { id: 'bridal', name: 'Bridal Makeup', price: 25000, duration: '3-4 hours', rating: 4.9, image: 'bg-gradient-to-br from-pink-400 to-pink-600' },
    { id: 'party', name: 'Party Makeup', price: 8000, duration: '1-2 hours', rating: 4.8, image: 'bg-gradient-to-br from-purple-400 to-purple-600' },
    { id: 'casual', name: 'Casual Makeup', price: 5000, duration: '1 hour', rating: 4.7, image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 'mehndi', name: 'Mehndi', price: 12000, duration: '2-3 hours', rating: 4.9, image: 'bg-gradient-to-br from-green-400 to-green-600' },
    { id: 'hair', name: 'Hair Styling', price: 6000, duration: '1-2 hours', rating: 4.8, image: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { id: 'skincare', name: 'Skincare Treatment', price: 7000, duration: '1-2 hours', rating: 4.9, image: 'bg-gradient-to-br from-teal-400 to-teal-600' },
  ]

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ]

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i + 1)
    return {
      value: date.toISOString().split('T')[0],
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.getDate(),
    }
  })

  const selectedServiceData = services.find(s => s.id === selectedService)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-pink-50/20 to-purple-50/20 py-32 pb-24 lg:py-40">
      <div className="container-premium mx-auto px-6 max-w-6xl">
        {/* Back Button */}
        {step < 4 && (
          <Link href="/artists" className="inline-flex items-center gap-2 text-gray-600 hover:text-pink mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Artists</span>
          </Link>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-3xl mb-6 shadow-glow animate-float">
            {step === 4 ? (
              <CheckCircle className="w-10 h-10 text-white" />
            ) : (
              <Calendar className="w-10 h-10 text-white" />
            )}
          </div>
          <h1 className="text-section-sm text-dark mb-4">
            {step === 4 ? 'Booking Confirmed!' : 'Book Your Appointment'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {step === 4 
              ? 'Your beauty artist will arrive at your doorstep' 
              : 'Select your preferred date, time, and service in just a few steps'}
          </p>
        </div>

        {/* Progress Steps */}
        {step < 4 && (
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-3 md:gap-4">
              {[
                { num: 1, label: 'Service' },
                { num: 2, label: 'Date & Time' },
                { num: 3, label: 'Details' },
              ].map(({ num, label }, index) => (
                <div key={num} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 ${
                      step >= num 
                        ? 'bg-gradient-primary text-white shadow-glow scale-110' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step > num ? <CheckCircle className="w-7 h-7" /> : num}
                    </div>
                    <span className={`text-xs font-semibold mt-2 ${
                      step >= num ? 'text-pink' : 'text-gray-500'
                    }`}>
                      {label}
                    </span>
                  </div>
                  {index < 2 && (
                    <div className={`w-16 md:w-24 lg:w-32 h-1.5 mx-3 md:mx-4 rounded-full transition-all duration-500 ${
                      step > num ? 'bg-gradient-primary' : 'bg-gray-200'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card-premium p-8 md:p-10">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div className="animate-fade-in-up">
                  <h2 className="font-display text-2xl font-bold text-dark mb-2">Select Service</h2>
                  <p className="text-gray-600 mb-8">Choose the service you'd like to book</p>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 group ${
                          selectedService === service.id
                            ? 'border-pink bg-pink-50 shadow-glow'
                            : 'border-gray-200 hover:border-pink-300 hover:shadow-soft'
                        }`}
                      >
                        {/* Image */}
                        <div className={`${service.image} h-24 rounded-xl mb-4 relative overflow-hidden`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">{service.name}</span>
                          </div>
                          {selectedService === service.id && (
                            <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
                              <CheckCircle className="w-5 h-5 text-pink" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Star className="w-4 h-4 text-gold fill-current" />
                              <span className="text-sm font-semibold">{service.rating}</span>
                            </div>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {service.duration}
                            </p>
                          </div>
                          <p className="text-xl font-bold gradient-text">PKR {service.price.toLocaleString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end mt-8">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedService}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center gap-3"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div className="animate-fade-in-up">
                  <h2 className="font-display text-2xl font-bold text-dark mb-2">Select Date & Time</h2>
                  <p className="text-gray-600 mb-8">Choose your preferred appointment date and time</p>
                  
                  {/* Date Selection */}
                  <div className="mb-10">
                    <label className="block text-sm font-semibold text-dark mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-pink" />
                      Select Date
                    </label>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
                      {dates.map((date) => (
                        <div
                          key={date.value}
                          onClick={() => setSelectedDate(date.value)}
                          className={`p-4 rounded-2xl cursor-pointer text-center transition-all duration-300 ${
                            selectedDate === date.value
                              ? 'bg-gradient-primary text-white shadow-glow scale-105'
                              : 'bg-gray-50 hover:bg-pink-50 border border-gray-200'
                          }`}
                        >
                          <p className={`text-xs mb-1 ${selectedDate === date.value ? 'text-white/80' : 'text-gray-500'}`}>
                            {date.day}
                          </p>
                          <p className="text-2xl font-bold">{date.date}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-semibold text-dark mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-pink" />
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <div
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-xl cursor-pointer text-center transition-all duration-300 font-medium ${
                            selectedTime === time
                              ? 'bg-gradient-primary text-white shadow-glow scale-105'
                              : 'bg-gray-50 hover:bg-pink-50 border border-gray-200 text-gray-700'
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-10">
                    <button onClick={() => setStep(1)} className="btn-secondary flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center gap-3"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Customer Info & Payment */}
              {step === 3 && (
                <div className="animate-fade-in-up">
                  <h2 className="font-display text-2xl font-bold text-dark mb-2">Your Details & Payment</h2>
                  <p className="text-gray-600 mb-8">Provide your information and choose payment method</p>
                  
                  <div className="space-y-8">
                    {/* Customer Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-3">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink transition-colors text-lg"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-dark mb-3">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink transition-colors text-lg"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-dark mb-3 flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-pink" />
                          Your Address *
                        </label>
                        <textarea
                          required
                          value={customerInfo.address}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                          rows={3}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink transition-colors text-lg resize-none"
                          placeholder="Complete address with landmarks..."
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-dark mb-3">Special Requests (Optional)</label>
                        <textarea
                          value={customerInfo.notes}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                          rows={2}
                          className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:border-pink transition-colors resize-none"
                          placeholder="Any specific requirements..."
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-semibold text-dark mb-5 text-lg">Payment Method</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { id: 'cod', name: 'Cash on Delivery', desc: 'Pay after service', icon: Banknote, color: 'text-green-600', bgColor: 'bg-green-100' },
                          { id: 'jazzcash', name: 'JazzCash', desc: 'Coming soon', icon: CreditCard, color: 'text-red-600', bgColor: 'bg-red-100' },
                          { id: 'easypaisa', name: 'EasyPaisa', desc: 'Coming soon', icon: CreditCard, color: 'text-green-600', bgColor: 'bg-green-100' },
                        ].map(({ id, name, desc, icon: Icon, color, bgColor }) => (
                          <div
                            key={id}
                            onClick={() => setPaymentMethod(id)}
                            className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                              paymentMethod === id
                                ? 'border-pink bg-pink-50 shadow-glow'
                                : 'border-gray-200 hover:border-pink-300'
                            }`}
                          >
                            <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-4`}>
                              <Icon className={`w-7 h-7 ${color}`} />
                            </div>
                            <p className="font-semibold text-dark mb-1">{name}</p>
                            <p className="text-sm text-gray-600">{desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-10">
                    <button onClick={() => setStep(2)} className="btn-secondary flex items-center gap-2">
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5" />
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="text-center py-10 animate-scale-in">
                  <div className="w-28 h-28 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-lg animate-float">
                    <CheckCircle className="w-14 h-14 text-white" />
                  </div>
                  <h2 className="font-display text-4xl font-bold text-dark mb-4">Thank You!</h2>
                  <p className="text-xl text-gray-600 mb-10 max-w-xl mx-auto">
                    Your booking has been confirmed. You will receive a confirmation call shortly.
                  </p>
                  
                  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 max-w-lg mx-auto mb-10 border border-pink-200">
                    <h3 className="font-display text-xl font-bold text-dark mb-6">Booking Summary</h3>
                    <div className="space-y-4 text-left">
                      {[
                        { label: 'Service', value: selectedServiceData?.name },
                        { label: 'Date', value: selectedDate },
                        { label: 'Time', value: selectedTime },
                        { label: 'Payment', value: paymentMethod.toUpperCase() },
                      ].map(({ label, value }) => (
                        <div key={label} className="flex justify-between items-center py-3 border-b border-pink-200 last:border-0">
                          <span className="text-gray-600">{label}</span>
                          <span className="font-semibold text-dark">{value}</span>
                        </div>
                      ))}
                      <div className="flex justify-between items-center pt-4">
                        <span className="font-bold text-lg">Total</span>
                        <span className="text-3xl font-bold gradient-text">PKR {selectedServiceData?.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/" className="btn-secondary">
                      Back to Home
                    </Link>
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Need Help? WhatsApp
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - Booking Summary */}
          {step < 4 && (
            <div className="lg:col-span-1">
              <div className="card-premium p-6 sticky top-32">
                <h3 className="font-display text-xl font-bold text-dark mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink" />
                  Booking Summary
                </h3>
                
                {selectedService ? (
                  <div className="space-y-5">
                    {/* Service */}
                    <div className="pb-5 border-b border-gray-100">
                      <p className="text-sm text-gray-500 mb-2">Service</p>
                      <p className="font-semibold text-dark text-lg">{selectedServiceData?.name}</p>
                      <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {selectedServiceData?.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-gold fill-current" />
                          {selectedServiceData?.rating}
                        </span>
                      </div>
                    </div>
                    
                    {selectedDate && (
                      <div className="pb-5 border-b border-gray-100">
                        <p className="text-sm text-gray-500 mb-2">Date</p>
                        <p className="font-semibold text-dark text-lg">{selectedDate}</p>
                      </div>
                    )}
                    
                    {selectedTime && (
                      <div className="pb-5 border-b border-gray-100">
                        <p className="text-sm text-gray-500 mb-2">Time</p>
                        <p className="font-semibold text-dark text-lg">{selectedTime}</p>
                      </div>
                    )}

                    {/* Total */}
                    <div className="pt-5 bg-gradient-to-r from-pink-50 to-purple-50 -mx-6 px-6 py-5 rounded-b-2xl">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-dark text-lg">Total</span>
                        <span className="text-3xl font-bold gradient-text">
                          PKR {selectedServiceData?.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Select a service to see summary</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
