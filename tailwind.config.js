module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      '2xs': '23.4375rem', // 375px
      xs: '30rem', // 480px
    },
    backgroundColor: theme => ({
      'light': '#ffffff',
      'dark': '#E9EAEC',
      'medium': '#DCDCDC'
    }),
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
        '6xl': '72rem',
      },
      fontSize: {
        '2xs': '0.5625rem' // 9px
      },
      textColor: {
        'light': '#333333',
        'light-secondary': '#7e7e7e',
        'dark': '#333333',
        'dark-secondary': '#777D88',
      }
    },
  },
  variants: {},
  plugins: [],
}
