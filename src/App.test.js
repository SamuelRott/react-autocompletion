import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import App from './App';
import AutoComplete from './AutoComplete';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it( 'App component should contain AutoComplete component', () =>
{
    const wrapper = shallow( <App /> );
    expect( wrapper.contains( <AutoComplete/> ) );
});

it( 'AutoComplete component should contain only one form', () =>
{
    const wrapper = shallow( <AutoComplete/> );
    expect( wrapper.find('.Form').length, 1);
});

it( 'AutoComplete component should contain only one searchfield', () =>
{
    const wrapper = shallow( <AutoComplete/> );
    expect( wrapper.find('.Searchfield').length, 1);
});

it('State.value should be an empty string', () => {
  	var wrapper = shallow(<AutoComplete />);
  	expect(wrapper.state().value, '');
});

it('State.propositions should be null', () => {
  	var wrapper = shallow(<AutoComplete />);
  	expect(wrapper.state().propositions, null);
});
