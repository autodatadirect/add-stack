import {get as lodashGet, isEmpty} from 'lodash'

export const get = props => {
  const paramProp = lodashGet(props, 'location.search')
  const params = new window.URLSearchParams(paramProp)
  const data = {}
  for (const [key, value] of params.entries()) {
    data[key] = value
  }
  return data
}

export const set = (props, params) => {
  props.history.push({search: '?' + encode(params)})
}

export const decode = query => {
  if (!query || !query.length || !/.+[?]/.test(query)) return {}
  return query.substring(query.indexOf('?') + 1)
    .split('&')
    .reduce(reduceParams, { })
}

export const encode = params => {
  if (!params || isEmpty(params)) return ''
  const enc = window.encodeURIComponent
  return Object.keys(params).map(k => enc(k) + '=' + enc(params[k])).join('&')
}

const reduceParams = (params, param) => {
  const [ key, value ] = param.split('=')
  params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : ''
  return params
}
