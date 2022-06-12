module.exports = {
  siteMetadata: {
    title: `portfolio-pees`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "e67639407efa38257ebca8488ab9e9"
    }
  }, "gatsby-plugin-styled-components", ]
};