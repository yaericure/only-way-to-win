// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/only-way-to-win',
  integrations: [
    starlight({
      title: '致勝的唯一方法',
      description: '成就的虛假承諾之外,用品格打造新的記分卡,贏得真正值得的勝利。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css', './src/styles/sidebar-num.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        {
          label: '成就的虛假承諾',
          items: [
            { label: '一連串落空的承諾', slug: 'unit01' },
            { label: '我們是如何走到這一步的', slug: 'unit02' },
          ],
        },
        {
          label: '全新的表現記分卡',
          items: [
            { label: '呼喚新記分卡', slug: 'unit03' },
            { label: '品格的兩種類型', slug: 'unit04' },
            { label: '打造你的記分卡與鍛鍊品格肌肉', slug: 'unit05' },
          ],
        },
        {
          label: '品格的實踐',
          items: [
            { label: '工作從來不只是工作', slug: 'unit06' },
            { label: '商業領袖能向運動學到什麼', slug: 'unit07' },
            { label: '培養他人的道德品格', slug: 'unit08' },
          ],
        },
        {
          label: '帶著新記分卡重新追求成就',
          items: [
            { label: '釐清你對成就的認知敘事', slug: 'unit09' },
            { label: '用新記分卡贏得勝利', slug: 'unit10' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
