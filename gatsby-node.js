const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  for (let i = 1; i <= 34; i++) {
    actions.createPage({
      path: '/pages/' + i,
      component: path.resolve('./src/components/page.js'),
      context: { page: i }
    })
  }

  for (let i = 1; i <= 671; i++) {
    actions.createPage({
      path: '/characters/' + i,
      component: path.resolve('./src/components/character-details.js'),
      context: { id: i }
    })
  }

}