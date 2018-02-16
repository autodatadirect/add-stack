import '../addfont.font'
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import Layout from './containers/Layout'

import configureStore from './store'
import startSagas from './sagas'
import routes from './routes'

import i18next from 'i18next'
import translations from './translations'
import { setTranslator } from './utils/translate'

export const store = configureStore()

i18next.init({lng: 'en', resources: translations})
setTranslator(i18next.t.bind(i18next))

startSagas()

const mapRouteToRouteComponent = r => <Route {...r} key={r.path} />

ReactDOM.render(<div>
  <Provider store={store}>
    <HashRouter>
      <Layout>
        {routes.map(mapRouteToRouteComponent)}
      </Layout>
    </HashRouter>
  </Provider>
</div>, document.getElementById('app'))
