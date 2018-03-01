import {store} from '../index'

export default () => {
  const state = store.getState()
  return state.layout.runlevel
}
