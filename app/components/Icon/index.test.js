import { shallow } from 'enzyme'
import expect from 'expect'

import Icon from './index'

describe('[components] Icon', function () {
  let component

  beforeEach(function () {
    component = shallow(Icon({type: 'test'}))
  })

  it('should exist', function () {
    expect(component).toNotBe(undefined)
    expect(component.exists()).toBe(true)
    expect(component.length).toBe(1)
  })
})

describe('setting Icon correctly', function () {
  let component

  it('should return span with correct className', function () {
    component = shallow(Icon({type: 'account'}))
    expect(component.hasClass('addstackicon')).toBe(true)
    expect(component.hasClass('addstackicon-account')).toBe(true)
  })
})
