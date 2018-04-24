const webpack = require('webpack');

/* global module */
module.exports = {
  mode: 'development',
  entry: './dist/out-tsc/main.js',
  resolve: {
    mainFields: ['es2015', 'browser', 'module', 'main']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.bundle.js'
  },
  performance: { hints: false },
  module: {
    rules: [
      // Ignore warnings about System.import in Angular
      { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /\@angular(\\|\/)core(\\|\/)fesm2015/,
      './src', // location of your src
      {} // a map of your routes
    )
  ]
};
