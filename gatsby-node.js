const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allContentfulStore {
        edges {
          node {
            contentful_id
            name
            number
            category
            phone            
            slug
            body {
              raw
            }
            photo {
              url
            }
          }
        }
      }
    }
  `)
  if(result.errors) {
    console.log(`contentful data fail`)
    return
  }
  result.data.allContentfulStore.edges.forEach(({node})=>{
    createPage({
      path: `/store/${node.slug}`,
      component: require.resolve("./src/templates/store-template.js"),
      context: {
        store: node,
      },
      defer: true,
    })
  })  
}
