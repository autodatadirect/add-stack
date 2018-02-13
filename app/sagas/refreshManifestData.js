import { put, takeLatest } from 'redux-saga/effects'
import { setPage, setError, actionTypes as types } from 'redux-manifest'
import service from '../service/manifestData'

export default function * refreshManifestCount () {
  yield takeLatest(types.REFRESH_DATA, refreshData)
}

function * refreshData (action) {
  try {
    const data = yield service(action.filter)
    yield put(setPage(action.manifestName, data.data))
  } catch (err) {
    yield put(setError(action.manifestName, err.message))
  }
}
