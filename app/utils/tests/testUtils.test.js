import expect from 'expect'
import isFunction from 'lodash/isFunction'
import * as tools from '../testUtils.js'

describe('testUtils', () => {
  let tool

  describe('defaultContainerProps', () => {
    beforeEach(() => {
      tool = tools.testContainerProps
    })

    it('exists', () => {
      expect(tool).toBeTruthy()
    })

    it('has a store prop', () => {
      expect(tool.store).toBeTruthy()
    })

    it('has a store.getState function', () => {
      expect(tool.store.getState).toBeTruthy()
      expect(isFunction(tool.store.getState)).toBeTruthy()
    })

    it('has a store.subscribe function', () => {
      expect(tool.store.subscribe).toBeTruthy()
      expect(isFunction(tool.store.subscribe)).toBeTruthy()
    })

    it('has a store.dispatch function', () => {
      expect(tool.store.dispatch).toBeTruthy()
      expect(isFunction(tool.store.dispatch)).toBeTruthy()
    })
  })

  describe('getPromiseSpy', () => {
    beforeEach(() => {
      tool = tools.getPromiseSpy
    })

    it('exists', () => {
      expect(tool).toBeTruthy()
    })
  })

  describe('getTestPromise', () => {
    beforeEach(() => {
      tool = tools.getTestPromise
    })

    it('exists', () => {
      expect(tool).toBeTruthy()
    })

    it('returns a resolved promise when nothing passed', (done) => {
      tool()
      .then(() => {
        expect(true).toBeTruthy()
        done()
      })
      .catch(() => {
        done('expected promise to resolve - rejected')
      })
    })

    it('returns a rejected promise when passed true', (done) => {
      tool(true)
      .then(() => {
        done('expected promise to reject - resolved')
      })
      .catch(() => {
        expect(true).toBeTruthy()
        done()
      })
    })
  })
})
