/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#FF4D8D',
          light: '#FF9ECF',
          dark: '#E03E7D',
          glow: 'rgba(255, 77, 141, 0.4)',
        },
        purple: {
          DEFAULT: '#5B2EFF',
          light: '#7B52FF',
          dark: '#4A24CC',
        },
        gold: {
          DEFAULT: '#FFD700',
          light: '#FFE44D',
          dark: '#E6C200',
          glow: 'rgba(255, 215, 0, 0.3)',
        },
        dark: {
          DEFAULT: '#0a0a0a',
          light: '#1a1a2e',
          lighter: '#2a2a3e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'hero-sm': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '800' }],
        'section': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'section-sm': ['36px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      spacing: {
        'section': '100px',
        'container': '1400px',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        'full': '9999px',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(255, 77, 141, 0.1)',
        'medium': '0 8px 40px rgba(91, 46, 255, 0.15)',
        'glow': '0 0 40px rgba(255, 77, 141, 0.4)',
        'gold': '0 0 30px rgba(255, 215, 0, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #FF4D8D 0%, #FF9ECF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #5B2EFF 0%, #FF4D8D 100%)',
        'gradient-gold': 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'gradient': 'gradient-shift 3s ease infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(2deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-2deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 77, 141, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 77, 141, 0.8)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.9)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}
