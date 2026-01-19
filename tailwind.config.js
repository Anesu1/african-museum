/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: 'var(--color-border)', // gold with opacity
        input: 'var(--color-input)', // dark-gray
        ring: 'var(--color-ring)', // gold
        background: 'var(--color-background)', // near-black
        foreground: 'var(--color-foreground)', // white
        primary: {
          DEFAULT: 'var(--color-primary)', // black
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // bronze
          foreground: 'var(--color-secondary-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // firebrick
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-800
          foreground: 'var(--color-muted-foreground)', // gray-400
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // dark-goldenrod
          foreground: 'var(--color-accent-foreground)', // black
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // dark-gray
          foreground: 'var(--color-popover-foreground)', // white
        },
        card: {
          DEFAULT: 'var(--color-card)', // dark-gray
          foreground: 'var(--color-card-foreground)', // white
        },
        success: {
          DEFAULT: 'var(--color-success)', // forest-green
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // goldenrod
          foreground: 'var(--color-warning-foreground)', // black
        },
        error: {
          DEFAULT: 'var(--color-error)', // firebrick
          foreground: 'var(--color-error-foreground)', // white
        },
        bronze: 'var(--color-bronze)', // bronze
        gold: 'var(--color-gold)', // gold
        'dark-gold': 'var(--color-dark-gold)', // dark-goldenrod
        'text-primary': 'var(--color-text-primary)', // white
        'text-secondary': 'var(--color-text-secondary)', // silver
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        headline: ['Playfair Display', 'serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        cta: ['Montserrat', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
      },
      spacing: {
        '13': '3.25rem',
        '21': '5.25rem',
        '34': '8.5rem',
        '55': '13.75rem',
      },
      boxShadow: {
        'bronze-glow': '0 4px 20px rgba(205, 127, 50, 0.15)',
        'gold-glow': '0 0 30px rgba(255, 215, 0, 0.2)',
        'heritage': '0 4px 20px rgba(184, 134, 11, 0.1)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionTimingFunction: {
        'heritage': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}