import get from 'lodash-es/get'

export default function (key) {
  return function (state) {
    return get(state, key)
  }
}
