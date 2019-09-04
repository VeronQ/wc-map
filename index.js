'use strict'

const GOOGLE_MAPS_URL = 'https://maps.googleapis.com/maps/api/js'

const defaultOptions = {
  VERSION: 'weekly'
}

const defaultAttributes = {
  LAT: -33.8567844,
  LNG: 151.213108,
  ZOOM: 8
}

const mapStyle = {
  width: '100%',
  minHeight: '400px',
  display: 'block'
}

const loadGoogleMapsScript = (apiKey, options) => new Promise((resolve) => {
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = createUrl(apiKey, options)
  script.async = true
  script.defer = true
  script.onload = resolve
  document.head.appendChild(script)
})

const createUrl = (apiKey, options) => {
  let params = ''
  const auth = ['key', apiKey].join('=')
  const version = ['v', options.version].join('=')
  params += [auth, version].join('&')

  if ('language' in options) {
    params += `&language=${options.language}`
  }

  return [GOOGLE_MAPS_URL, params].join('?')
}

const WCMap = (apiKey, options) => {
  options = {
    version: defaultOptions.VERSION,
    ...options
  };

  (async () => {
    await loadGoogleMapsScript(apiKey, options)

    class XMap extends HTMLElement {
      constructor () {
        super()
        this.lat = defaultAttributes.LAT
        this.lng = defaultAttributes.LNG
        this.zoom = defaultAttributes.ZOOM
      }

      static get observedAttributes () {
        return ['lng', 'lat', 'zoom']
      }

      attributeChangedCallback (attrName, oldVal, newVal) {
        this[attrName] = parseFloat(newVal)
      }

      connectedCallback () {
        Object.assign(this.style, mapStyle)
        // eslint-disable-next-line no-undef
        const position = new google.maps.LatLng(
          parseFloat(this.lat),
          parseFloat(this.lng)
        )

        // eslint-disable-next-line no-undef
        const map = new google.maps.Map(this, {
          zoom: this.zoom,
          center: position
        })

        // eslint-disable-next-line no-undef
        new google.maps.Marker({
          position,
          map
        })
      }
    }

    window.customElements.define('x-map', XMap)

  })()
}

module.exports = WCMap
module.exports.default = WCMap
