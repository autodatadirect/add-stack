import { reducer as formReducer } from 'redux-form'

import { SET_USER } from '../constants/actionTypes'
import { formName as userFormName } from '../containers/UserForm'
import {formatDateForField} from '../utils/dateUtils'

export default formReducer.plugin({
  [userFormName]: (state, action) => {
    if (!state) {
      return state
    }
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          values: {...state.values, ...action.user, date: formatDateForField(action.user.date)}
        }
      default:
        return state
    }
  }
})
