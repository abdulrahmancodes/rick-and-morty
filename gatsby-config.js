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

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    // flags: {
    //   THE_FLAG: false
    // }
  ],
}
