import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Events from '../Events'
import './setupTests'

describe('Events', () => {
  it('passing test', () => {
    expect(true).toBeTruthy()
  })

  it('failing test', () => {
    expect(false).toBeFalsy()
  })

  it('renders a <section>', () => {
    const wrap = shallow(<Events/>)
    console.log(wrap.debug())
    console.log(wrap.find(Events).html())
    // expect(wrapper.contains('section')).toEqual(true)
  })
})
