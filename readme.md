# React-ESC-Storage ![https://img.shields.io/npm/v/react-resolver.svg](https://img.shields.io/npm/v/react-esc-storage.svg?style=flat-square) [![](https://img.shields.io/github/issues-raw/tripss/react-esc-storage.svg?style=flat-square)](https://github.com/tripss/react-esc-storage/issues) [![](https://img.shields.io/david/tripss/react-esc-storage.svg?style=flat-square)](https://david-dm.org/tripss/react-esc-storage#info=dependencies)

> Storage tool for React applications

React ESC Storage let's you **get and set cookies, local and session storage** in a easy to use way for client and and server

For example, setting a cookie, session or local storage.
```js
import Storage from 'react-esc-storage'

Storage.set(Storage.COOKIE, 'token', { cookie: 'cookie content' })
Storage.set(Storage.SESSION, 'token', 'SESSION')
Storage.set(Storage.LOCAL, 'token', { local: true })
```
Objects will be automatically stringified when setting and parsed back when getting. 
- - -

Making the **Cookie Storage** available on the server. [Click here for an example](https://github.com/TriPSs/react-esc/blob/master/src/client/server.js#L38)
```js
import CookieStorage from 'react-esc-storage/CookieStorage'

match({ history, routes, location: ctx.req.url }, async(err, redirect, props) => {
         
  // Add Cookie to global so we can use it in the Storage module
  global.cookie = new CookieStorage(ctx.cookies)

})
```

Making the **Storage** available on the client. [Click here for an example](https://github.com/TriPSs/react-esc/blob/master/src/client/index.js#L56)
```js
import Storage from 'react-esc-storage'

match({ history, routes }, (error, redirectLocation, renderProps) => {
  
  // Checks if the Cookie storage is available, if not it will create it
  Storage.check()
  
})
```

### Installation
```shell
$ npm install --save react-esc-storage
```


## Development

If you'd like to contribute to this project, all you need to do is clone
this project and run:

```shell
$ npm install
```

## [License][https://github.com/tripss/react-esc-storage/blob/master/LICENSE]

> Internet Systems Consortium license
> ===================================
>
> The MIT License (MIT)
>  
> Copyright (c) 2015 David Zukowski
>  
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>  
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>  
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

## Collaboration

If you have questions or issues, please [open an issue][issue]!