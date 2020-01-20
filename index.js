const fs = require('fs')
const path = require('path')

const config = {}
const env = process.env
const NODE_ENV = env.NODE_ENV
const rootConfigDir = process.cwd()

loadFromConfigDir(rootConfigDir)

function loadFromConfigDir(configDir) {
  if (path.basename(configDir) !== 'config') {
    configDir = path.join(configDir, 'config')
  }

  const defaultConfigPath = path.join(configDir, 'default.json')
  if (fs.existsSync(defaultConfigPath)) {
    Object.assign(config, require(defaultConfigPath))
  }

  if (NODE_ENV && NODE_ENV !== 'default') {
    const defaultConfigPath = path.join(configDir, NODE_ENV + '.json')
    if (fs.existsSync(defaultConfigPath)) {
      Object.assign(config, require(defaultConfigPath))
    }
  }
}

function envCover() {
  for (let key of Object.keys(config)) {
    let envKey = key.toUpperCase()
    if (env.hasOwnProperty(envKey)) {
      config[key] = env[envKey]
    }
  }
}

module.exports.loaded = false
module.exports.load = function(dir) {
  if (dir && typeof dir === 'string') {
    const parentFile = module.parent.filename
    const parentDir = path.dirname(parentFile)

    dir = path.join(parentDir, dir)

    loadFromConfigDir(dir)
  }

  envCover()

  return (module.exports = config)
}
