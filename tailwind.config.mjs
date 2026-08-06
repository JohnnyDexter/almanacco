/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['bg-forest', 'bg-brass', 'bg-terracotta', 'bg-ivory', 'text-forest', 'text-brass'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F1E6',
        charcoal: '#252321',
        forest: '#244536',
        brass: '#B08D57',
        terracotta: '#B8654B',
        stone: '#D9CBB8',
        porcelain: '#FFFDF8'
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', 'serif'],
        body: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 24px 80px rgba(37, 35, 33, 0.10)',
        editorial: '0 36px 100px rgba(36, 69, 54, 0.16)'
      },
      letterSpacing: {
        luxury: '0.32em'
      }
    }
  }
};
