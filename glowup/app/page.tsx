import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import HowItWorks from '@/components/HowItWorks'
import NearbyArtists from '@/components/NearbyArtists'
import TrustAndSafety from '@/components/TrustAndSafety'
import Testimonials from '@/components/Testimonials'
import InstagramFeed from '@/components/InstagramFeed'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <HowItWorks />
      <NearbyArtists />
      <TrustAndSafety />
      <Testimonials />
      <InstagramFeed />
      <CTASection />
    </>
  )
}
