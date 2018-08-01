import { call, put, takeEvery } from 'redux-saga/effects'
import * as actions from '../actions/sessionActions'
import * as addnav from '../utils/addnav'
import { GET_SESSION } from '../constants/actionTypes'
import { sagaMiddleware } from '../store/middlewareEnhancer'

const appName = 'add-stack'

export default function * getSession () {
  yield takeEvery(GET_SESSION, work)
}

export function * work (action) {
  try {
    const { user } = yield call(addnav.getSession)
    yield put(actions.getSessionResult(user))
    yield call(addnav.setApplication, {appName})
  } catch (error) {
    yield put(actions.getSessionFailure(error))
  }
}

sagaMiddleware.run(getSession)
