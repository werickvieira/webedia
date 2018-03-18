import path from 'path';
// import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

// const env = process.env.NODE_ENV || 'development';

const config = {
  entry: './app/src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};

export default config;

