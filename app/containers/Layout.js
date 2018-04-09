import Layout from '../components/Layout'
import {compose, lifecycle} from 'recompose'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {setRunlevel, initializeRunlevel} from '../actions/layoutActions'
import {withRouter} from 'react-router'

const mapStateToProps = (state, props) => ({
  runlevel: state.layout.runlevel
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setRunlevel: setRunlevel,
    initializeRunlevel: initializeRunlevel
  }, dispatch)
)

const lifecycleMethods = {
  componentWillMount () {
    this.props.initializeRunlevel()
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle(lifecycleMethods)
)

export default enhance(Layout)
