/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'valorant-wp': "url('/images/valorant-wp.jpg')",
        'pubg-wp': "url('/images/pubg-wp.jpg')",
        'anno1404-wp': "url('/images/anno1404-wp.jpg')",
        'discord-wp': "url('/images/discord-wp.jpg')",
      }
    },
  },
  plugins: [],
}
