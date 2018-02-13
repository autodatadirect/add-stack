import {combineReducers} from 'redux'
import layout from './layoutReducers'
import {reducer as manifestReducer} from 'redux-manifest'

const rootReducer = combineReducers({
  layout,
  manifest: manifestReducer
})

export default rootReducer
