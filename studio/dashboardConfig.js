export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e15c83b180ce1a56805deba',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-iuweyj87',
                  apiId: '0a1b9057-96e0-46f5-94a8-14193830f32b'
                },
                {
                  buildHookId: '5e15c83c02528bd4849a32e8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ktniva74',
                  apiId: '11a6f3da-ccce-4c61-9a2e-b62b1521dc96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/umutergene/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ktniva74.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
