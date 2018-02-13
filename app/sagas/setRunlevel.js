import { takeEvery, call } from 'redux-saga/effects'
import * as types from '../constants/actionTypes'
import {setLocalStorage} from '../utils/storageUtils'

export default function * () {
  yield takeEvery(types.SET_RUNLEVEL, loader)
}

export function * loader (action) {
  yield call(setLocalStorage, 'runlevel', action.runlevel)
}
