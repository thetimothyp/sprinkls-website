module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Sprinkls",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        // https://us5.admin.mailchimp.com/lists/integration/embeddedcode?id=494808
        endpoint: 'https://gmail.us5.list-manage.com/subscribe/post?u=9da2f98d0a31a22f470675b9c&amp;id=fb55288500',
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    }
  ],
};
