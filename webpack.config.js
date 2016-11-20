const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: `${__dirname}/client`,
  entry: {
    scripts: './scripts/app.js',
    styles: './styles/styles.css',
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'scripts.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
};
