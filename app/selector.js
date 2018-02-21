import get from './utils/get'

export default function (key) {
  return function (state) {
    return get(state, key)
  }
}
