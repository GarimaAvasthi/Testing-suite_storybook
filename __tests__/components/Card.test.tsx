import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '@/components/Card';

describe('Card Component', () => {
  it('renders a card without crashing', () => {
    render(
      <Card title="Test Title">
        <p>Test Content</p>
      </Card>
    );
    expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
  });

  it('displays the correct title and text passed via props', () => {
    render(
      <Card title="My Profile">
        <span>John Doe</span>
      </Card>
    );
    expect(screen.getByText('My Profile')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
