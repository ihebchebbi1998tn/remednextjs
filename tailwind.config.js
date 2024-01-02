const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        reg: {
          main: 'hsl(var(--reg-main))',
          danger: 'hsl(var(--reg-danger))',
          dark: 'hsl(var(--reg-dark))',
          warning: 'hsl(var(--reg-warning))',
        },
        green: {
          50: 'hsl(129, 41%, 97%)',
          100: 'hsl(139, 42%, 93%)',
          200: 'hsl(136, 39%, 85%)',
          300: 'hsl(136, 37%, 73%)',
          400: 'hsl(137, 34%, 58%)',
          500: 'hsl(137, 34%, 47%)',
          600: 'hsl(137, 37%, 36%)',
          700: 'hsl(138, 34%, 29%)',
          800: 'hsl(138, 32%, 24%)',
          900: 'hsl(137, 30%, 20%)',
          950: 'hsl(137, 37%, 13%)',
        },
        red: {
          50: 'hsl(356, 100%, 97%)',
          100: 'hsl(356, 100%, 93%)',
          200: 'hsl(357, 100%, 88%)',
          300: 'hsl(357, 100%, 79%)',
          400: 'hsl(357, 100%, 67%)',
          500: 'hsl(357, 100%, 57%)',
          600: 'hsl(357, 99%, 51%)',
          700: 'hsl(357, 100%, 42%)',
          800: 'hsl(357, 96%, 33%)',
          900: 'hsl(357, 87%, 31%)',
          950: 'hsl(357, 100%, 16%)',
        },
        brown: {
          50: 'hsl(340, 20%, 97%)',
          100: 'hsl(343, 26%, 95%)',
          200: 'hsl(347, 27%, 90%)',
          300: 'hsl(348, 27%, 82%)',
          400: 'hsl(349, 25%, 70%)',
          500: 'hsl(350, 24%, 60%)',
          600: 'hsl(353, 21%, 51%)',
          700: 'hsl(355, 23%, 42%)',
          800: 'hsl(357, 22%, 35%)',
          900: 'hsl(356, 20%, 32%)',
          950: 'hsl(357, 24%, 17%)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
