import Link from 'next/link'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Sparkles className="w-16 h-16 mx-auto mb-6 opacity-50" />
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to GlowUp?
          </h2>
          
          <p className="text-xl md:text-2xl text-rose-100 mb-12 max-w-2xl mx-auto">
            Join thousands of happy customers who discovered the joy of professional beauty services at home
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-rose-50 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Book an Artist
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/artist/register"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2"
            >
              Join as Artist
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-8 text-rose-100">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified Artists
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Secure Booking
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Satisfaction Guaranteed
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
