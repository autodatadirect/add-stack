import { GET_SESSION, GET_SESSION_RESULT, GET_SESSION_FAILURE } from '../constants/actionTypes'

const initialState = {
  isAdmin: false,
  userId: '',
  userName: '',
  loading: false,
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SESSION: return getSession(state, action)
    case GET_SESSION_RESULT: return getSessionResult(state, action)
    case GET_SESSION_FAILURE: return getSessionError(state, action)
    default: return state
  }
}

const getSession = (state, action) => ({
  ...state,
  loading: true
})

const getSessionResult = (state, action) => {
  let u = action.user || {}
  return {
    ...state,
    isAdmin: u.isAdmin,
    userName: u.userName,
    userId: u.uuid,
    loading: false
  }
}

const getSessionError = (state, action) => ({
  ...state,
  error: action.error
})
