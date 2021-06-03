const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Characters {
        RickAndMorty {
        characters {
            results {
            name
            image
            id
            }
        }
        }
    }
  `)

  data.RickAndMorty.characters.results.forEach(character => {
    actions.createPage({
      path: '/characters/'+ character.id,
      component: path.resolve('./src/components/character-details.js'),
      context: { id: character.id }
    })
  })

}