import UserForm from './containers/UserForm'
// These imports are used for the redux-manifest package
import Manifest from './containers/Manifest'

const exactRoute = (path, component) => ({path, component, exact: true})
const route = (path, component) => ({path, component})

export default [
  exactRoute('/', Manifest),
  route('/user/:id', UserForm)
]
