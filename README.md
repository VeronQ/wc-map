# wc-map

> Light and easy-to-use Web Component for Google Maps

[![npm version](https://badge.fury.io/js/wc-map.svg)](https://npmjs.org/package/wc-map "View this project on npm")
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/VeronQ/wc-map/blob/master/LICENSE)

![Demo CLI](../assets/screenshot.png?raw=true)

## Installation

```sh
$ npm install wc-map
```

## Usage

###### JS

```js
const WCMap = require('wc-map');

// Enter API key
WCMap('AIzaSyChANyXQKGAi3RRnf0aJ_ZWbstMTgsSV4A');
```

###### HTML

```html
<x-map lat="48.8606" lng="2.3376" zoom="4"></x-map>
```

## API

### WCMap(apiKey, {options}?)

```js
WCMap('AIzaSyChANyXQKGAi3RRnf0aJ_ZWbstMTgsSV4A', {
  version: '3.37',
  language: 'fr'
});
```

#### apiKey (required)

Type: `string`  

Api key for Google Maps authentification.

#### Options

Type:  `object`

#### version

Type: `string` | `number`  
Default: `weekly`  
Values: `weekly` | `quarterly` | Version number specified as `n.nn`

Version of the API.

#### Language

Type: `string`  
Values: `en` | `fr` | `zh` | etc...

Change the default language settings. 

> By default, the Maps JavaScript API uses the user's preferred language setting as specified in the browser, when displaying textual information such as the names for controls, copyright notices, driving directions and labels on maps.
>
> -- <cite>Google Maps JavaScript API</cite>

[List of supported languages](https://developers.google.com/maps/faq#languagesupport)

### <x-map[attributes]></x-map>

None of the following attributes are required.  
An empty `<x-map>` tag will point directly to the magnificient Sydney Opera House ✨

#### lat

Type: `number`  
Default: `-33.8567844`

#### lng

Type:`number`  
Default: `151.213108`

#### zoom

Type: `number`  
Default: `8`

#### Default inline style

```css
width: 100%;
min-height: 400px;
display: block;
```

These styles can be overridden by using the `x-map` CSS selector.

## Related

* [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/tutorial)
* [Official Google Maps Web Components](https://github.com/GoogleWebComponents/google-map)
* [A note about Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

## Support

See current [support for Custom Elements](https://caniuse.com/#feat=custom-elementsv1).  
(**89.78%** as of February 6, 2020)

## License

[MIT](https://github.com/VeronQ/wc-map/blob/master/LICENSE)
