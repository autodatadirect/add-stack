import { applyMiddleware } from 'redux'
import invariant from 'redux-immutable-state-invariant'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

export const sagaMiddleware = createSagaMiddleware()

export default () => {
  const middleware = []

  if (process.env.NODE_ENV !== 'production') {
    middleware.push(invariant())
    middleware.push(createLogger({
      level: 'log',
      duration: true,
      collapsed: true,
      diff: true
    }))
  }

  middleware.push(sagaMiddleware)

  return applyMiddleware(...middleware)
}
