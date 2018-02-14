import {compose, withHandlers} from 'recompose'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setUser} from '../actions/userActions'
import {withRouter} from 'react-router'
import history from '../history'
// These imports are used for the redux-manifest package
import { Manifest } from 'redux-manifest'
import definition from './manifestDefinition'

const mapStateToProps = (state, props) => {
  return {
    name: 'addstackManifest',
    definition: definition
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setUser: setUser
  }, dispatch)
)

const handlers = {
  onRowClick: props => user => {
    history.push('/user/' + user.id)
    props.setUser(user)
  }
}
const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers)
)

export default enhance(Manifest)
