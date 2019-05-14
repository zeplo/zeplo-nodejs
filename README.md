# Zeplo Node.js Library

[![Build Status](https://travis-ci.org/zeplo/zeplo-nodejs.svg?branch=master)](https://travis-ci.org/zeplo/zeplo-nodejs) [![Coverage Status](https://coveralls.io/repos/github/zeplo/zeplo-nodejs/badge.svg?branch=master)](https://coveralls.io/github/zeplo/zeplo-nodejs?branch=master)

Official NodeJS client for [Zeplo](https://zeplo.io). The library provides convenient access to the Zeplo API and other helper functions.

Please only use this with server-side Node as it uses your Zeplo namespace token (which should never be publicly revealed).

Install with:

```js
npm install @zeplo/nodejs
```


## API

The API allows either Promise or callbacks to be used.

### zeplo.fn (asyncCallback)

This helper fn turns your serverless function into a HTTP server. Requests passed to the server will be passed to the function you define - the request `body` will be passed (if json is detected it will be parsed) as `data`. `context` is derived from various headers. The server will expose a port defined by PORT environment variable.

You could choose to expose your own server, but for simple cases this helper can be much clearner. 

```js
import zeplo from '@zeplo/nodejs'

zeplo.func(async (data, context) => {
  // Process data (this is just the HTTP body 😉)
  return 'OK'
})
```

### zeplo.http (asyncCallback)

A basic http server - use tthis instead of `zeplo.func` if you would prefer to access/process the raw request. There are the following helper sub-methods for helping to parse `zeplo.http`:

 * `zeplo.http.text(req)` - parses a request and returns a promise that resolves to string (utf8) body
 * `zeplo.http.json(req)` - parses a request and returns a promise that resolves to JSON body (or throws an error)
 * `zeplo.http.buffer(req)` - parses a request and returns a promise that resolves to a Buffer of the body

The server will expose a port defined by PORT environment variable.

```js
import zeplo from '@zeplo/nodejs'

zeplo.http(async (req, res) => {
  // Process data (this is just the HTTP body 😉)
  const body = await zeplo.http.text(req)
  return 'OK'
})
```


