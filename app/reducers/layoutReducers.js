import * as types from '../constants/actionTypes'
import * as runlevels from '../constants/runlevels'

const initialState = {
  addtagRunlevel: runlevels.MOCK
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_RUNLEVEL:
      return {...state, addtagRunlevel: action.runlevel}
    default:
      return state
  }
}
