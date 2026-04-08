import Link from 'next/link'
import { Sparkles, Mail, Phone, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-rose-400" />
              <span className="font-display text-2xl font-bold">GlowUp</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your Personal Beauty Artist at Home. We bring the salon experience to your doorstep.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/artists" className="text-gray-400 hover:text-white transition-colors">Find Artists</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog & Tips</Link></li>
              <li><Link href="/artist/register" className="text-gray-400 hover:text-white transition-colors">Join as Artist</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/bridal" className="text-gray-400 hover:text-white transition-colors">Bridal Makeup</Link></li>
              <li><Link href="/services/party" className="text-gray-400 hover:text-white transition-colors">Party Makeup</Link></li>
              <li><Link href="/services/casual" className="text-gray-400 hover:text-white transition-colors">Casual Makeup</Link></li>
              <li><Link href="/services/mehndi" className="text-gray-400 hover:text-white transition-colors">Mehndi</Link></li>
              <li><Link href="/services/hair" className="text-gray-400 hover:text-white transition-colors">Hair Styling</Link></li>
              <li><Link href="/services/skincare" className="text-gray-400 hover:text-white transition-colors">Skincare</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>123 Beauty Avenue, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:+923001234567" className="hover:text-white transition-colors">+92 300 1234567</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:hello@glowup.pk" className="hover:text-white transition-colors">hello@glowup.pk</a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923001234567" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-colors mt-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GlowUp. All rights reserved. | Made with 💖 in Pakistan</p>
        </div>
      </div>
    </footer>
  )
}
