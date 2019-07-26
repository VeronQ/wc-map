# wc-map

> Light and easy-to-use Web Component for Google Maps

[![npm version](https://badge.fury.io/js/wc-map.svg)](https://npmjs.org/package/wc-map "View this project on npm")
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/VeronQ/wc-map/blob/master/LICENSE)

## Installation

```sh
$ npm install wc-map
```

## Usage

###### JS

```js
const WCMap = require('wc-map');

WCMap('AIzaSyC...'); // Enter API key or Client ID
```

###### HTML

```html
<x-map lat="48.8606" lng="2.3376" zoom="4"></x-map>
```

## API

### WCMap(authValue, {options}?)

```js
WCMap('AIzaSyC...', {
  auth: 'api_key',
  version: '3.37',
  language: 'fr'
});
```

#### authValue (required)

Type: `string`  

Api key or Client ID for Google Maps authentification.

#### Options

Type:  `object`

##### auth

Type: `string`  
Default: `api_key`  
Values: `api_key` | `client_id`

Method used to authenticate to Google Maps services.

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

## License

MIT
