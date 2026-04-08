'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, MapPin, DollarSign, CreditCard, Banknote, CheckCircle, ArrowLeft } from 'lucide-react'

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
    { id: 'bridal', name: 'Bridal Makeup', price: 25000, duration: '3-4 hours' },
    { id: 'party', name: 'Party Makeup', price: 8000, duration: '1-2 hours' },
    { id: 'casual', name: 'Casual Makeup', price: 5000, duration: '1 hour' },
    { id: 'mehndi', name: 'Mehndi', price: 12000, duration: '2-3 hours' },
    { id: 'hair', name: 'Hair Styling', price: 6000, duration: '1-2 hours' },
    { id: 'skincare', name: 'Skincare Treatment', price: 7000, duration: '1-2 hours' },
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
    }
  })

  const selectedServiceData = services.find(s => s.id === selectedService)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Submit booking
    console.log('Booking submitted:', { selectedDate, selectedTime, selectedService, paymentMethod, customerInfo })
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Back Button */}
        {step < 4 && (
          <Link href="/artists" className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-600 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Artists
          </Link>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {step === 4 ? 'Booking Confirmed!' : 'Book Your Appointment'}
          </h1>
          <p className="text-lg text-gray-600">
            {step === 4 ? 'Your beauty artist will arrive at your doorstep' : 'Select your preferred date, time, and service'}
          </p>
        </div>

        {/* Progress Steps */}
        {step < 4 && (
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
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              {/* Step 1: Service Selection */}
              {step === 1 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Select Service</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        onClick={() => setSelectedService(service.id)}
                        className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                          selectedService === service.id
                            ? 'border-rose-500 bg-rose-50'
                            : 'border-gray-200 hover:border-rose-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">{service.name}</h3>
                          {selectedService === service.id && (
                            <CheckCircle className="w-5 h-5 text-rose-500" />
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            PKR {service.price.toLocaleString()}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-8">
                    <button
                      onClick={() => setStep(2)}
                      disabled={!selectedService}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Date & Time */}
              {step === 2 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Select Date & Time</h2>
                  
                  {/* Date Selection */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Select Date
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {dates.map((date) => (
                        <div
                          key={date.value}
                          onClick={() => setSelectedDate(date.value)}
                          className={`p-4 rounded-xl border-2 cursor-pointer text-center transition-all ${
                            selectedDate === date.value
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-gray-200 hover:border-rose-300'
                          }`}
                        >
                          <p className="text-sm text-gray-600">{date.label.split(',')[0]}</p>
                          <p className="font-bold text-gray-900">{date.label.split(',')[1]}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Select Time
                    </label>
                    <div className="grid grid-cols-3 md:grid-cols-3 gap-3">
                      {timeSlots.map((time) => (
                        <div
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-xl border-2 cursor-pointer text-center transition-all ${
                            selectedTime === time
                              ? 'border-rose-500 bg-rose-50 text-rose-600 font-medium'
                              : 'border-gray-200 hover:border-rose-300'
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button onClick={() => setStep(1)} className="btn-secondary">
                      Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      disabled={!selectedDate || !selectedTime}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Customer Info & Payment */}
              {step === 3 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Your Details & Payment</h2>
                  
                  <div className="space-y-6">
                    {/* Customer Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={customerInfo.name}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={customerInfo.phone}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          placeholder="+92 300 1234567"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          Your Address *
                        </label>
                        <textarea
                          required
                          value={customerInfo.address}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                          rows={3}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          placeholder="Complete address with landmarks..."
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests (Optional)</label>
                        <textarea
                          value={customerInfo.notes}
                          onChange={(e) => setCustomerInfo({ ...customerInfo, notes: e.target.value })}
                          rows={2}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                          placeholder="Any specific requirements..."
                        />
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Payment Method</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div
                          onClick={() => setPaymentMethod('cod')}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === 'cod'
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-gray-200 hover:border-rose-300'
                          }`}
                        >
                          <Banknote className="w-8 h-8 text-green-600 mb-2" />
                          <p className="font-medium text-gray-900">Cash on Delivery</p>
                          <p className="text-sm text-gray-600">Pay after service</p>
                        </div>
                        <div
                          onClick={() => setPaymentMethod('jazzcash')}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === 'jazzcash'
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-gray-200 hover:border-rose-300'
                          }`}
                        >
                          <CreditCard className="w-8 h-8 text-red-600 mb-2" />
                          <p className="font-medium text-gray-900">JazzCash</p>
                          <p className="text-sm text-gray-600">Coming soon</p>
                        </div>
                        <div
                          onClick={() => setPaymentMethod('easypaisa')}
                          className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            paymentMethod === 'easypaisa'
                              ? 'border-rose-500 bg-rose-50'
                              : 'border-gray-200 hover:border-rose-300'
                          }`}
                        >
                          <CreditCard className="w-8 h-8 text-green-600 mb-2" />
                          <p className="font-medium text-gray-900">EasyPaisa</p>
                          <p className="text-sm text-gray-600">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <button onClick={() => setStep(2)} className="btn-secondary">
                      Back
                    </button>
                    <button
                      onClick={handleSubmit}
                      disabled={!customerInfo.name || !customerInfo.phone || !customerInfo.address}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {step === 4 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Your booking has been confirmed. You will receive a confirmation call shortly.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 max-w-md mx-auto mb-8">
                    <h3 className="font-bold text-gray-900 mb-4">Booking Summary</h3>
                    <div className="space-y-3 text-left">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{selectedServiceData?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{selectedDate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Payment:</span>
                        <span className="font-medium uppercase">{paymentMethod}</span>
                      </div>
                      <div className="flex justify-between pt-3 border-t">
                        <span className="font-bold">Total:</span>
                        <span className="font-bold text-rose-600">PKR {selectedServiceData?.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
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
          {step < 4 && selectedService && (
            <div className="lg:col-span-1">
              <div className="card p-6 sticky top-24">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Booking Summary</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Service</p>
                    <p className="font-semibold text-gray-900">{selectedServiceData?.name}</p>
                  </div>
                  
                  {selectedDate && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Date</p>
                      <p className="font-semibold text-gray-900">{selectedDate}</p>
                    </div>
                  )}
                  
                  {selectedTime && (
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Time</p>
                      <p className="font-semibold text-gray-900">{selectedTime}</p>
                    </div>
                  )}

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-rose-600">
                        PKR {selectedServiceData?.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Duration: {selectedServiceData?.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
