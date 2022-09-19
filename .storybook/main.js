const path = require('path')

const { mergeConfig } = require('vite')
const tsconfigPaths = require('vite-tsconfig-paths').default

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-css-modules-preset',
    {
      /**
       * NOTE: fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    }
  ],
  framework: '@storybook/react',
  core: { builder: '@storybook/builder-vite' },
  async viteFinal (config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      plugins: [
        tsconfigPaths({
          root: path.resolve(path.resolve(__dirname, '../'))
        })
      ]
    })
  }
}
