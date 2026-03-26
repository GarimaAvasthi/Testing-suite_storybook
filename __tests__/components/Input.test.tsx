import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '@/components/Input';

describe('Input Component', () => {
  it('renders an input field without crashing', () => {
    render(<Input label="Username" />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
  });

  it('displays the correct generic props passed to it', () => {
    render(<Input label="Email" type="email" placeholder="Enter email" defaultValue="test@example.com" />);
    const inputElement = screen.getByLabelText('Email') as HTMLInputElement;
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.type).toBe('email');
    expect(inputElement.placeholder).toBe('Enter email');
    expect(inputElement.value).toBe('test@example.com');
  });
});
