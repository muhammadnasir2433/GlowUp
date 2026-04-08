/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Gradient Colors
        pink: {
          DEFAULT: '#FF3CAC',
          light: '#FF6FD8',
          dark: '#E0349A',
          glow: 'rgba(255, 60, 172, 0.4)',
          soft: '#FFE4EC',
          neon: '#FF1493',
        },
        purple: {
          DEFAULT: '#7A5FFF',
          light: '#9B80FF',
          dark: '#5A2EFF',
          glow: 'rgba(122, 95, 255, 0.4)',
          royal: '#5A2EFF',
          lavender: '#E6E0FF',
        },
        gold: {
          DEFAULT: '#FFD166',
          light: '#FFE099',
          dark: '#FFC033',
          glow: 'rgba(255, 209, 102, 0.3)',
          luxury: '#FFD166',
        },
        // Neutral Colors
        dark: {
          DEFAULT: '#0F0F14',
          light: '#1A1A2E',
          lighter: '#2A2A3E',
        },
        rose: {
          soft: '#FFE4EC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-md': ['56px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-sm': ['40px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section': ['56px', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '800' }],
        'section-md': ['42px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-sm': ['32px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      spacing: {
        'section': '120px',
        'container': '1440px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        '4xl': '48px',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 4px 30px rgba(255, 60, 172, 0.12)',
        'medium': '0 12px 50px rgba(122, 95, 255, 0.18)',
        'glow': '0 0 50px rgba(255, 60, 172, 0.5)',
        'glow-lg': '0 0 80px rgba(255, 60, 172, 0.6)',
        'gold': '0 0 40px rgba(255, 209, 102, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.08)',
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.12)',
        'neon': '0 0 30px rgba(255, 60, 172, 0.8), 0 0 60px rgba(122, 95, 255, 0.4)',
      },
      backgroundImage: {
        // Primary Gradient: Soft Pink → Neon Pink → Purple
        'gradient-primary': 'linear-gradient(135deg, #FF3CAC 0%, #FF6FD8 50%, #7A5FFF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #5A2EFF 0%, #7A5FFF 50%, #FF3CAC 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD166 0%, #FFC033 100%)',
        'gradient-rose': 'linear-gradient(135deg, #FFE4EC 0%, #FFC0D9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F0F14 0%, #1A1A2E 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255, 60, 172, 0.1) 0%, rgba(122, 95, 255, 0.1) 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 10s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        'pulse-glow-lg': 'pulse-glow-lg 3s ease-in-out infinite',
        'gradient': 'gradient-shift 4s ease infinite',
        'gradient-fast': 'gradient-shift 2s ease infinite',
        'fade-in-up': 'fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
        'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'morph': 'morph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-35px) rotate(5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 30px rgba(255, 60, 172, 0.5)' },
          '50%': { boxShadow: '0 0 60px rgba(255, 60, 172, 0.9), 0 0 90px rgba(122, 95, 255, 0.5)' },
        },
        'pulse-glow-lg': {
          '0%, 100%': { boxShadow: '0 0 40px rgba(255, 60, 172, 0.6)' },
          '50%': { boxShadow: '0 0 80px rgba(255, 60, 172, 1), 0 0 120px rgba(122, 95, 255, 0.6)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.92)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(255, 60, 172, 0.4)' },
          to: { boxShadow: '0 0 40px rgba(255, 60, 172, 0.8), 0 0 60px rgba(122, 95, 255, 0.4)' },
        },
        morph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backdropBlur: {
        'glass': '20px',
        'glass-lg': '30px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
