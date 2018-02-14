import * as types from '../constants/actionTypes'

export const fetchUser = id => ({
  type: types.FETCH_USER,
  id
})

export const setUser = user => ({
  type: types.SET_USER,
  user
})
