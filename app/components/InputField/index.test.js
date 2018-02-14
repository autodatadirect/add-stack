import '../../../mocha.setup.js'
import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import {FormGroup, Input, Label} from 'reactstrap'

import InputField from '../InputField'

let component
let props

const initProps = {
  input: {},
  meta: {touched: false, error: 'test error', warning: true}
}

let setProps = function (p) {
  props = Object.assign({}, initProps, p)
  component = shallow(<InputField {...props} />)
}

describe('<InputField/>', () => {
  beforeEach(() => {
    setProps(initProps)
  })

  it('has a FormGroup', () => {
    expect(component.find(FormGroup).length).toEqual(1)
  })

  it('has a Label and Input', () => {
    expect(component.find(Label).length).toEqual(1)
    expect(component.find(Input).length).toEqual(1)
  })

  it('has a help-block element if touched and either an error or warning or both', () => {
    setProps({meta: {touched: true, error: 'test', warning: null}})
    expect(component.find('div.help-block').length).toEqual(1)
    setProps({meta: {touched: true, error: 'test', warning: true}})
    expect(component.find('div.help-block').length).toEqual(1)
    setProps({meta: {touched: true, error: null, warning: true}})
    expect(component.find('div.help-block').length).toEqual(1)

    setProps({meta: {touched: false, error: 'test error', warning: true}})
    expect(component.find('div.help-block').length).toEqual(0)
    setProps({meta: {touched: true, error: null, warning: false}})
    expect(component.find('div.help-block').length).toEqual(0)
  })
})
