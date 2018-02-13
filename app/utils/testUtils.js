import expect from 'expect'

export const testContainerProps = {
  store: {
    getState: f => f,
    subscribe: f => f,
    dispatch: f => f,
    actions: {}
  }
}

export const getTestPromise = (fail) => {
  return new Promise((resolve, reject) => {
    if (fail) {
      return reject.error()
    }

    return resolve()
  })
}

export const getPromiseSpy = (fail) => {
  return expect
    .createSpy()
    .andReturn(getTestPromise(fail))
}
