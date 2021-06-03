module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "rickandmorty",
        fieldName: "RickAndMorty",
        url: "https://rickandmortyapi.com/graphql",
      },
    },
  ],
}
