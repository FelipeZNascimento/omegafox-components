module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/stories/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', '@storybook/preset-scss'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
