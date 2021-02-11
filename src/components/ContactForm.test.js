import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';
import userEvent from '@testing-library/user-event';

test('Form renders', () => {
    render(<ContactForm />)
})

test('form can be filled out and submitted', () => {
    render(<ContactForm />);

    const firstInput = screen.getByLabelText(/first name*/i);
    const lastInput = screen.getByLabelText(/last name*/i);
    const emailInput = screen.getByLabelText(/email*/i);
    const messageInput = screen.getByLabelText(/message/i);

    userEvent.type(firstInput, 'Dar');
    userEvent.type(lastInput, 'von Pingel');
    userEvent.type(emailInput, 'dvonpingel@gmail.com');
    userEvent.type(messageInput, 'Hi this is fun!');

    const submit = screen.getByRole('button', { name: /submit/i});

    userEvent.click(submit);
})