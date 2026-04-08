import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'GlowUp – Home Beauty Services | Book Verified Makeup Artists',
  description: 'Connect with nearby verified makeup and beauty artists for home services. Bridal makeup, party makeup, mehndi, hair styling, and skincare at your doorstep.',
  keywords: 'beauty services, home makeup artist, bridal makeup, party makeup, mehndi, hair styling, skincare, beauty salon at home, GlowUp',
  authors: [{ name: 'GlowUp' }],
  openGraph: {
    title: 'GlowUp – Home Beauty Services',
    description: 'Your Personal Beauty Artist at Home',
    type: 'website',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GlowUp – Home Beauty Services',
    description: 'Book verified beauty artists at your doorstep',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-dark overflow-x-hidden">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
