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

  fullName.dispatchEvent(new InputEvent('fullName', {
    inputType: 'insertText',
    data: 'airwallex',
  }));
  email.dispatchEvent(new InputEvent('email', { data: 'usedemail@airwallex.com' }));
  confirmEmail.dispatchEvent(new InputEvent('confirmEmail', { data: 'usedemail@airwallex.com' }));
  submit.dispatchEvent(new MouseEvent('click', { bubbles: true }));

  const message = container.querySelector('.invite-error');

  it('Request success', async () => {
    expect(message.textContent).toBe('Bad Request: Email is already in use');
  });
});
