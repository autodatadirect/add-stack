import '../../../mocha.setup.js'
import React from 'react'
import {shallow} from 'enzyme'
import expect from 'expect'
import LoadingIcon from '../LoadingIcon'

let component
let props

const initProps = {}

let setProps = function (p) {
  props = Object.assign({}, initProps, p)
  component = shallow(<LoadingIcon {...props} />)
}

describe('<LoadingIcon/>', () => {
  beforeEach(() => {
    setProps(initProps)
  })

  it('has a div with a addstack-loading-icon class', () => {
    expect(component.find('div.addstack-loading-icon').length).toEqual(1)
  })
})
