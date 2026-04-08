import Link from 'next/link'
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle, ArrowRight, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-dark text-white overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent"></div>

      {/* Animated Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink rounded-full filter blur-3xl opacity-5 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple rounded-full filter blur-3xl opacity-5 animate-float"></div>

      <div className="container-premium mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:animate-pulse-glow-lg transition-all duration-500">
                <Sparkles className="w-8 h-8 text-white" />
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
                  className="w-13 h-13 glass rounded-2xl flex items-center justify-center hover:bg-gradient-primary transition-all duration-500 hover:scale-110 hover:shadow-glow"
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
                  <Link href={href} className="text-gray-300 hover:text-pink-light transition-all flex items-center gap-3 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-pink" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{label}</span>
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
                  <Link href="/services" className="text-gray-300 hover:text-gold transition-all flex items-center gap-3 group">
                    <span className="w-2 h-2 bg-gold rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                    <span className="group-hover:translate-x-2 transition-transform duration-300">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 gradient-text-secondary">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-gray-300">
                <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-5 h-5 text-pink" />
                </div>
                <span className="leading-relaxed">123 Beauty Avenue, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink/20 transition-colors">
                  <Phone className="w-5 h-5 text-pink" />
                </div>
                <a href="tel:+923001234567" className="hover:text-pink-light transition-colors">+92 300 1234567</a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 group">
                <div className="w-10 h-10 bg-pink/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-pink/20 transition-colors">
                  <Mail className="w-5 h-5 text-pink" />
                </div>
                <a href="mailto:hello@glowup.pk" className="hover:text-pink-light transition-colors">hello@glowup.pk</a>
              </li>
              <li className="pt-4">
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="font-semibold">Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} GlowUp. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-pink-light transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pink-light transition-colors duration-300">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-pink-light transition-colors duration-300">Cookies</Link>
          </div>
          <p className="text-gray-400 text-center md:text-right flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-pink fill-current animate-pulse" /> in Pakistan
          </p>
        </div>
      </div>
    </footer>
  )
}
