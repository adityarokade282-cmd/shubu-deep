/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        diwali: {
          purple: {
            50: '#f5f0fb',
            100: '#ece0f7',
            200: '#d6c2ef',
            300: '#b894e0',
            400: '#9a66d0',
            500: '#7e3fbd',
            600: '#6b2da3',
            700: '#562285',
            800: '#3d185c',
            900: '#2a0f42',
            950: '#1a0830',
          },
          gold: {
            50: '#fffaeb',
            100: '#fff1c6',
            200: '#ffe188',
            300: '#ffce4a',
            400: '#ffb820',
            500: '#f59e0b',
            600: '#d97e06',
            700: '#b45e09',
            800: '#924a0e',
            900: '#783d0f',
          },
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          cream: {
            50: '#fffef7',
            100: '#fffdf0',
            200: '#fff9e0',
            300: '#fff4c9',
            400: '#fdebb0',
            500: '#f9dfa0',
          },
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
        accent: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'float-up': 'floatUp 3s ease-in-out infinite',
        'flicker': 'flicker 2.5s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
      },
      keyframes: {
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.8' },
          '50%': { transform: 'translateY(-20px)', opacity: '0.3' },
        },
        flicker: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '25%': { opacity: '0.85', filter: 'brightness(1.1)' },
          '50%': { opacity: '1', filter: 'brightness(0.9)' },
          '75%': { opacity: '0.9', filter: 'brightness(1.05)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,184,32,0.4), 0 0 40px rgba(255,184,32,0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(255,184,32,0.7), 0 0 60px rgba(255,184,32,0.3)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #ffce4a 0%, #f59e0b 50%, #d97e06 100%)',
        'purple-gradient': 'linear-gradient(135deg, #3d185c 0%, #2a0f42 50%, #1a0830 100%)',
        'festive-gradient': 'linear-gradient(135deg, #2a0f42 0%, #3d185c 40%, #562285 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #d97e06 0%, #ffce4a 25%, #fff1c6 50%, #ffce4a 75%, #d97e06 100%)',
      },
    },
  },
  plugins: [],
};
