import { actionTypes as types } from 'redux-manifest'

export const isRefreshCount = manifestName => action =>
  action.type === types.REFRESH_DATA &&
  action.countNeeded &&
  action.manifestName === manifestName

export const isRefreshData = manifestName => action =>
  action.type === types.REFRESH_DATA &&
  action.manifestName === manifestName
