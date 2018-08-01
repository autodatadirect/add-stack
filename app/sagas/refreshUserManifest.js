import { put, all, throttle, call } from 'redux-saga/effects'
import { setPage, setCount, setError } from 'redux-manifest'
import * as serviceTypes from '../constants/serviceTypes'
import { getOperation } from 'async-ops'
import { isRefreshCount, isRefreshData } from '../utils/refreshDataMatch'
import { get } from 'lodash'
import * as manifestNames from '../constants/manifestNames'
import { sagaMiddleware } from '../store/middlewareEnhancer'

export default function * refreshUserManifest () {
  yield all([
    throttle(1000, isRefreshData(manifestNames.USERS), refreshData),
    throttle(1000, isRefreshCount(manifestNames.USERS), refreshCount)
  ])
}

const buildFilter = (actionFilter, mode) => {
  const filter = {...actionFilter}
  filter.selectMode = mode
  filter.limit = actionFilter.pageSize
  filter.offset = actionFilter.page * actionFilter.pageSize
  if (actionFilter.sorts && actionFilter.sorts.length) {
    filter.sorts = actionFilter.sorts
  } else {
    filter.sorts = [{id: 'active', isAsc: false}]
  }
  return filter
}

function * refreshData (action) {
  const filter = buildFilter(action.filter, 'DATA')
  try {
    const resp = yield call(getOperation(serviceTypes.GET_USERS), filter)
    const users = get(resp, 'users')
    yield put(setPage(action.manifestName, users))
  } catch (err) {
    yield put(setError(action.manifestName, err.message))
  }
}

function * refreshCount (action) {
  const filter = buildFilter(action.filter, 'COUNT')
  try {
    const resp = yield call(getOperation(serviceTypes.GET_USERS), filter)
    const count = get(resp, 'count')
    yield put(setCount(action.manifestName, count))
  } catch (err) {
    yield put(setError(action.manifestName, err.message))
  }
}

sagaMiddleware.run(refreshUserManifest)
