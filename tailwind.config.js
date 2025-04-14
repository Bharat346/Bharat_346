module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        animation: {
          'water-drop': 'waterDrop 6s ease-in-out infinite',
        },
        keyframes: {
          waterDrop: {
            '0%, 100%': { 'border-radius': '60% 40% 30% 70% / 60% 30% 70% 40%' },
            '50%': { 'border-radius': '30% 60% 70% 40% / 50% 60% 30% 60%' },
          },
        },
      },
    },
    plugins: [],
  }