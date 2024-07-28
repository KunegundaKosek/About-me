module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xl2': '1340px',
        'xl': '1048px',
        'lg': '768px',
      },
      gridTemplateColumns: {
        '1fr-2fr': '1fr 2fr',
        '2fr-1fr': '2fr 1fr',
      },
      fontFamily: {
        nav: ['anonymousPro'],
        custom: ['montserrat'],
        text: ['poppins']
      },
      colors: {
        'gray': '#c1cad6',
        'lavender': '#d4adcf',
        'violet': '#856084',
        'green': '84e296',
        'platinum': 'dde1e4'
      }
    },
  },
  plugins: [],
}
