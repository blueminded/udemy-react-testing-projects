import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import Input from './Input';

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord}></Input>);
};

test('should renders without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});

test('should not throw warning with expected props', () => {
  checkProps(Input, { secretWord: '' });
});
