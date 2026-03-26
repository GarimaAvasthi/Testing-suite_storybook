import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '@/components/Form';

describe('Form Component', () => {
  it('updates input values when the user types', async () => {
    const user = userEvent.setup();
    render(<Form />);
    
    const usernameInput = screen.getByLabelText('Username') as HTMLInputElement;
    await user.type(usernameInput, 'testuser');
    
    expect(usernameInput.value).toBe('testuser');
  });

  it('displays a welcome message when submitted', async () => {
    const user = userEvent.setup();
    render(<Form />);
    
    const usernameInput = screen.getByLabelText('Username');
    const submitButton = screen.getByRole('button', { name: 'Submit' });
    
    await user.type(usernameInput, 'JohnDoe');
    await user.click(submitButton);
    
    expect(screen.getByText('Welcome, JohnDoe!')).toBeInTheDocument();
  });
});
