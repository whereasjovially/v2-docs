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
          text: 'Quickstart',
          link: '/validator/quickstart',
        },
        {
          text: 'Advanced Configuration',
          link: '/validator/advanced',
        },
        {
          text: 'Verify ',
          link: '/validator/troubleshooting',
        }
      ]
    },

    {
      text: 'Validator Quickstart',
      link: '/validator-quickstart',
    },
    {
      text: 'API Specification',
      link: '/api-specification',
    },
  ],
})
