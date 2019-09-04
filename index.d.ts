declare namespace WCMap {

  interface Channels {
    readonly version: 'weekly' | 'quarterly'
  }

  interface Language {
    readonly language:
      'af'
    | 'sq'
    | 'am'
    | 'ar'
    | 'hy'
    | 'az'
    | 'eu'
    | 'be'
    | 'bn'
    | 'bs'
    | 'bg'
    | 'my'
    | 'ca'
    | 'zh'
    | 'zh-CN'
    | 'zh-HK'
    | 'zh-TW'
    | 'hr'
    | 'cs'
    | 'da'
    | 'nl'
    | 'en'
    | 'en-AU'
    | 'en-GB'
    | 'et'
    | 'fa'
    | 'fi'
    | 'fil'
    | 'fr'
    | 'fr-CA'
    | 'gl'
    | 'ka'
    | 'de'
    | 'el'
    | 'gu'
    | 'iw'
    | 'hi'
    | 'hu'
    | 'is'
    | 'id'
    | 'it'
    | 'ja'
    | 'kn'
    | 'kk'
    | 'km'
    | 'ko'
    | 'ky'
    | 'lo'
    | 'lv'
    | 'lt'
    | 'mk'
    | 'ms'
    | 'ml'
    | 'mr'
    | 'mn'
    | 'ne'
    | 'no'
    | 'pl'
    | 'pt'
    | 'pt-BR'
    | 'pt-PT'
    | 'pa'
    | 'ro'
    | 'ru'
    | 'sr'
    | 'si'
    | 'sk'
    | 'sl'
    | 'es'
    | 'es-419'
    | 'sw'
    | 'sv'
    | 'ta'
    | 'te'
    | 'th'
    | 'tr'
    | 'uk'
    | 'ur'
    | 'uz'
    | 'vi'
    | 'zu'
  }

  interface Options {
    /**
     Version of the API.
     @default 'weekly'
     @see https://developers.google.com/maps/documentation/javascript/versions
     */
    readonly version?: Channels | number,

    /**
     Language settings.
     @summary change names for controls, copyright notices, driving directions and labels on map
     @see https://developers.google.com/maps/documentation/javascript/localization#Language
     */
    readonly language?: Language,
  }
}

declare function WCMap(apiKey: string, options?: WCMap.Options): void;

export = WCMap;
