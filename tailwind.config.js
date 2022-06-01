const generateSpacings = (interval = 5, max = 300) => {
  const array = {}
  for (let x = 0; x <= max; x += interval) {
    array[x] = `${interval / 10}rem`
  }
  return array
}

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: generateSpacings(),
    colors: {
      black: '#000',
      white: '#fff',
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
      xxl: '1780px',
    },
    extend: {
      gap: {
        16: '1.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 20px',
          '@screen md': {
            margin: '0 auto',
            padding: '0 70px',
          },
          '@screen xxl': {
            maxWidth: '1440px',
            padding: '0',
          },
        },
      })
    },
  ],
}
