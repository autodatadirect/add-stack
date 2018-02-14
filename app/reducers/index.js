import {combineReducers} from 'redux'
import {reducer as manifestReducer} from 'redux-manifest'
import form from './formReducers'
import layout from './layoutReducers'
import user from './userReducers'

const rootReducer = combineReducers({
  layout,
  user,
  form: form,
  manifest: manifestReducer
})

export default rootReducer
