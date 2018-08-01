import {combineReducers} from 'redux'
import {reducer as manifestReducer} from 'redux-manifest'
import { reducer as formReducer } from 'redux-form'
import session from './session'
import user from './user'

const rootReducer = combineReducers({
  manifest: manifestReducer,
  session,
  form: formReducer,
  user
})

export default rootReducer
