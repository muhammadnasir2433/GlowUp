'use client'

import { Instagram, Heart, MessageCircle } from 'lucide-react'

const posts = [
  { id: 1, color: 'bg-gradient-to-br from-pink-400 to-pink-600', likes: 234, comments: 12 },
  { id: 2, color: 'bg-gradient-to-br from-purple-400 to-purple-600', likes: 189, comments: 8 },
  { id: 3, color: 'bg-gradient-to-br from-blue-400 to-blue-600', likes: 312, comments: 15 },
  { id: 4, color: 'bg-gradient-to-br from-green-400 to-green-600', likes: 267, comments: 10 },
  { id: 5, color: 'bg-gradient-to-br from-orange-400 to-orange-600', likes: 198, comments: 7 },
  { id: 6, color: 'bg-gradient-to-br from-teal-400 to-teal-600', likes: 245, comments: 11 },
  { id: 7, color: 'bg-gradient-to-br from-rose-400 to-rose-600', likes: 289, comments: 14 },
  { id: 8, color: 'bg-gradient-to-br from-indigo-400 to-indigo-600', likes: 321, comments: 18 },
]

export default function InstagramFeed() {
  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container-premium mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full mb-6">
            <Instagram className="w-5 h-5 text-pink" />
            <span className="text-sm font-semibold text-dark">Follow Our Journey</span>
          </div>
          <h2 className="text-section text-dark mb-6">
            Join Us on <span className="gradient-text">Instagram</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            See our artists' latest work, behind-the-scenes, and get inspired for your next look
          </p>
          <a
            href="https://instagram.com/glowup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-pink hover:text-pink-dark font-semibold text-lg transition-colors group"
          >
            @glowup_beauty
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-500 shadow-soft hover:shadow-medium"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 ${post.color}`}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-center transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-6 mb-3 justify-center">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6 fill-current" />
                      <span className="font-bold text-lg">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 fill-current" />
                      <span className="font-bold text-lg">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium">View on Instagram</p>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white/40 group-hover:scale-125 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
