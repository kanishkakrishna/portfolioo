/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080D',
          900: '#0C0C14',
          800: '#12121C',
          700: '#1A1A26',
        },
        mist: {
          400: '#9CA3AF',
          300: '#B4B8C4',
          100: '#F1F1F4',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        violet: {
          400: '#A78BFA',
          500: '#8B5CF6',
        },
        signal: {
          green: '#34D399',
          amber: '#FBBF24',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, #08080D), linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'aurora':
          'radial-gradient(60% 50% at 20% 20%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(139,92,246,0.20) 0%, rgba(139,92,246,0) 60%), radial-gradient(40% 40% at 60% 90%, rgba(52,211,153,0.10) 0%, rgba(52,211,153,0) 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.35)',
        'glow-indigo': '0 0 40px rgba(99,102,241,0.25)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
}
