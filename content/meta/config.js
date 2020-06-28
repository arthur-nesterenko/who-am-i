const colors = require( '../../src/assets/theme/colors' );

module.exports = {
  siteTitle: 'Arthur\'s Personal Blog.',
  shortSiteTitle: 'Arthur\'s Blog.', // <title> ending for posts and pages
  siteDescription: 'It\'s the place where I share my thoughts.',
  siteUrl: 'https://arthur-nesterenko.github.io',
  pathPrefix: '/',
  siteImage: '',
  siteLanguage: 'en',
  // author
  authorName: 'arthur nesterenko',
  authorTwitterAccount: 'arthurnstr',
  // info
  infoTitle: 'arthur nesterenko',
  infoTitleNote: 'personal blog',
  // manifest.json
  manifestName: 'PersonalBlog - a blog starter for GatsbyJS',
  manifestShortName: 'PersonalBlog', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: colors.primary,
  manifestThemeColor: colors.primary,
  manifestDisplay: 'standalone',
  organization: 'Arthur Nesterenko',
  // contact
  contactEmail: 'arthur.nesterenko.dev@gmail.com',
  // social
  authorSocialLinks: [
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      nickname: 'arthurnstr',
    },
    {
      nickname: 'arthur-nesterenko',
      url: 'https://github.com/',
      name: 'Github',
    },
    {
      url: 'https://www.linkedin.com/in/',
      nickname: 'arthur-nesterenko',
      name: 'Linkedin',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/',
      nickname: '5380164/arthur',
    },
    {
      name: 'Envelope',
      nickname: 'arthur.nesterenko.dev@gmail.com',
      url: 'mailto:',
    },
  ],
};
