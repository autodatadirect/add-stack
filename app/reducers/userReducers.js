import * as types from '../constants/actionTypes'

const initialState = {
  user: {},
  loading: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_USER:
      return {...state, data: action.user, loading: false}
    default:
      return state
  }
}
