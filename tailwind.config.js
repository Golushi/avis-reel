/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Indique à Tailwind où trouver les fichiers
  ],
  theme: {
    extend: {
      colors: {
        bleu: "#00ABC7", // Remplace par le code hexadécimal correct si besoin
        vert: "#C2D501", // Remplace par le code hexadécimal correct si besoin
      },
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [],
};
