import { withThemeByClassName } from '@storybook/addon-themes';
import React from 'react';
import '../src/globals.css';

const preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: { canvas: { sourceState: 'shown' } },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story) => {
      // Adding padding to offset standard storybook view
      return React.createElement(
        'div',
        {
          style: {
            padding: '20px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          },
        },
        React.createElement(Story, null)
      );
    },
  ],
};

export default preview;
