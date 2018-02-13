import sagaMiddleware from '../middleware'
import setRunlevel from './setRunlevel'
import initializeRunlevel from './initializeRunlevel'
import refreshManifestCount from './refreshManifestCount'
import refreshManifestData from './refreshManifestData'

const sagas = [
  initializeRunlevel,
  setRunlevel,
  refreshManifestCount,
  refreshManifestData
]

export default function runSagas () {
  sagas.forEach(s => sagaMiddleware.run(s))
}
