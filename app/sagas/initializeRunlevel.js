import { takeEvery, put, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import {getLocalStorage} from '../utils/storageUtils'
import {setRunlevel} from '../actions/layoutActions'

export default function * () {
  yield takeEvery(types.INITIALIZE_RUNLEVEL, loader)
}

export function * loader (action) {
  const runlevel = yield call(getLocalStorage, 'runlevel')

  if (runlevel) {
    yield put(setRunlevel(runlevel))
  }
}
