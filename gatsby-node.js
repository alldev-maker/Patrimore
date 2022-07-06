const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const queryResults = await graphql(`
    {
      allPrismicBlogPost {
        nodes {
          id
          url
        }
      }
    }
  `)

  queryResults.data.allPrismicBlogPost.nodes.forEach(page => {
    createPage({
      path: page.url,
      component: path.resolve("src/templates/blog-post.jsx"),
      context: {
        id: page.id,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}