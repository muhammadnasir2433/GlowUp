import { Instagram } from 'lucide-react'

const posts = [
  { id: 1, color: 'bg-rose-300', likes: 234, comments: 12 },
  { id: 2, color: 'bg-gold-300', likes: 189, comments: 8 },
  { id: 3, color: 'bg-blush-300', likes: 312, comments: 15 },
  { id: 4, color: 'bg-purple-300', likes: 267, comments: 10 },
  { id: 5, color: 'bg-blue-300', likes: 198, comments: 7 },
  { id: 6, color: 'bg-green-300', likes: 245, comments: 11 },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-rose-500" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
              Follow Us on Instagram
            </h2>
          </div>
          <p className="section-subtitle">
            See our artists' latest work and get inspired for your next look
          </p>
          <a
            href="https://instagram.com/glowup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-rose-600 hover:text-rose-700 font-medium"
          >
            @glowup_beauty
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className={`absolute inset-0 ${post.color}`}></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <div className="flex items-center gap-4 mb-2 justify-center">
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {post.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      {post.comments}
                    </div>
                  </div>
                </div>
              </div>

              {/* Placeholder Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
