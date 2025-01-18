import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Interstate Docs',
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
          text: 'API Specification',
          link: '/api-specification',
        },
      ]
    }
  
  ],
})
