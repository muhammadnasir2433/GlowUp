import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: '10 Bridal Makeup Trends for 2026',
    excerpt: 'Discover the latest bridal makeup trends that will make you look stunning on your special day. From natural glow to bold lips.',
    image: 'bg-rose-300',
    category: 'Bridal',
    date: 'April 5, 2026',
    readTime: '5 min read',
    author: 'Ayesha Khan',
  },
  {
    id: 2,
    title: 'How to Prep Your Skin Before Makeup',
    excerpt: 'Learn the essential skincare steps to ensure your makeup lasts all day and looks flawless. Perfect base preparation tips.',
    image: 'bg-gold-300',
    category: 'Skincare',
    date: 'April 3, 2026',
    readTime: '4 min read',
    author: 'Fatima Ali',
  },
  {
    id: 3,
    title: 'Mehndi Designs: Traditional vs Modern',
    excerpt: 'Explore the beautiful world of mehndi designs. From classic bridal patterns to contemporary minimalist styles.',
    image: 'bg-green-300',
    category: 'Mehndi',
    date: 'March 30, 2026',
    readTime: '6 min read',
    author: 'Zainab Hassan',
  },
  {
    id: 4,
    title: 'Summer Hair Care Tips from Experts',
    excerpt: 'Keep your hair healthy and gorgeous during summer with these expert tips from our professional hair stylists.',
    image: 'bg-purple-300',
    category: 'Hair Care',
    date: 'March 28, 2026',
    readTime: '4 min read',
    author: 'Hira Malik',
  },
  {
    id: 5,
    title: 'Party Makeup Looks That Last All Night',
    excerpt: 'Get ready for your next celebration with these long-lasting party makeup looks. Tips for smudge-proof glamour.',
    image: 'bg-blush-300',
    category: 'Party',
    date: 'March 25, 2026',
    readTime: '5 min read',
    author: 'Sara Ahmed',
  },
  {
    id: 6,
    title: 'The Ultimate Guide to Facial Treatments',
    excerpt: 'Understanding different facial treatments and which one is right for your skin type. Expert recommendations included.',
    image: 'bg-blue-300',
    category: 'Skincare',
    date: 'March 22, 2026',
    readTime: '7 min read',
    author: 'Amna Raza',
  },
]

const categories = ['All', 'Bridal', 'Skincare', 'Mehndi', 'Hair Care', 'Party', 'Makeup Tips']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Sparkles className="w-16 h-16 mx-auto mb-4 opacity-50" />
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Beauty Tips & Insights</h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Expert advice, trends, and tutorials from our professional beauty artists
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 bg-white rounded-full font-medium text-gray-700 hover:bg-rose-500 hover:text-white transition-colors shadow-soft"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="card mb-12 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="h-64 md:h-auto bg-rose-300"></div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="px-3 py-1 bg-gold-100 text-gold-600 rounded-full text-sm font-medium">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                <Link href={`/blog/${blogPosts[0].id}`} className="btn-primary inline-flex items-center gap-2">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="card group hover:scale-105 transition-transform duration-300">
              <div className={`h-48 ${post.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-rose-600 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">By {post.author}</span>
                  <span className="text-rose-600 font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-rose-500 to-rose-600 rounded-3xl p-12 text-white text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Get Beauty Tips in Your Inbox</h2>
          <p className="text-rose-100 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for weekly beauty tips, trends, and exclusive offers
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button type="submit" className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-rose-50 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
