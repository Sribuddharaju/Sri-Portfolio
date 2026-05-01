/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace',
        ],
      },
      colors: {
        // Salesforce-inspired accent palette
        brand: {
          50: '#eff8ff',
          100: '#dbeefe',
          200: '#bfe1fe',
          300: '#93cefd',
          400: '#60b1fa',
          500: '#3b8ff6',
          600: '#2570eb',
          700: '#1d59d8',
          800: '#1e49af',
          900: '#1e408a',
          950: '#172a55',
        },
        cyan: {
          glow: '#22d3ee',
        },
        ink: {
          50: '#f6f8fb',
          100: '#eef1f6',
          200: '#dde3ed',
          300: '#b9c3d3',
          400: '#8a96aa',
          500: '#5f6b81',
          600: '#3f4a5e',
          700: '#27304a',
          800: '#161c30',
          900: '#0b0f1f',
          950: '#06091a',
        },
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(59, 143, 246, 0.45)',
        'glow-lg': '0 0 100px -20px rgba(34, 211, 238, 0.45)',
        'soft': '0 6px 24px -6px rgba(15, 23, 42, 0.08), 0 2px 6px -2px rgba(15, 23, 42, 0.06)',
      },
      backgroundImage: {
        'mesh-1':
          'radial-gradient(at 20% 20%, rgba(59,143,246,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(34,211,238,0.30) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(124,58,237,0.25) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(236,72,153,0.20) 0px, transparent 50%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'orbit-glow': {
          '0%, 100%': { opacity: '0.6', filter: 'blur(0px)' },
          '50%': { opacity: '1', filter: 'blur(2px)' },
        },
        'flow-dash': {
          '0%': { strokeDashoffset: '40' },
          '100%': { strokeDashoffset: '0' },
        },
        'node-pulse': {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.4)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'spin-slow': 'spin-slow 28s linear infinite',
        'spin-reverse': 'spin-reverse 36s linear infinite',
        'spin-slower': 'spin-slow 60s linear infinite',
        'orbit-glow': 'orbit-glow 3.5s ease-in-out infinite',
        'flow-dash': 'flow-dash 1.6s linear infinite',
        'node-pulse': 'node-pulse 2.4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
