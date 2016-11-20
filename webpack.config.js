const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: `${__dirname}/client`,
  entry: {
    scripts: './scripts/app.js',
    styles: './styles/styles.scss',
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
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader'
        ),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
};
