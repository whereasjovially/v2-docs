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
          text: 'Overview',
          link: '/validator/overview',
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
      text: 'Validator Quickstart',
      link: '/validator-quickstart',
    },
    {
      text: 'API Specification',
      link: '/api-specification',
    },
  ],
})
