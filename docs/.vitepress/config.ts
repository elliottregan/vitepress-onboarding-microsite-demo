import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'en-US',
  title: 'Solar Sprinters',
  description: 'Frontend team onboarding and documentation',

  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'Team', link: '/team' },
      { text: 'Technology', link: '/technology' },
      { text: 'Architecture', link: '/architecture' },
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Our Team', link: '/team' },
        ],
      },
      {
        text: 'Onboarding',
        items: [
          { text: 'Week 1: Setup', link: '/onboarding/week-1' },
          { text: 'Week 2: Learning', link: '/onboarding/week-2' },
          { text: 'Week 3: Shadowing', link: '/onboarding/week-3' },
          { text: 'Week 4: Contributing', link: '/onboarding/week-4' },
        ],
      },
      {
        text: 'Our Product',
        items: [
          { text: 'Features', link: '/product/features' },
          { text: 'Architecture', link: '/architecture' },
        ],
      },
      {
        text: 'Technical Stack',
        items: [
          { text: 'Core Technologies', link: '/technology' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],

    search: {
      provider: 'local',
    },
  },
});
