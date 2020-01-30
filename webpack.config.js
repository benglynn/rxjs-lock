const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateOptions = {
  title: "RxJS lock",
  hash: true,
  favicon: './icons/icon-64x64.png'
}


module.exports = {
  mode: "development",
  entry: {
    lock: './src/present/lock.ts',
    keys: './src/present/keys.ts',
    buttons: './src/present/buttons.ts',
    new: './src/present/new.ts',
    subject: './src/present/subject.ts',
    stateFlow: './src/present/state-flow.ts'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        use: 'pug-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...templateOptions,
      template: './templates/lock.pug',
      chunks: ['lock']
    }),
    new HtmlWebpackPlugin({
      ...templateOptions,
      title: 'keys',
      template: './templates/blank.pug',
      filename: 'keys.html',
      chunks: ['keys']
    }),
    new HtmlWebpackPlugin({
      ...templateOptions,
      title: 'buttons',
      template: './templates/buttons.pug',
      filename: 'buttons.html',
      chunks: ['buttons']
    }),
    new HtmlWebpackPlugin({
      ...templateOptions,
      title: 'new',
      template: './templates/blank.pug',
      filename: 'new.html',
      chunks: ['new']
    }),
    new HtmlWebpackPlugin({
      ...templateOptions,
      title: 'subject',
      template: './templates/buttons.pug',
      filename: 'subject.html',
      chunks: ['subject']
    }),
    new HtmlWebpackPlugin({
      ...templateOptions,
      title: 'state flow',
      template: './templates/buttons.pug',
      filename: 'state-flow.html',
      chunks: ['stateFlow']
    })
  ]
};