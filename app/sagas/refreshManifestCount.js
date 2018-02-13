import { put, takeLatest } from 'redux-saga/effects'
import { setCount, setError, actionTypes as types } from 'redux-manifest'
import service from '../service/manifestCount'

export default function * refreshManifestData () {
  yield takeLatest(types.REFRESH_DATA, refreshCount)
}

function * refreshCount (action) {
  if (!action.countNeeded) return
  try {
    const count = yield service(action.filter)
    yield put(setCount(action.manifestName, count))
  } catch (err) {
    yield put(setError(action.manifestName, err.message))
  }
}
