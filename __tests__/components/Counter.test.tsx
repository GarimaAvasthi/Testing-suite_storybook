import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '@/components/Counter';

describe('Counter Component', () => {
  it('renders correctly with initial value 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('0');
  });

  it('increments the value when + is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: '+' });
    
    await user.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('1');
    
    await user.click(incrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('2');
  });

  it('decrements the value when - is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: '-' });
    
    await user.click(decrementButton);
    expect(screen.getByTestId('count-value')).toHaveTextContent('-1');
  });
});
