import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Input from './Input';

const setup = () => {
  return shallow(<Input></Input>);
};

test('should renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});
