import React from 'react';
import { shallow, mount } from 'enzyme';

import successContext from './successContext';

const DemoComponent = () => {
  successContext.useSuccess();

  return <div></div>;
};

test('should useSuccess throw error when not wrapped in SuccessProvider', () => {
  expect(() => {
    shallow(<DemoComponent></DemoComponent>);
  }).toThrow('useSuccess must be used within a SuccessProvider');
});

test('should useSuccess does not throw error when wrapped in SuccessProvider', () => {
  expect(() => {
    mount(
      <successContext.SuccessProvider>
        <DemoComponent></DemoComponent>
      </successContext.SuccessProvider>
    );
  }).not.toThrow('useSuccess must be used within a SuccessProvider');
});
