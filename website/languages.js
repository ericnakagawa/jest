/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 */
const languages = [
  {
    accept_languages: ['ja'],
    enabled: false,
    name: '日本語',
    tag: 'ja'
  },
  {
    accept_languages: [
      'en',
      'en-au',
      'en-bz',
      'en-nz',
      'en-tt',
      'en-us',
      'en-za'
    ],
    enabled: true,
    name: 'English',
    tag: 'en'
  },
  {
    accept_languages: [
      'ar-ae',
      'ar-bh',
      'ar-dz',
      'ar-eg',
      'ar-iq',
      'ar-jo',
      'ar-kw',
      'ar-lb',
      'ar-ly',
      'ar-ma',
      'ar-om',
      'ar-qa',
      'ar-sa',
      'ar-sy',
      'ar-tn',
      'ar-ye'
    ],
    enabled: false,
    name: 'العربية',
    tag: 'ar'
  },
  {
    accept_languages: ['bs-BA'],
    enabled: false,
    name: 'Bosanski',
    tag: 'bs-BA'
  },
  {
    accept_languages: ['ca'],
    enabled: false,
    name: 'Català',
    tag: 'ca'
  },
  {
    accept_languages: ['cs'],
    enabled: false,
    name: 'Čeština',
    tag: 'cs'
  },
  {
    accept_languages: ['da'],
    enabled: false,
    name: 'Dansk',
    tag: 'da'
  },
  {
    accept_languages: ['de', 'de-at', 'de-ch', 'de-li', 'de-lu'],
    enabled: false,
    name: 'Deutsch',
    tag: 'de'
  },
  {
    accept_languages: ['el'],
    enabled: false,
    name: 'Ελληνικά',
    tag: 'el'
  },
  {
    accept_languages: [
      'es',
      'es-ar',
      'es-bo',
      'es-cl',
      'es-co',
      'es-cr',
      'es-do',
      'es-ec',
      'es-gt',
      'es-hn',
      'es-mx',
      'es-ni',
      'es-pa',
      'es-pe',
      'es-pr',
      'es-py',
      'es-sv',
      'es-uy',
      'es-ve'
    ],
    enabled: false,
    name: 'Español',
    tag: 'es-ES'
  },
  {
    accept_languages: ['fa', 'fa-IR'],
    enabled: false,
    name: 'فارسی',
    tag: 'fa-IR'
  },
  {
    accept_languages: ['fi'],
    enabled: false,
    name: 'Suomi',
    tag: 'fi'
  },
  {
    accept_languages: ['fr', 'fr-be', 'fr-ca', 'fr-ch', 'fr-lu'],
    enabled: false,
    name: 'Français',
    tag: 'fr'
  },
  {
    accept_languages: ['he'],
    enabled: false,
    name: 'עִברִית',
    tag: 'he'
  },
  {
    accept_languages: ['hu', 'hu-HU'],
    enabled: false,
    name: 'Magyar',
    tag: 'hu'
  },
  {
    accept_languages: ['id'],
    enabled: false,
    name: 'Bahasa Indonesia',
    tag: 'id-ID'
  },
  {
    accept_languages: ['it', 'it-ch'],
    enabled: false,
    name: 'Italiano',
    tag: 'it'
  },
  {
    accept_languages: ['af'],
    enabled: false,
    name: 'Afrikaans',
    tag: 'af'
  },
  {
    accept_languages: ['ko'],
    enabled: false,
    name: '한국어',
    tag: 'ko'
  },
  {
    accept_languages: ['mr'],
    enabled: false,
    name: 'मराठी',
    tag: 'mr-IN'
  },
  {
    accept_languages: ['nl', 'nl-be'],
    enabled: false,
    name: 'Nederlands',
    tag: 'nl'
  },
  {
    accept_languages: ['no', 'no-NO'],
    enabled: false,
    name: 'Norsk',
    tag: 'no-NO'
  },
  {
    accept_languages: ['pl'],
    enabled: false,
    name: 'Polskie',
    tag: 'pl'
  },
  {
    accept_languages: ['pt'],
    enabled: false,
    name: 'Português',
    tag: 'pt-PT'
  },
  {
    accept_languages: ['pt-br'],
    enabled: false,
    name: 'Português (Brasil)',
    tag: 'pt-BR'
  },
  {
    accept_languages: ['ro'],
    enabled: false,
    name: 'Română',
    tag: 'ro'
  },
  {
    accept_languages: ['ru', 'ru-mo'],
    enabled: false,
    name: 'Русский',
    tag: 'ru'
  },
  {
    accept_languages: ['sk'],
    enabled: false,
    name: 'Slovenský',
    tag: 'sk-SK'
  },
  {
    accept_languages: ['sr'],
    enabled: false,
    name: 'Српски језик (Ћирилица)',
    tag: 'sr'
  },
  {
    accept_languages: ['sv', 'sv-fi'],
    enabled: false,
    name: 'Svenska',
    tag: 'sv-SE'
  },
  {
    accept_languages: ['tr'],
    enabled: false,
    name: 'Türkçe',
    tag: 'tr'
  },
  {
    accept_languages: ['uk'],
    enabled: false,
    name: 'Українська',
    tag: 'uk'
  },
  {
    accept_languages: ['vi'],
    enabled: false,
    name: 'Tiếng Việt',
    tag: 'vi'
  },
  {
    accept_languages: ['zh-cn', 'zh-hk', 'zh-sg', 'zh-tw'],
    enabled: false,
    name: '中文',
    tag: 'zh-Hans'
  },
  {accept_languages: ['zh-Hant'], enabled: false, name: '繁體中文', tag: 'zh-Hant'}
];
module.exports = languages;
