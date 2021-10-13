const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'),
  },

  mode: 'development',

  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    historyApiFallback: true,
    port: 3000,
  },

  module: {
    rules: [
      { test: /\.(js)$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
