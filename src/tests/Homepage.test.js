import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Homepage from '../pages/Homepage';

const container = document.createElement('div');
document.body.appendChild(container);

describe('Homepage', () => {
  act(() => {
    ReactDOM.render(<Homepage />, container);
  });

  const button = container.querySelector('.button');

  it('Render success', async () => {
    expect(button).toBeDefined();
  });

  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  const submit = container.querySelector('.invite-button');

  it('Modal success', async () => {
	  expect(submit).toBeDefined();
  });

  const fullName = container.querySelector('.__fullName');
  const email = container.querySelector('.__email');
  const confirmEmail = container.querySelector('.__confirmEmail');

  fullName.value = 'airwallex';
  fullName.dispatchEvent(new InputEvent('input', {
    inputType: 'insertText',
    bubbles: true,
    cancelable: true,
  }));
  email.value = 'usedemail@airwallex.com';
  email.dispatchEvent(new InputEvent('input', {
    inputType: 'insertText',
    bubbles: true,
    cancelable: true,
  }));
  confirmEmail.value = 'usedemail@airwallex.com';
  confirmEmail.dispatchEvent(new InputEvent('input', {
    inputType: 'insertText',
    bubbles: true,
    cancelable: true,
  }));
  submit.dispatchEvent(new MouseEvent('click', { bubbles: true }));

  it('Request success', async () => {
    expect(submit.textContent).toBe('Sending, please wait...');
  });
});
