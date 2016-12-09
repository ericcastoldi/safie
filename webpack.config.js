const path = require('path');

module.exports = {
  entry: './client.js',
  output: {
    filename: 'application.js',
    path: path.join(__dirname, 'public', 'store')
  },
  module: {
    loaders: [{
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }]
  }
};
