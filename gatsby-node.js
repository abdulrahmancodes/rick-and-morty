const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const  allCharactersIds = [];

  for (let i = 1; i <= 34; i++) {
    actions.createPage({
      path: '/pages/' + i,
      component: path.resolve('./src/components/page.js'),
      context: { page: i }
    })
  }

  for (let i = 1; i <= 671; i++) {
    allCharactersIds.push(i);
    actions.createPage({
      path: '/characters/' + i,
      component: path.resolve('./src/components/character-details.js'),
      context: { id: i }
    })
  }

  actions.createPage({
    path: '/search',
    component: path.resolve('./src/components/search.js'),
    context: {charactersIds: allCharactersIds},
  })

}