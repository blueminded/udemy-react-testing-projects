import React from 'react';
import { mount } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import Input from './Input';
import languageContext from './../contexts/languageContext';

const setup = ({ language, secretWord }) => {
  language = language || 'en';
  secretWord = secretWord || 'party';
  return mount(
    <languageContext.Provider value={language}>
      <Input secretWord={secretWord}></Input>
    </languageContext.Provider>
  );
};

test('should renders without errors', () => {
  const wrapper = setup({});
  const component = findByTestAttr(wrapper, 'input-component');
  expect(component.length).toBe(1);
});

test('should not throw warning with expected props', () => {
  checkProps(Input, { secretWord: '' });
});

describe('state controlled input field', () => {
  let mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
    wrapper = setup({});
  });
  test('should update state with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train' } };
    inputBox.simulate('change', mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  });

  test('should clear the field upon submit button click', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    submitButton.simulate('click', { preventDefault: () => {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  });
});

describe('languagePicker', () => {
  test('should renders submit string in english ', () => {
    const wrapper = setup({ language: 'en' });
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Submit');
  });

  test('should renders submit string in spanish ', () => {
    const wrapper = setup({ language: 'es' });
    const submitButton = findByTestAttr(wrapper, 'submit-button');
    expect(submitButton.text()).toBe('Enviar');
  });
});
