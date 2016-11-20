const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: `${__dirname}/client`,
  entry: {
    scripts: './scripts/app.js',
  //  styles: './styles/styles.scss',
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
          'css-loader!postcss-loader?parser=postcss-scss'
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
