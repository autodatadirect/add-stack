import Layout from '../components/Layout'
import {compose, withHandlers, lifecycle} from 'recompose'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setRunlevel, initializeRunlevel} from '../actions/layoutActions'
import {withRouter} from 'react-router'

const mapStateToProps = (state, props) => {
  return {
    runlevel: state.layout.runlevel
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setRunlevel: setRunlevel,
    initializeRunlevel: initializeRunlevel
  }, dispatch)
)

const handlers = {
  onRunlevelChange: props => event => {
    props.setRunlevel(event.target.value)
  }
}

const lifecycleMethods = {
  componentWillMount () {
    this.props.initializeRunlevel()
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers(handlers),
  lifecycle(lifecycleMethods)
)

export default enhance(Layout)
