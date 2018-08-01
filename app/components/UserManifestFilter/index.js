import { reduxForm, initialize } from 'redux-form'
import UserManifestFilter from './component'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { compose, lifecycle } from 'recompose'
import { withRouter } from 'react-router-dom'
import { USER_MANIFEST_FORM } from '../../constants/formNames'
import { updateFilter } from 'redux-manifest'
import { USERS } from '../../constants/manifestNames'
import * as qs from '../../utils/qs'
import { isEqual, isEmpty, get } from 'lodash'

const initialValues = {
  search: ''
}

const usersLoadingSelector = state => get(state, 'manifest.usersManifest.loadingData') || false

const mapStateToProps = (state, props) => ({
  filter: {...initialValues, ...qs.get(props)},
  loading: usersLoadingSelector(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateFilter: updateFilter,
  initialize: initialize
}, dispatch)

const cleanFilter = filter => {
  const search = (filter && filter.search && filter.search.split(' ')) || null
  return {...filter, page: 0, search}
}

const onSubmit = (formData, dispatch, props) => {
  if (isEqual(formData, props.filter)) {
    props.updateFilter(USERS, cleanFilter(props.filter))
  } else {
    qs.set(props, formData)
  }
}

const form = {
  form: USER_MANIFEST_FORM,
  onSubmit
}

const updateForm = ({initialize, updateFilter, filter}) => {
  initialize(filter)
  updateFilter(USERS, cleanFilter(filter))
}

const lifecycleMethods = {
  componentDidMount () {
    if (isEmpty(this.props.filter)) return
    updateForm(this.props)
  },
  componentDidUpdate (prevProps) {
    if (isEqual(this.props.filter, prevProps.filter)) return
    updateForm(this.props)
  }
}

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm(form),
  lifecycle(lifecycleMethods)
)

export default enhance(UserManifestFilter)
