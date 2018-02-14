import { put, takeLatest } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import * as types from '../constants/actionTypes'
import { setUser } from '../actions/userActions'
import service from '../service/fetchUser'

export default function * refreshManifestData () {
  yield takeLatest(types.FETCH_USER, fetchUser)
}

function * fetchUser (action) {
  try {
    const user = yield service(action.id)
    yield put(setUser(user))
  } catch (err) {
    console.log('Error userId:', action.id)
  }
}
