import '../src/assets/styles/main.css'

import * as NextImage from 'next/image'

/**
 * Unoptimized version of Next Image component
 * @see https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
 */
const OriginalNextImage = NextImage.default

/* eslint-disable-next-line no-import-assign */
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  previewTabs: {
    // Setting the docs tab before the canvas tab
    'storybook/docs/panel': { index: -1 }
  },
  viewMode: 'docs'
}
