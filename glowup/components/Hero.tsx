import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-gold-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-gold-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-soft mb-6">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-sm font-medium text-gray-700">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Personal
              <span className="block gradient-text mt-2">Beauty Artist</span>
              <span className="block">at Home</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Connect with professional makeup and beauty artists in your area. 
              Book services that come to you – convenient, reliable, and stunning results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/book" className="btn-primary text-lg px-8 py-4 inline-flex items-center justify-center gap-2">
                Book an Artist
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/artist/register" className="btn-secondary text-lg px-8 py-4">
                Join as Artist
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="font-display text-3xl font-bold text-rose-600">500+</div>
                <div className="text-gray-600 text-sm">Verified Artists</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-rose-600">10K+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-rose-600">4.9</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[600px]">
              {/* Main Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-300 to-rose-400 rounded-3xl shadow-medium overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Sparkles className="w-24 h-24 mx-auto mb-4 opacity-50" />
                    <p className="text-xl font-medium opacity-75">Beauty Artist at Work</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Card 1 */}
              <div className="absolute -left-8 top-1/4 bg-white p-4 rounded-2xl shadow-medium animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Booking Confirmed!</p>
                    <p className="text-sm text-gray-600">Artist arriving in 30 min</p>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-white p-4 rounded-2xl shadow-medium animate-float animation-delay-2000">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-rose-300 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gold-300 rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-rose-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-gold-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">500+ Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
