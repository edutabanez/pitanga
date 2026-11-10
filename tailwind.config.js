/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pitanga: {
          dark: '#23483C',     // Verde profundo - base e títulos
          green: '#568849',    // Verde folha - acentos botânicos
          red: '#DE493C',      // Vermelho pitanga - acento e CTA
          ivory: '#FFF9F0',    // Marfim de apoio - fundos claros
          light: '#F4EFE6',    // Marfim alternativo
          border: '#E3DDD3',   // Bordas suaves
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
