import { takeLatest } from 'redux-saga/effects'
import { actionTypes as types } from 'redux-manifest'

export default function * refreshManifestData () {
  yield takeLatest(types.FOCUS_ROW, focusRowFetchUser)
}

function * focusRowFetchUser (action) {
  console.log('Focus row called')
}
