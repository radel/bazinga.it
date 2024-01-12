/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['IBM Plex Sans'],
      display: ['IBM Plex Sans', 'sans-serif'],
      body: ['IBM Plex Sans', 'sans-serif']
    },
    extend: {
      colors: {
        base: {
          black: '#100F0F',
          950: '#1C1B1A',
          900: '#282726',
          850: '#343331',
          800: '#403E3C',
          700: '#575653',
          600: '#6F6E69',
          500: '#878580',
          300: '#B7B5AC',
          200: '#CECDC3',
          150: '#DAD8CE',
          100: '#E6E4D9',
          50: '#F2F0E5',
          paper: '#FFFCF0'
        },
        red: {
          DEFAULT: '#AF3029',
          light: '#D14D41'
        },
        orange: {
          DEFAULT: '#BC5215',
          light: '#DA702C'
        },
        yellow: {
          DEFAULT: '#AD8301',
          light: '#D0A215'
        },
        green: {
          DEFAULT: '#66800B',
          light: '#879A39'
        },
        cyan: {
          DEFAULT: '#24837B',
          light: '#3AA99F'
        },
        blue: {
          DEFAULT: '#205EA6',
          light: '#4385BE'
        },
        purple: {
          DEFAULT: '#5E409D',
          light: '#8B7EC8'
        },
        magenta: {
          DEFAULT: '#A02F6F',
          light: '#CE5D97'
        }
      },
      spacing: {
        96: '24rem',
        128: '32rem'
      },
      height: {
        84: '22rem'
      },
      width: {
        '3/2': '150%',
        '4/2': '200%',
        '1/2-screen': '50vw'
      },
      margin: {
        '-fullh': '-100vh'
      }
    },
    inset: {
      0: 0,
      16: '16px',
      32: '32px',
      64: '64px',
      '2rem': '2rem',
      '3rem': '3rem'
    }
  },
  variants: {},
  plugins: []
}
