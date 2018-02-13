import '../../../mocha.setup.js'
import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import Layout from '../Layout'
import {Manifest} from 'redux-manifest'

let component
let props

const initProps = {
  actions: {
    setRunlevel: f => f,
    clearAlertMessage: f => f
  }
}

let setProps = function (p) {
  props = Object.assign({}, initProps, p)
  component = shallow(<Layout {...props} />)
}

describe('<Layout/>', () => {
  beforeEach(() => {
    setProps(initProps)
  })

  it('has a Manifest Component', () => {
    expect(component.find(Manifest).length).toEqual(1)
  })
})
