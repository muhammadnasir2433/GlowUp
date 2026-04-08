# GlowUp – Home Beauty Services

A modern, responsive website for a home beauty service marketplace that connects customers with nearby makeup and beauty artists for home services.

## 🌟 Features

### Homepage
- **Hero Section** with tagline "Your Personal Beauty Artist at Home"
- **Call-to-Action Buttons**: 'Book an Artist', 'Join as Artist'
- **Service Categories**: Bridal Makeup, Party Makeup, Casual Makeup, Mehndi, Hair Styling, Skincare
- **How It Works**: 3-step visual guide
- **Testimonials**: Client reviews section
- **Instagram Feed Integration**

### Artist Side
- **Artist Registration Form**
  - Name, photo, contact info
  - Services offered with pricing
  - Location and availability
  - Portfolio upload (images/videos)
  
- **Artist Dashboard**
  - Track bookings
  - Earnings overview
  - Availability management

### Customer Side
- **Search & Filter** artists by service, location, price
- **Booking System** with date, time, service selection
- **Payment Options**: Cash on delivery (MVP), ready for JazzCash / EasyPaisa / Debit Card integration
- **Rating & Review System**

### Admin Side
- Verify artists
- Manage bookings
- Track platform commissions
- Analytics dashboard for growth insights

### Other Features
- ✅ Mobile-responsive design
- ✅ Fast loading
- ✅ SEO friendly
- ✅ Blog / tips section for beauty and makeup
- ✅ Contact form and WhatsApp integration for support

## 🎨 Design

### Color Palette
- **Primary**: Soft pinks (#f43f5e, #e11d48)
- **Accent**: Gold accents (#ffcc33, #e6b800)
- **Background**: White with subtle gradients
- **Typography**: Inter (sans-serif) + Playfair Display (display)

### Branding
- Elegant, clean, and modern design
- Logo: 'GlowUp' with Sparkles icon
- Consistent visual language throughout

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or navigate to the project:
```bash
cd glowup
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
glowup/
├── app/                        # Next.js App Router
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage
│   ├── globals.css            # Global styles
│   ├── artist/
│   │   ├── register/          # Artist registration
│   │   └── dashboard/         # Artist dashboard
│   ├── artists/               # Browse artists page
│   ├── book/                  # Booking system
│   ├── admin/                 # Admin dashboard
│   ├── blog/                  # Blog section
│   ├── contact/               # Contact page
│   └── services/              # Services page
├── components/                 # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Categories.tsx
│   ├── HowItWorks.tsx
│   ├── Testimonials.tsx
│   ├── InstagramFeed.tsx
│   └── CTASection.tsx
├── public/                     # Static assets
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vercel (Next.js built-in)

## 📱 Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, categories, how it works, testimonials |
| `/artists` | Browse and filter artists |
| `/book` | Booking system (multi-step) |
| `/artist/register` | Artist registration form |
| `/artist/dashboard` | Artist dashboard (bookings, earnings, availability) |
| `/admin` | Admin dashboard (analytics, verify artists, manage bookings) |
| `/services` | Services overview |
| `/blog` | Beauty tips and blog posts |
| `/contact` | Contact form with WhatsApp integration |

## 🔌 Backend Integration Ready

The frontend is designed for easy integration with a FastAPI backend:

### API Endpoints Structure (Recommended)

```python
# Authentication
POST /api/auth/register          # User registration
POST /api/auth/login             # User login
POST /api/auth/logout            # User logout

# Artists
GET  /api/artists                # List all artists
GET  /api/artists/{id}           # Get artist details
POST /api/artists/register       # Artist registration
PUT  /api/artists/{id}           # Update artist profile
GET  /api/artists/{id}/portfolio # Get artist portfolio

# Services
GET  /api/services               # List all services
GET  /api/services/{id}          # Get service details

# Bookings
POST /api/bookings               # Create booking
GET  /api/bookings/{id}          # Get booking details
PUT  /api/bookings/{id}          # Update booking
GET  /api/bookings/user/{user_id}# User's bookings

# Reviews
POST /api/reviews                # Create review
GET  /api/reviews/artist/{id}    # Get artist reviews

# Payments
POST /api/payments               # Process payment
GET  /api/payments/{id}          # Get payment details

# Admin
GET  /api/admin/artists/pending  # Get pending artist applications
PUT  /api/admin/artists/{id}/verify  # Verify artist
GET  /api/admin/bookings         # All bookings
GET  /api/admin/analytics        # Platform analytics
```

## 🎯 Future Enhancements

- [ ] User authentication (JWT)
- [ ] Real-time booking notifications
- [ ] Payment gateway integration (JazzCash, EasyPaisa, Stripe)
- [ ] Push notifications
- [ ] Mobile app (React Native / Flutter)
- [ ] AI-powered artist recommendations
- [ ] Video consultation feature
- [ ] Loyalty program
- [ ] Multi-language support (Urdu, English)
- [ ] Advanced analytics with charts

## 📊 Database Schema (Recommended for FastAPI + PostgreSQL)

```sql
-- Users
users (id, name, email, phone, password_hash, role, created_at)

-- Artists
artists (id, user_id, bio, location, experience, is_verified, rating, created_at)

-- Services
services (id, name, description, base_price, duration)

-- Artist Services
artist_services (id, artist_id, service_id, price)

-- Portfolio
portfolio (id, artist_id, image_url, created_at)

-- Bookings
bookings (id, customer_id, artist_id, service_id, date, time, status, total_amount, created_at)

-- Reviews
reviews (id, booking_id, rating, comment, created_at)

-- Payments
payments (id, booking_id, method, status, amount, paid_at)

-- Availability
artist_availability (id, artist_id, day_of_week, start_time, end_time, is_available)
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For support, email hello@glowup.pk or contact us on WhatsApp: +92 300 1234567

## 🙏 Acknowledgments

- Design inspired by modern beauty industry trends
- Built with love for the Pakistani market
- Icons from Lucide React
- Fonts from Google Fonts

---

**Made with 💖 in Pakistan**
