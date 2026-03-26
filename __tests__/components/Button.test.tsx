import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/Button';

describe('Button Component', () => {
  it('renders a button without crashing', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays the correct text passed via props', () => {
    render(<Button>Submit Form</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Submit Form');
  });
});
