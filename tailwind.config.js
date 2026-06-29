module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px',
    },
    colors: ({ colors }) => ({
      grayLight: '#eeeeee', grayMedium: '#666666',
      inherit: colors.inherit, current: colors.current,
      transparent: colors.transparent, black: colors.black, white: colors.white,
      slate: '#111111', gray: '#222222', zinc: colors.zinc,
      red: colors.red, orange: '#ffb400', green: '#72b626',
      blue: colors.blue, indigo: colors.indigo, purple: colors.purple, pink: colors.pink,
    }),
    extend: {
      fontFamily: { poppins: ['Poppins', 'sans-serif'] },
      fontSize: {
        h1: ['2.625rem', { lineHeight: '3.25rem' }],
        h3: ['1.625rem', { lineHeight: '2.125rem' }],
      },
      boxShadow: { shadowTop: '0px -1px 10px rgba(0,0,0,0.2)' },
    },
  },
  plugins: [],
}
