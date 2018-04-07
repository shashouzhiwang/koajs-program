// Set the `ENV` global variable to be used in the app.
var path = require('path');
var webpack = require('webpack');

var projectRootDir = process.env.IONIC_ROOT_DIR;
var appScriptsDir = process.env.IONIC_APP_SCRIPTS_DIR;

var config = require(path.join(appScriptsDir, 'config', 'webpack.config.js'));
var env = process.env.NODE_ENV || 'dev';
env = env.trim();
console.error("222222223334");
var envVars;
try {
  envVars = require(path.join(projectRootDir,'src', 'environments', env.trim() + '.json'));
} catch(e) {
  envVars = {};
}

config[env].plugins = config[env].plugins || [];
config[env].plugins.push(
  new webpack.DefinePlugin({
    ENV: Object.assign(envVars, {
      environment: JSON.stringify(env.trim())
    })
  })
);

if(env === 'prod') {
  // This helps ensure the builds are consistent if source hasn't changed:
  config[env].plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
}

module.exports = config;
