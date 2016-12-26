const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: `${__dirname}/client`,
  entry: {
    scripts: './app.js',
    css: './app.scss',
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'scripts.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      }, {
        test: /\.scss/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss-loader!sass-loader'
        ),
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
  ],
};
