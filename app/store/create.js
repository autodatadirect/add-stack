import { createStore, compose } from 'redux'
import reducers from '../reducers'
import createMiddlewareEnhancer from './middlewareEnhancer'
import withReduxEnhancer from 'addon-redux/enhancer'

export default () => createStore(reducers, compose(createMiddlewareEnhancer(), withReduxEnhancer))
