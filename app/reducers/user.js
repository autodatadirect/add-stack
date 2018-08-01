import { GET_USER } from '../constants/serviceTypes'
import { actionTypes as asyncTypes, isAsyncOperation, isAsyncComplete, isAsyncFailure } from 'async-ops'

const initialState = {
  id: '',
  uuid: '',
  userName: '',
  realName: '',
  emailAddress: '',
  active: false,
  creationDate: '',
  dateLastChangedPassword: '',
  lastLogin: '',
  phone: '',
  fax: '',
  loading: false,
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case asyncTypes.OPERATION:
    case asyncTypes.COMPLETE:
    case asyncTypes.FAILURE:
      if (isAsyncOperation(GET_USER)(action)) return getUser(state, action)
      if (isAsyncComplete(GET_USER)(action)) return getUserResult(state, action)
      if (isAsyncFailure(GET_USER)(action)) return getUserError(state, action)
      return state
    default: return state
  }
}

const getUser = (state, action) => ({
  ...state,
  loading: true
})

const getUserResult = (state, action) => {
  let u = action.response.user || {}
  return {
    ...state,
    id: u.id || '',
    uuid: u.uuid || '',
    userName: u.userName || '',
    realName: u.realName || '',
    emailAddress: u.emailAddress || '',
    active: u.active || false,
    creationDate: u.creationDate || '',
    dateLastChangedPassword: u.dateLastChangedPassword || '',
    lastLogin: u.lastLogin || '',
    phone: u.phone || '',
    fax: u.fax || '',
    loading: false
  }
}

const getUserError = (state, action) => ({
  ...state,
  error: action.error,
  loading: false
})
