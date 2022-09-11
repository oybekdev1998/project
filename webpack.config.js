const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development'

module.exports = {
  mode: NODE_ENV ? NODE_ENV : 'development',
  entry: path.resolve(__dirname, './src/index.tsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },

  devServer: {
    port: 3000,
    open: true,
    hot: IS_DEV
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
				  'ts-loader'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html')
    })
  ]
}