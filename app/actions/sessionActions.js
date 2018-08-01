import { GET_SESSION, GET_SESSION_RESULT, GET_SESSION_FAILURE } from '../constants/actionTypes'

export const getSession = () => ({
  type: GET_SESSION
})

export const getSessionResult = user => ({
  type: GET_SESSION_RESULT,
  user
})

export const getSessionFailure = error => ({
  type: GET_SESSION_FAILURE,
  error
})
