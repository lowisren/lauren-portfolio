export default {
    name: 'site-settings',
    type: 'document',
    title: 'Site Settings',
    // https://www.sanity.io/docs/experimental/ui-affordances-for-actions
   // __experimental_actions: [/* "create", "delete", */ 'update', 'publish'],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Site title',
      },
      {
        title: 'URL',
        name: 'url',
        type: 'url',
        description: 'The main site url. Used to create canonical url',
      },
      {
        name: 'frontpage',
        type: 'reference',
        description: 'Choose page to be the frontpage',
        to: { type: 'page' },
      },
      {
        title: 'Main Menu',
        name: 'mainMenu',
        description: 'Select pages for the top menu',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'page' }, { type: 'post' }],
          },
        ],
      },
      {
        title: 'Main navigation',
        name: 'mainNav',
        description: 'Select menu for main navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
      {
        title: 'Social navigation',
        name: 'socialNav',
        description: 'Select menu for social navigation',
        type: 'reference',
        to: {type: 'navigation'},
      },
    ],
  };