/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        navcolor: "#cf4859",
        navright: "#cf4859",
        maintop: "#cb4658",
        mainbottom: "#d14859",
        mainbutton: "#1dbf73",
        skillsintro: "#be5272",
        skillsheading: " #404145",
        skillstext: "#7a7d85",
        skillsbg: "#fafafa",
        hcolor: "#249045",
      },
      keyframes: {
        updown: {
          '0%':{transform: 'translateY(-20px)'},
          '50%':{transform: 'translateY(20px)'},
          '100%':{transform: 'translateY(-20px)'},
        }
      },
      animation:{
        'astronaut': 'updown 3s linear infinite'
      }
    },
    screens: {
      'pr':'960px'
    }
  },
  plugins: [],
};
