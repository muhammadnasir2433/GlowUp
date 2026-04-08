import Link from 'next/link'
import { Heart, PartyPopper, Sparkles, PenTool, Scissors, Flower2, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'bridal',
    name: 'Bridal Makeup',
    icon: Heart,
    description: 'Look absolutely stunning on your special day with our professional bridal makeup services.',
    longDescription: 'Our expert bridal makeup artists work with you to create your perfect bridal look. From natural and elegant to bold and glamorous, we customize everything to match your vision and wedding theme.',
    features: [
      'Pre-wedding consultation & trial',
      'Premium quality products used',
      'Long-lasting, photo-ready finish',
      'Touch-up kit provided',
      'Includes draping & dupatta setting',
    ],
    price: 'Starting from PKR 25,000',
    duration: '3-4 hours',
    color: 'from-rose-400 to-rose-500',
    bgColor: 'bg-rose-50',
    image: 'bg-rose-300',
  },
  {
    id: 'party',
    name: 'Party Makeup',
    icon: PartyPopper,
    description: 'Get ready to dazzle at any celebration with our professional party makeup services.',
    longDescription: 'Whether it is a birthday party, engagement, or any special occasion, our artists will create a look that turns heads. Choose from subtle glam to bold and dramatic styles.',
    features: [
      'Customized look consultation',
      'High-quality, long-lasting makeup',
      'Suitable for all skin types',
      'Includes eye makeup & lips',
      'Quick turnaround time',
    ],
    price: 'Starting from PKR 8,000',
    duration: '1-2 hours',
    color: 'from-gold-400 to-gold-500',
    bgColor: 'bg-gold-50',
    image: 'bg-gold-300',
  },
  {
    id: 'casual',
    name: 'Casual Makeup',
    icon: Sparkles,
    description: 'Enhance your natural beauty with our everyday casual makeup services.',
    longDescription: 'Perfect for those days when you want to look polished and put-together without going overboard. Our artists create fresh, natural looks that enhance your features.',
    features: [
      'Natural, everyday look',
      'Lightweight products used',
      'Quick application',
      'Perfect for office or outings',
      'Affordable pricing',
    ],
    price: 'Starting from PKR 5,000',
    duration: '1 hour',
    color: 'from-blush-400 to-blush-500',
    bgColor: 'bg-blush-50',
    image: 'bg-blush-300',
  },
  {
    id: 'mehndi',
    name: 'Mehndi',
    icon: PenTool,
    description: 'Beautiful, intricate henna designs for all your celebrations.',
    longDescription: 'From traditional bridal mehndi to modern minimalist designs, our skilled mehndi artists create stunning patterns that celebrate your special moments. We use only natural, safe henna.',
    features: [
      'Custom designs per your preference',
      'Natural, safe henna paste',
      'Dark, long-lasting stain',
      'Bridal to casual designs',
      'Home service available',
    ],
    price: 'Starting from PKR 12,000',
    duration: '2-3 hours',
    color: 'from-green-400 to-green-500',
    bgColor: 'bg-green-50',
    image: 'bg-green-300',
  },
  {
    id: 'hair',
    name: 'Hair Styling',
    icon: Scissors,
    description: 'Professional hair care, cutting, and styling services at your home.',
    longDescription: 'Our expert hair stylists provide everything from cuts and coloring to elaborate styling for events. Get salon-quality results in the comfort of your home.',
    features: [
      'Cut, coloring & treatments',
      'Bridal & party hairstyles',
      'Keratin & smoothing treatments',
      'Hair spa & deep conditioning',
      'Professional products used',
    ],
    price: 'Starting from PKR 6,000',
    duration: '1-2 hours',
    color: 'from-purple-400 to-purple-500',
    bgColor: 'bg-purple-50',
    image: 'bg-purple-300',
  },
  {
    id: 'skincare',
    name: 'Skincare',
    icon: Flower2,
    description: 'Rejuvenating skin treatments for a healthy, radiant glow.',
    longDescription: 'Our skincare specialists provide customized facials, treatments, and consultations to help you achieve your best skin. We use premium products suitable for all skin types.',
    features: [
      'Customized facial treatments',
      'Chemical peels & microdermabrasion',
      'Anti-aging treatments',
      'Acne & pigmentation solutions',
      'Skin consultation included',
    ],
    price: 'Starting from PKR 7,000',
    duration: '1-2 hours',
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
    image: 'bg-blue-300',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Beauty Services</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Professional beauty services delivered to your doorstep. Choose from our wide range of expert artists.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services List */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`${service.image} h-80 lg:h-96 rounded-3xl shadow-medium`}></div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`inline-flex items-center gap-2 ${service.bgColor} px-4 py-2 rounded-full mb-4`}>
                    <Icon className={`w-5 h-5 bg-gradient-to-r ${service.color} bg-clip-text`} />
                    <span className="font-medium text-gray-700">{service.name}</span>
                  </div>
                  
                  <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6">{service.longDescription}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap items-center gap-6 mb-6">
                    <div>
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="text-xl font-bold text-rose-600">{service.price}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="text-xl font-bold text-gray-900">{service.duration}</p>
                    </div>
                  </div>
                  
                  <Link href={`/book?service=${service.id}`} className="btn-primary inline-flex items-center gap-2">
                    Book This Service
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-3xl p-12 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Our beauty consultants can help you choose the perfect service for your occasion
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-rose-600 px-8 py-4 rounded-full font-semibold hover:bg-rose-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Chat on WhatsApp
            </a>
            <Link href="/artists" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2">
              Browse Artists
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
