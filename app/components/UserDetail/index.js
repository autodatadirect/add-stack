import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle, branch, renderComponent } from 'recompose'
import { GET_USER } from '../../constants/serviceTypes'
import { actions as asyncActions } from 'async-ops'
import LoadingIcon from '../LoadingIcon'
import UserDetail from './component'

const selectUserId = props => props.match.params.id
const mapStateToProps = (state, props) => state.user

const mapDispatchToProps = dispatch => bindActionCreators({
  asyncOperationStart: asyncActions.asyncOperationStart
}, dispatch)

const lifecycleHandlers = {
  componentDidMount () {
    this.props.asyncOperationStart(GET_USER, selectUserId(this.props))
  },
  componentDidUpdate (prevProps) {
    if (selectUserId(this.props) === selectUserId(prevProps)) return
    this.props.asyncOperationStart(GET_USER, selectUserId(this.props))
  }
}

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleHandlers),
  branch(props => props.loading, renderComponent(LoadingIcon))
)

export default enhance(UserDetail)
