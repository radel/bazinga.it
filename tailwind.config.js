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
      sans: ['Ibm Plex Sans'],
      display: ['Ibm Plex Sans', 'sans-serif'],
      body: ['Libre Franklin', 'sans-serif']
    },
    extend: {
      colors: {
        cyan: '#9cdbff'
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
