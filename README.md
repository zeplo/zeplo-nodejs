# Zeplo Node.js Library

[![Build Status](https://travis-ci.org/zeplo/zeplo-nodejs.svg?branch=master)](https://travis-ci.org/Taskbird/taskbird-node) [![Coverage Status](https://coveralls.io/repos/github/Taskbird/zeplo-nodejs/badge.svg?branch=master)](https://coveralls.io/github/Taskbird/taskbird-node?branch=master)

Official NodeJS client for [Zeplo](https://zeplo.io). The library provides convenient access to the Zeplo API and other helper functions.

Please only use this with server-side Node as it uses your Zeplo namespace token (which should never be publicly revealed).

Install with:

```js
npm install @zeplo/nodejs
```


## API

The API allows either Promise or callbacks to be used.

### zeplo.fn (asyncCallback)

Wraps a http server around your code, allowing you to create event processors more easily.

```js
import zeplo from 'zeplo'

zeplo.func(async (data, context) => {
  // Process data (this is just the HTTP body 😉)
  return 'OK'
})
```

### zeplo.http (asyncCallback)

A very basic http server, if you would prefer to access the raw request. There are the following helper sub-methods for `zeplo.http`:

 * `zeplo.http.text(req)` - parses a request and returns a promise that resolves to string (utf8) body
 * `zeplo.http.json(req)` - parses a request and returns a promise that resolves to JSON body (or throws an error)
 * `zeplo.http.buffer(req)` - parses a request and returns a promise that resolves to a Buffer of the body

```js
import zeplo from 'zeplo'

zeplo.http(async (req, res) => {
  // Process data (this is just the HTTP body 😉)
  const body = await zeplo.http.text(req)
  return 'OK'
})
```


