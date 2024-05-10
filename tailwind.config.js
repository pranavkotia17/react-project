/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
         "image": "url('/src/media/MicrosoftTeams-image (1).png')",
         "left": "url('/src/media/MicrosoftTeams-image.png')",
         "pencil": "url('/src/media/pencil-bg.jpg')"
         
         
          
         
      }


    },
  },
  plugins: [],
}