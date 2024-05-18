/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}", "index.html"],
  theme: {
    extend: {
      fontFamily : {
        'contrail': ['Contrail One', 'sans-serif'],
        'kode': ['Kode Mono', 'monospace'],
      },
      colors: {
        bgColor: '#F3AF48',
        buttonColor: '#D48918',
        textColor: "#FFFFFF",
        lineColor: "#B46D03",
        redirectColor: "#B46D03"
      }
    },
  },
  plugins: [],

}

