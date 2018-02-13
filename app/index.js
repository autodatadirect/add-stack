import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store'
import startSagas from './sagas'
import {HashRouter, Route} from 'react-router-dom'
import Layout from './containers/Layout'
import routes from './routes'

export const store = configureStore()
startSagas()

const mapRouteToRouteComponent = r => <Route {...r} />

ReactDOM.render(<div>
  <Provider store={store}>
    <HashRouter>
      <Layout>
        {routes.map(mapRouteToRouteComponent)}
      </Layout>
    </HashRouter>
  </Provider>
</div>, document.getElementById('app'))
