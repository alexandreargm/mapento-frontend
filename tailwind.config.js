module.exports = {
  mode: 'jit',
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
      'b-light-secondary': '#efeff1',
      'b-dark': '#e7eaee',
      'b-medium': '#DCDCDC',
      't-light': '#212121',
      't-light-body': '#555555',
      't-light-secondary': '#757575',
      't-dark': '#212121',
      't-dark-secondary': '#737c8c',
      't-dark-body': '#5c6370',
      brand: '#3B7AF7',
      black: '#000000',
      white: '#ffffff'
    },
    flexGrow: {
      0: 0,
      1: 1,
      2: 2
    },
    fontSize: {
      '4xs': '0.5625rem', // 9px
      '3xs': '0.625rem', // 10px
      '2xs': '0.6875rem', // 11px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2rem', // 32px
      '5xl': '2.25rem', // 36px
      '6xl': '3rem', // 48px
      '7xl': '4rem', // 64px
      '8xl': '4.5rem', // 72px
      '9xl': '6rem' // 96px
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
        'tablet-landscape': '48rem', // 768
        laptop: '62rem' // 992px
      },
      lineHeight: {
        minimal: 1.15
      },
      width: {
        72: '18rem',
        80: '20rem',
        96: '24rem'
      },
      borderWidth: {
        1: '1px'
      }
    }
  },
  variants: {},
  plugins: [],
  corePlugins: {
    container: false
  }
}
