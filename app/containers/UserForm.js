import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose, lifecycle, branch } from 'recompose'
import { bindActionCreators } from 'redux'
import LoadingIcon from '../components/LoadingIcon'
import get from '../utils/get'

import * as actions from '../actions/userActions'
import UserForm from '../components/UserForm'
import {formatDateForField} from '../utils/dateUtils'

export const formName = 'userUpdate'

const mapStateToProps = state => {
  const user = get(state, 'user.data') || {}
  return {
    user: user,
    loading: get(state, 'user.loading'),
    initialValues: {...user, date: formatDateForField(user.date)}
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchUser: actions.fetchUser
}, dispatch)

const lifecycleMethods = {
  componentWillMount () {
    if (!this.props.user || (!this.props.user.id && this.props.user.id !== 0)) {
      this.props.fetchUser(this.props.match.params.id)
    }
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: formName }),
  lifecycle(lifecycleMethods),
  branch(props => props.loading, () => LoadingIcon)
)

export default enhance(UserForm)
