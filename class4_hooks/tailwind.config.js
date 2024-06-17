/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-background': '#e3ecf1',
        'main-text': '#333',
        'container-background': '#eae4f0',
        'slider-background': '#ffffff',
        'slider-bar': '#8e3ead',
        'slider-thumb': '#8e3ead',
        'slider-thumb-border': '#ffffff',
        'checkbox-label-background': '#e5a3ff8f',
        'checkbox-label-shadow': 'rgba(162, 0, 255, 0.2)',
        'checkbox-background': '#ffffff00',
        'checkbox-border': '#555555',
        'checkbox-border-checked': '#8e3ead',
        'checkbox-slider': '#555555',
        'checkbox-slider-checked': '#8e3ead',
        'button-color': '#fff',
        'copy-button-background': '#8e3ead',
        'copy-button-disabled-background': '#ccc',
        'password-output-background': '#ffffff',
        'selection-background': '#8e3ead',
        'selection-text': '#fff',
        'vb-cyan': 'hsl(176, 100%, 44%)',
      },
      fontFamily: {
        spartan: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
