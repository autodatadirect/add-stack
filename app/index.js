import '../addfont.font'
import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Layout from './components/Layout'

import store from './store'
import './service'
import './sagas'

import { initTranslator } from './utils/translate'
initTranslator()

ReactDOM.render(<div>
  <Provider store={store}>
    <HashRouter>
      <Layout />
    </HashRouter>
  </Provider>
</div>, document.getElementById('app'))
