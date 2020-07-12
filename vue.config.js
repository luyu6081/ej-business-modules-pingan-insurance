const {resolve} = require('path')

module.exports = {
  chainWebpack (config) {
    config.entry('app').clear().add('./playground/main.js')

    config.resolve.alias.set('~', resolve(__dirname, './playground'))
    config.resolve.alias.set('modules', resolve(__dirname, './src/modules'))

    config.plugin('html').tap(args => {
      args[0].template = resolve(__dirname, './playground/public/index.html')
      return args
    })
  },
}
