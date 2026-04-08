'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Message sent! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Have questions? We are here to help you with anything you need
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="card p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WhatsApp Support</h3>
              <p className="text-gray-600 mb-4">Chat with us for quick responses</p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Chat Now
              </a>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-2">Mon-Sat, 9AM-8PM</p>
              <a href="tel:+923001234567" className="text-rose-600 font-semibold hover:underline">
                +92 300 1234567
              </a>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-2">We reply within 24 hours</p>
              <a href="mailto:hello@glowup.pk" className="text-rose-600 font-semibold hover:underline">
                hello@glowup.pk
              </a>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Beauty Avenue<br />
                Karachi, Pakistan
              </p>
            </div>

            <div className="card p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Working Hours</h3>
              <div className="space-y-1 text-gray-600">
                <p>Mon-Sat: 9:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="john@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="artist">Become an Artist</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="btn-primary inline-flex items-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: 'How do I book a beauty artist?',
                    answer: 'Simply browse our artists, select your preferred service, date, and time, then confirm your booking. Payment is made after the service is completed.',
                  },
                  {
                    question: 'Are the artists verified?',
                    answer: 'Yes! All artists on our platform go through a thorough verification process including identity verification and portfolio review.',
                  },
                  {
                    question: 'What if I am not satisfied with the service?',
                    answer: 'We have a satisfaction guarantee. If you are not happy with the service, contact us within 24 hours and we will make it right.',
                  },
                  {
                    question: 'How can I become a GlowUp artist?',
                    answer: 'Click on "Join as Artist" and fill out the registration form. Our team will review your application and get back to you within 48 hours.',
                  },
                  {
                    question: 'What payment methods do you accept?',
                    answer: 'Currently, we accept Cash on Delivery (COD). We are working on integrating JazzCash, EasyPaisa, and card payments soon.',
                  },
                ].map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="card p-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="font-semibold text-gray-900 pr-4">{question}</h3>
        <svg
          className={`w-6 h-6 text-rose-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
      )}
    </div>
  )
}
