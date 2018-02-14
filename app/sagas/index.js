import sagaMiddleware from '../middleware'
import setRunlevel from './setRunlevel'
import initializeRunlevel from './initializeRunlevel'
import refreshManifestCount from './refreshManifestCount'
import refreshManifestData from './refreshManifestData'
import focusRow from './focusRow'
import fetchUser from './fetchUser'

const sagas = [
  initializeRunlevel,
  setRunlevel,
  refreshManifestCount,
  refreshManifestData,
  focusRow,
  fetchUser
]

export default function runSagas () {
  sagas.forEach(s => sagaMiddleware.run(s))
}
