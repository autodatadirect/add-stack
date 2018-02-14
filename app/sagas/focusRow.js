import { put, takeLatest } from 'redux-saga/effects'
import { actionTypes as types } from 'redux-manifest'
import { fetchUser } from '../actions/userActions'

export default function * refreshManifestData () {
  yield takeLatest(types.FOCUS_ROW, focusRowFetchUser)
}

function * focusRowFetchUser (action) {
  // yield put(fetchUser(action.id))
  console.log('Focus row called')
}
