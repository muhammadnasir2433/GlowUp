import { Search, Calendar, Sparkles } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Browse Artists Nearby',
    description: 'Search and filter through our verified beauty artists in your area. View portfolios, ratings, and reviews.',
    icon: Search,
    color: 'from-rose-400 to-rose-500',
  },
  {
    number: 2,
    title: 'Book a Service',
    description: 'Choose your preferred date, time, and service. Select an artist that matches your style and budget.',
    icon: Calendar,
    color: 'from-gold-400 to-gold-500',
  },
  {
    number: 3,
    title: 'Artist Comes Home & Beautifies',
    description: 'Your artist arrives at your doorstep with all equipment. Relax and enjoy professional beauty services at home.',
    icon: Sparkles,
    color: 'from-blush-400 to-blush-500',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting beautiful has never been easier. Just 3 simple steps to your perfect look.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative">
                {/* Connector Line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-rose-300 to-transparent -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10">
                  {/* Step Number & Icon */}
                  <div className="relative mb-8">
                    <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 md:right-auto md:left-2/3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md border-2 border-rose-500">
                      <span className="font-bold text-rose-600">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="/book" className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2">
            Get Started Now
            <Sparkles className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
