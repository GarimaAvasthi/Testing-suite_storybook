import React from 'react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    state: {
      control: { type: 'radio' },
      options: ['Primary', 'Secondary', 'Disabled'],
      description: 'Quick state toggle for primary/secondary/disabled',
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'danger'],
      description: 'Visual style variant',
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size preset',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
    children: {
      control: { type: 'text' },
      description: 'Button label',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A tactile button with gradient backgrounds, layered shadows, and press-to-scale micro-interaction.',
      },
    },
  },
};

export const Playground = {
  args:{
    state:"Disabled",
    variant:'primary',
    disabled:false,
    children:'Click Me',
  },
  argTypes:{
    variant:{ control: false },
    disabled:{ control: false },
  },
  render:(args) => {
    const isDisabled = args.state === 'Disabled';
    const resolvedVariant = args.state === 'Secondary' ? 'secondary' : 'primary';
    return React.createElement(
      Button,
      {
        ...args,
        variant:isDisabled ? 'primary' : resolvedVariant,
        disabled:isDisabled,
      },
      args.children
    );
  },
};

export const Primary = {
  args:{
    variant:"secondary",
    children:'Get Started',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Learn More',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Delete Account',
  },
};

export const Disabled = {
  args:{
    disabled:false,
    variant:'primary',
    children:'Processing...',
    state:"Secondary"
  },
};

export const AllSizes = () =>
  React.createElement(
    'div',
    { style: { display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' } },
    React.createElement(Button, { variant: 'primary', size: 'sm' }, 'Small'),
    React.createElement(Button, { variant: 'primary', size: 'md' }, 'Medium'),
    React.createElement(Button, { variant: 'primary', size: 'lg' }, 'Large')
  );

export const AllVariants = () =>
  React.createElement(
    'div',
    { style: { display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' } },
    React.createElement(Button, { variant: 'primary' }, 'Primary'),
    React.createElement(Button, { variant: 'secondary' }, 'Secondary'),
    React.createElement(Button, { variant: 'danger' }, 'Delete'),
    React.createElement(Button, { variant: 'primary', disabled: true }, 'Disabled'),
  );
