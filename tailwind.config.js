module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Verdana', 'Roboto', 'system-ui']
      // 'serif': ['ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    screens: {
      '2xs': '23.4375rem', // 375px
      xs: '30rem', // 480px
      sm: '48rem', // 768px
      md: '62rem', // 992px
      lg: '80rem', // 1280px
      xl: '100rem' // 1600px
    },
    colors: {
      'b-light': '#ffffff',
      'b-dark': '#E9EAEC',
      'b-medium': '#DCDCDC',
      't-light': '#333333',
      't-light-secondary': '#7e7e7e',
      't-dark': '#333333',
      't-dark-secondary': '#777D88',
      brand: '#3B7AF7',
      black: '#000000',
      white: '#ffffff'
    },
    flexGrow: {
      0: 0,
      1: 1,
      2: 2
    },
    extend: {
      minWidth: {
        none: 'none',
        '4xs': '8rem',
        '3xs': '12rem',
        '2xs': '16rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem'
      },
      maxWidth: {
        '4xs': '8rem',
        '3xs': '12rem',
        '2xs': '16rem',
        tablet: '37.5rem', // 600px
        laptop: '62rem' // 992px
      },
      fontSize: {
        '4xs': '0.5625rem', // 9px
        '3xs': '0.625rem', // 10px
        '2xs': '0.6875rem' // 11px
      },
      width: {
        72: '18rem',
        80: '20rem',
        96: '24rem'
      }
    }
  },
  variants: {},
  plugins: []
}
