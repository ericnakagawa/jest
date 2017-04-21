/* eslint-disable sort-keys, max-len */

const React = require('React');

const githubButton = (
  <a
    className="github-button"
    href="https://github.com/facebook/jest"
    data-icon="octicon-star"
    data-count-href="/facebook/jest/stargazers"
    data-count-api="/repos/facebook/jest#stargazers_count"
    data-count-aria-label="# stargazers on GitHub"
    aria-label="Star facebook/jest on GitHub"
  >
    Star
  </a>
);

console.log('siteConfig loaded...');

/*
Many companies use Jest, so we can't list all of them in our showcase.
To be useful to someone looking through the showcase, the company must be
something that most readers would recognize, such as a funded startup or
public company.

To add your company, add your logo to the 'website/src/jest/img/logos' folder.
This asset should be at least 256 pixels wide. Then add an entry to the list
below using the following format:

{
  caption: 'Your Company Name',
  image: '/jest/img/logos/YourCompanyLogo.png',
  infoLink: 'https://yourcompany.com',
}
*/
const users = [
  {
    caption: 'Facebook',
    image: '/jest/img/logos/facebook.png',
    infoLink: 'https://code.facebook.com',
    pinned: true,
  },
  {
    caption: 'Oculus',
    image: '/jest/img/logos/oculus.png',
    infoLink: 'https://www.oculus.com/',
    pinned: true,
  },
  {
    caption: 'Instagram',
    image: '/jest/img/logos/instagram.png',
    infoLink: 'https://www.instagram.com/',
    pinned: true,
  },
  {
    caption: 'Twitter',
    image: '/jest/img/logos/twitter.png',
    infoLink: 'https://www.twitter.com',
    pinned: true,
  },
  {
    caption: 'Pinterest',
    image: '/jest/img/logos/pinterest.png',
    infoLink: 'https://www.pinterest.com',
    pinned: true,
  },
  {
    caption: 'The New York Times',
    image: '/jest/img/logos/nyt.png',
    infoLink: 'http://www.nytimes.com/',
    pinned: true,
  },
  {
    caption: 'IBM',
    image: '/jest/img/logos/ibm.png',
    infoLink: 'http://www.ibm.com/',
  },
  {
    caption: 'ebay',
    image: '/jest/img/logos/ebay.png',
    infoLink: 'http://www.ebay.com/',
  },
  {
    caption: 'PayPal',
    image: '/jest/img/logos/paypal.png',
    infoLink: 'https://www.paypal.com',
  },
  {
    caption: 'Spotify',
    image: '/jest/img/logos/spotify.png',
    infoLink: 'https://www.spotify.com',
  },
  {
    caption: 'Target',
    image: '/jest/img/logos/target.png',
    infoLink: 'http://www.target.com',
  },
  {
    caption: 'Intuit',
    image: '/jest/img/logos/intuit.png',
    infoLink: 'https://www.intuit.com/',
  },
  {
    caption: 'Cisco',
    image: '/jest/img/logos/cisco.png',
    infoLink: 'http://www.cisco.com/',
  },
  {
    caption: 'Algolia',
    image: '/jest/img/logos/algolia.svg',
    infoLink: 'https://algolia.com',
  },
  {
    caption: 'Artsy',
    image: '/jest/img/logos/artsy.png',
    infoLink: 'https://www.artsy.net/',
  },
  {
    caption: 'Audiense',
    image: '/jest/img/logos/audiense.png',
    infoLink: 'https://audiense.com/',
  },
  {
    caption: 'Automattic',
    image: '/jest/img/logos/automattic.png',
    infoLink: 'https://automattic.com/',
  },
  {
    caption: 'Coinbase',
    image: '/jest/img/logos/coinbase.png',
    infoLink: 'https://www.coinbase.com/',
  },
  {
    caption: 'Coursera',
    image: '/jest/img/logos/coursera.png',
    infoLink: 'https://coursera.org/',
  },
  {
    caption: 'Deezer',
    image: '/jest/img/logos/deezer.png',
    infoLink: 'https://www.deezer.com/',
  },
  {
    caption: 'Discord',
    image: '/jest/img/logos/discord.png',
    infoLink: 'https://discordapp.com/',
  },
  {
    caption: 'Egghead',
    image: '/jest/img/logos/egghead.png',
    infoLink: 'https://egghead.io/',
  },
  {
    caption: 'Elastic',
    image: '/jest/img/logos/elastic.png',
    infoLink: 'https://www.elastic.co/',
  },
  {
    caption: 'Formidable',
    image: '/jest/img/logos/formidablelabs.png',
    infoLink: 'http://formidable.com/',
  },
  {
    caption: 'Globo',
    image: '/jest/img/logos/globo.png',
    infoLink: 'http://www.globo.com/',
  },
  {
    caption: 'Help.com',
    image: '/jest/img/logos/Help-Clean.png',
    infoLink: 'https://help.com',
  },
  {
    caption: 'Hudl',
    image: '/jest/img/logos/hudl.png',
    infoLink: 'https://www.hudl.com/',
  },
  {
    caption: 'Intercom',
    image: '/jest/img/logos/intercom.png',
    infoLink: 'https://www.intercom.com/',
  },
  {
    caption: 'Jane',
    image: '/jest/img/logos/jane.svg',
    infoLink: 'https://jane.com',
  },
  {
    caption: 'Kickstarter',
    image: '/jest/img/logos/kickstarter.png',
    infoLink: 'https://www.kickstarter.com',
  },
  {
    caption: 'KLM Royal Dutch Airlines',
    image: '/jest/img/logos/klm.png',
    infoLink: 'https://www.klm.com/',
  },
  {
    caption: 'NHL',
    image: '/jest/img/logos/nhl.png',
    infoLink: 'https://www.nhl.com/',
  },
  {
    caption: 'Quiqup',
    image: '/jest/img/logos/quiqup.png',
    infoLink: 'https://www.quiqup.com/',
  },
  {
    caption: 'Reddit',
    image: '/jest/img/logos/reddit.png',
    infoLink: 'https://www.reddit.com/',
  },
  {
    caption: 'SeatGeek',
    image: '/jest/img/logos/seatgeek.png',
    infoLink: 'https://seatgeek.com/',
  },
  {
    caption: 'SoundCloud',
    image: '/jest/img/logos/soundcloud.png',
    infoLink: 'https://soundcloud.com/',
  },
  {
    caption: 'Sprout Social',
    image: '/jest/img/logos/sproutsocial.png',
    infoLink: 'https://sproutsocial.com/',
  },
  {
    caption: 'Trivago',
    image: '/jest/img/logos/trivago.png',
    infoLink: 'http://www.trivago.com/',
  },
  {
    caption: 'Truffls',
    image: '/jest/img/logos/truffls.png',
    infoLink: 'https://truffls.com/',
  },
  {
    caption: 'WOW air',
    image: '/jest/img/logos/wowair.png',
    infoLink: 'https://wowair.com/',
  },
  {
    caption: 'Xing',
    image: '/jest/img/logos/xing.png',
    infoLink: 'https://www.xing.com/',
  },
];

const siteConfig = {
  title: 'Jest',
  url: 'https://facebook.github.io',
  baseUrl: '/jest/',
  repo: 'facebook/jest',
  githubButton,
  users,
};

// load, parse, and filter only selected languages
const languages = require('./languages.js');

const enabledLanguages = [];
languages.filter(lang => lang.enabled).map(lang => {
  enabledLanguages.push(lang);
});
siteConfig['languages'] = enabledLanguages;

siteConfig['en'] = require('./i18n/en.js');
siteConfig['af'] = require('./i18n/af.js');
siteConfig['ar'] = require('./i18n/ar.js');
siteConfig['bs-BA'] = require('./i18n/bs-BA.js');
siteConfig['ca'] = require('./i18n/ca.js');
siteConfig['cs'] = require('./i18n/cs.js');
siteConfig['da'] = require('./i18n/da.js');
siteConfig['de'] = require('./i18n/de.js');
siteConfig['el'] = require('./i18n/el.js');
siteConfig['es-ES'] = require('./i18n/es-ES.js');
siteConfig['fa-IR'] = require('./i18n/fa-IR.js');
siteConfig['fi'] = require('./i18n/fi.js');
siteConfig['fr'] = require('./i18n/fr.js');
siteConfig['he'] = require('./i18n/he.js');
siteConfig['hu'] = require('./i18n/hu.js');
siteConfig['id-ID'] = require('./i18n/id-ID.js');
siteConfig['it'] = require('./i18n/it.js');
siteConfig['ja'] = require('./i18n/ja.js');
siteConfig['ko'] = require('./i18n/ko.js');
siteConfig['mr-IN'] = require('./i18n/mr-IN.js');
siteConfig['nl'] = require('./i18n/nl.js');
siteConfig['no-NO'] = require('./i18n/no-NO.js');
siteConfig['pl'] = require('./i18n/pl.js');
siteConfig['pt-PT'] = require('./i18n/pt-PT.js');
siteConfig['pt-BR'] = require('./i18n/pt-BR.js');
siteConfig['ro'] = require('./i18n/ro.js');
siteConfig['ru'] = require('./i18n/ru.js');
siteConfig['sk-SK'] = require('./i18n/sk-SK.js');
siteConfig['sr'] = require('./i18n/sr.js');
siteConfig['sv-SE'] = require('./i18n/sv-SE.js');
siteConfig['tr'] = require('./i18n/tr.js');
siteConfig['uk'] = require('./i18n/uk.js');
siteConfig['vi'] = require('./i18n/vi.js');
siteConfig['zh-Hans'] = require('./i18n/zh-Hans.js');
siteConfig['zh-Hant'] = require('./i18n/zh-Hant.js');

module.exports = siteConfig;
