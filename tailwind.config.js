const generateSpacings = (interval = 5, max = 320) => {
  const array = {}
  for (let x = 0; x <= max; x += interval) {
    array[x] = `${x / 10}rem`
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
    spacing: {
      ...generateSpacings(8, 32),
      ...generateSpacings(),
    },
    colors: {
      black: '#000',
      white: '#F7F7F2',
      darkSky: '#4E95BF',
      mediumSky: '#97C8DD',
      lightSky: '#CAEDFC',
      darkGrass: '#60A45E',
      mediumGrass: '#8EC475',
      lightGrass: '#CAD782',
      darkClay: '#D97F3E',
      mediumClay: '#F3915A',
      lightClay: '#FFC48D',
      insights: '#C9C8B1',
    },
    screens: {
      sm: '414px',
      sd: '480px',
      md: '835px',
      lg: '1024px',
      xl: '1200px',
    },
    extend: {
      gap: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.default-grid': {
          display: 'grid',
          'grid-template-columns': 'repeat(6, minmax(0, 1fr))',
          'column-gap': '1.5rem',
          '@screen md': {
            'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
            'column-gap': '2rem',
          },
          '@screen xl': {
            'column-gap': '3rem',
          },
        },
        '.default-grid-lg': {
          display: 'grid',
          'grid-template-columns': 'repeat(6, minmax(0, 1fr))',
          'column-gap': '1.5rem',
          '@screen lg': {
            'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
            'column-gap': '2rem',
          },
          '@screen xl': {
            'column-gap': '3rem',
          },
        },
        '.container': {
          maxWidth: '100%',
          padding: '0 3rem',
          '@screen sm': {
            margin: '0 auto',
            padding: '0 3.5rem',
          },
          '@screen md': {
            maxWidth: '1200px',
          },
          '@screen xl': {
            padding: '0',
          },
        },
        '.container-insights': {
          maxWidth: '100%',
          padding: '0 3rem',
          '@screen md': {
            maxWidth: '66.4rem',
            margin: '0 auto',
            padding: '0rem',
          },
        },
      })
    },
  ],
}
