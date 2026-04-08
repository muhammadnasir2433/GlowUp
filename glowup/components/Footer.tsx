import Link from 'next/link'
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-dark text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="container-premium mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:animate-pulse-glow transition-all">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <span className="font-display text-3xl font-extrabold gradient-text">GlowUp</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your Personal Beauty Artist at Home. We bring the premium salon experience to your doorstep.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Twitter, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a 
                  key={href}
                  href={href} 
                  className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-gradient-primary transition-all duration-300 hover:scale-110 hover:shadow-glow"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 gradient-text">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Find Artists', href: '/artists' },
                { label: 'Services', href: '/services' },
                { label: 'Blog & Tips', href: '/blog' },
                { label: 'Join as Artist', href: '/artist/register' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-gray-300 hover:text-pink-light transition-all flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="group-hover:translate-x-1 transition-transform">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 gradient-text-gold">Services</h3>
            <ul className="space-y-4">
              {[
                'Bridal Makeup',
                'Party Makeup',
                'Casual Makeup',
                'Mehndi',
                'Hair Styling',
                'Skincare',
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-300 hover:text-gold transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full group-hover:scale-150 transition-transform"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 gradient-text-secondary">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-pink" />
                <span>123 Beauty Avenue, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 flex-shrink-0 text-pink" />
                <a href="tel:+923001234567" className="hover:text-pink-light transition-colors">+92 300 1234567</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 text-pink" />
                <a href="mailto:hello@glowup.pk" className="hover:text-pink-light transition-colors">hello@glowup.pk</a>
              </li>
              <li className="pt-4">
                <a 
                  href="https://wa.me/923001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} GlowUp. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-pink-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pink-light transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-pink-light transition-colors">Cookies</Link>
          </div>
          <p className="text-gray-400 text-center md:text-right">
            Made with <span className="text-pink">💖</span> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
