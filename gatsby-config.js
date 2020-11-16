/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title: "Gatsby Tutorial",
    description: "This includes boilerplate Gatsby features",
    authour: "Akshay Shetty",
    data: ["item1", "item2"],
    person:{
      name: "Dylan Shetty",
      age: 5,

    }
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },


  ],
}
