/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{vue,html,js}'],
  theme: {
    extend: {
      colors: {
        banana: {
          500: '#F4D04E'
        },
        bone: {
          500: '#6B6B6B',
          950: '#111111'
        }
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      },
      maxWidth: {
        'blog-card-mobile': '327px',
        'blog-card-desktop': '384px'
      },
      maxHeight: {
        'blog-card-mobile': '501px',
        'blog-card-desktop': '522px'
      },
      borderRadius: {
        card: '20px',
        article: '10px',
        learning: '4px'
      }
    }
  },
  plugins: []
}
