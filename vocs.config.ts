import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate Docs',
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/interstate-labs'
    },
    {
      icon: 'telegram',
      link: 'https://t.me/+-i4dP7U2BggxMzAx'
    },
  ],
  sidebar: [
    {
      text: 'Intro',
      link: '/intro',
    },
    {
      text: 'For Validators',
      items: [
        {
          text: 'Benefits and Risks',
          link: '/validator/benefits-and-risks',
        },

        {
          text: 'Quickstart',
          link: '/validator/quickstart',
        },
        {
          text: 'Verify Setup',
          link: '/validator/verify',
        }
      ]
    },
    {
      text: 'For Users',
      items: [
        {
          text: 'Quickstart',
          link: '/user/quickstart',
        },
        {
          text: 'API Specification',
          link: '/user/api-specification',
        },
      ]
    }
  ],
})
