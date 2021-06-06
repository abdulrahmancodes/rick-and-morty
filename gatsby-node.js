const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const  allCharactersIds = [];
  const { data } = await graphql(`
    query MyCharacters {
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

  const {count: totalNumberOfCharacters} = data.RickAndMorty.characters.info;


  for (let i = 1; i <= totalNumberOfCharacters; i++) {
    allCharactersIds.push(i);
    actions.createPage({
      path: '/characters/' + i,
      component: path.resolve('./src/templates/character-details.js'),
      context: { slug: i }
    })
  }

}