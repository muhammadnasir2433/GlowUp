# GlowUp – Home Beauty Services ✨

> **Your Personal Beauty Artist at Home**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

A modern, responsive website for a home beauty service marketplace that connects customers with nearby makeup and beauty artists for home services. Built with Next.js 14, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [Visit GlowUp](https://glowup.vercel.app) *(Replace with your actual Vercel URL)*

---

## 📸 Screenshots

*Add screenshots of your website here*

---
`
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
- Node.js 18+ ([Download](https://nodejs.org/))
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/muhammadnasir2433/GlowUp.git
cd GlowUp/glowup
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new) and import your GitHub repository
3. Vercel will auto-detect Next.js and configure settings
4. Click **Deploy**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muhammadnasir2433/GlowUp)

### Deploy on Other Platforms

- **Netlify**: Supports Next.js static exports
- **AWS Amplify**: Full-stack deployment option
- **Railway**: Easy Next.js hosting

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

We love contributions! Here's how you can help:

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style
- Write clear commit messages
- Test your changes before submitting
- Update documentation if needed

## 👥 Contributors

| Contributor | Role |
|------------|------|
| Muhammad Nasir | Full Stack Developer |

*Want to contribute? Join our team!*

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support & Contact

We're here to help! Reach out to us:

- 📧 **Email**: hello@glowup.pk
- 📱 **WhatsApp**: [+92 300 1234567](https://wa.me/923001234567)
- 🐛 **Report Bugs**: [GitHub Issues](https://github.com/muhammadnasir2433/GlowUp/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/muhammadnasir2433/GlowUp/discussions)

## 🙏 Acknowledgments

- Design inspired by modern beauty industry trends
- Built with love for the Pakistani market 🇵🇰
- Icons from [Lucide React](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Deployed on [Vercel](https://vercel.com)

## 📈 Project Stats

![GitHub stars](https://img.shields.io/github/stars/muhammadnasir2433/GlowUp?style=social)
![GitHub forks](https://img.shields.io/github/forks/muhammadnasir2433/GlowUp?style=social)
![GitHub issues](https://img.shields.io/github/issues/muhammadnasir2433/GlowUp)
![GitHub pull requests](https://img.shields.io/github/issues-pr/muhammadnasir2433/GlowUp)

---

<div align="center">

**Made with 💖 in Pakistan** ⭐ Don't forget to star this repository!

[Website](https://glowup.vercel.app) • [Report Bug](https://github.com/muhammadnasir2433/GlowUp/issues) • [Request Feature](https://github.com/muhammadnasir2433/GlowUp/issues)

</div>
