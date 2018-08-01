import { compose, lifecycle } from 'recompose'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getSession } from '../../actions/sessionActions'
import { withRouter } from 'react-router'
import Layout from './component'

const mapDispatchToProps = dispatch => bindActionCreators({
  getSession: getSession
}, dispatch)

const lifecycleMethods = {
  componentWillMount () {
    this.props.getSession()
  }
}

const enhance = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  lifecycle(lifecycleMethods)
)

export default enhance(Layout)
