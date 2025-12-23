import React from 'react'
import type { Preview } from '@storybook/react-vite'
import { NeoMatrixThemeProvider } from '@neomatrix/ui'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark'
      return (
      <NeoMatrixThemeProvider mode={theme}>
        <Story />
      </NeoMatrixThemeProvider>
      )
    },
  ],
}

export default preview
