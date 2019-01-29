import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme'
import './setupTests'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('should render a <div>', () => {
    const wrapper = shallow(<App />)
    // expect(wrapper.find('a').length).toEqual(1)
  })
})
