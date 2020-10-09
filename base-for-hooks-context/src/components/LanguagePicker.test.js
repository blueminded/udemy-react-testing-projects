import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../test/testUtils';
import LanguagePicker from './LanguagePicker';

const mockSetLanguage = jest.fn();
const setup = () => {
  return shallow(
    <LanguagePicker setLanguage={mockSetLanguage}></LanguagePicker>
  );
};

test('should renders without errors', () => {
  const wrapper = setup();

  const component = findByTestAttr(wrapper, 'language-picker-component');

  expect(component.exists()).toBe(true);
});

test('should not throw warning with expected props', () => {
  checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test('should renders non-zero language icons', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'language-icon');
  expect(component.length).toBeGreaterThan(0);
});

test('should setLanguage prop upon click', () => {
  const wrapper = setup();
  const components = findByTestAttr(wrapper, 'language-icon');
  const icon = components.first();
  icon.simulate('click');
  expect(mockSetLanguage).toHaveBeenCalled();
});
