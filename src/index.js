/**
 * Created by tycho on 14/02/2017.
 */
import CookieStorage from './CookieStorage'

export class Storage {

  COOKIE  = 'cookie'
  LOCAL   = 'local'
  SESSION = 'session'

  check = () => {
    if (!global.hasOwnProperty('cookie')) {
      global.cookie = new CookieStorage(document.cookie, true)
    }
  }

  get = (storageType, name, options = {}) => {
    let get = null

    if (storageType === this.COOKIE) {
      if (global.hasOwnProperty('cookie'))
        get = global.cookie.get(name, options)

    } else if (this.supportsStorage() && window.hasOwnProperty(`${storageType}Storage`))
      get = window[`${storageType}Storage`][name]

    if (get)
      return JSON.parse(get)

    return get
  }

  set = (storageType, name, value, options = {}) => {
    let stringValue = JSON.stringify(value)

    if (storageType === this.COOKIE) {
      if (global.hasOwnProperty('cookie'))
        global.cookie.set(name, stringValue, options)

    } else if (this.supportsStorage() && global.hasOwnProperty(`${storageType}Storage`))
      window[`${storageType}Storage`][name] = stringValue
  }

  has = (storageType, name, options = {}) => {
    if (storageType === this.COOKIE) {
      if (global.hasOwnProperty('cookie'))
        return global.cookie.has(name, options)

    } else if (this.supportsStorage() && window.hasOwnProperty(`${storageType}Storage`))
      return window[`${storageType}Storage`].hasOwnProperty(name)
  }

  supportsStorage = () => {
    return typeof localStorage  !== 'undefined' && typeof sessionStorage  !== 'undefined'
  }

}

export default new Storage()