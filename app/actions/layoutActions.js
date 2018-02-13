import * as types from '../constants/actionTypes'

export const initializeRunlevel = () => ({
  type: types.INITIALIZE_RUNLEVEL
})

export const setRunlevel = runlevel => ({
  type: types.SET_RUNLEVEL,
  runlevel
})
