import * as RUNLEVELS from '../constants/runlevels'
import getRunLevel from './getRunlevel'

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

const getQueryString = params => {
  if (!params) return
  return Object.keys(params)
    .map(k => window.encodeURIComponent(k) + '=' + window.encodeURIComponent(params[k]))
    .join('&')
}

const buildHeaders = response => {
  const headers = {}
  const headersIterator = response.headers.entries()
  let header = headersIterator.next()
  while (!header.done) {
    headers[header.value[0]] = header.value[1]
    header = headersIterator.next()
  }
  return headers
}

const send = request => {
  const runlevel = getRunLevel()
  if (runlevel === RUNLEVELS.MOCK) {
    return request.mock(request)
  }
  return new Promise((resolve, reject) => {
    let method = request.method || 'GET'
    let qs = ''
    let query
    let body
    let requestHeaders = request.headers || {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }

    if (request.data) {
      request.data.runlevel = runlevel
    }

    if (['GET', 'DELETE'].indexOf(method) > -1) {
      query = getQueryString(request.data)
      if (query) {
        qs = '?' + query
      }
    } else {
      // TODO: cleanup: currently non JSON can be sent to the server by setting request.body instead of request.data
      if (request.body) {
        body = request.body
      } else {
        body = JSON.stringify(request.data)
      }
    }

    let url = request.url + qs
    let responseHeaders
    window.fetch(url, {method, headers: requestHeaders, body, credentials: 'same-origin'})
      .then(checkStatus)
      .then(function (response) {
        responseHeaders = buildHeaders(response)
        return response.json()
      }).then(function (responseObject) {
        resolve({response: responseObject, headers: responseHeaders})
      }).catch(function (err) {
        reject(err)
      })
  })
}

export default {
  get: request => send({method: 'GET', ...request}),
  post: request => send({method: 'POST', ...request}),
  put: request => send({method: 'PUT', ...request}),
  delete: request => send({method: 'DELETE', ...request})
}
