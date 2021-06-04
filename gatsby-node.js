const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const  allCharactersIds = [];
  const { data } = await graphql(`
    query MyQuery {
      RickAndMorty {
        characters {
          info {
            count
            pages
          }
        }
      }
    }      
  `)

  const {count: totalNumberOfCharacters, pages: totalNumberOfPages} = data.RickAndMorty.characters.info;

  for (let i = 1; i <= totalNumberOfPages; i++) {
    actions.createPage({
      path: '/pages/' + i,
      component: path.resolve('./src/templates/page.js'),
      context: { page: i }
    })
  }

  for (let i = 1; i <= totalNumberOfCharacters; i++) {
    allCharactersIds.push(i);
    actions.createPage({
      path: '/characters/' + i,
      component: path.resolve('./src/templates/character-details.js'),
      context: { slug: i }
    })
  }

  actions.createPage({
    path: '/search',
    component: path.resolve('./src/templates/search.js'),
    context: {charactersIds: allCharactersIds},
  })

}