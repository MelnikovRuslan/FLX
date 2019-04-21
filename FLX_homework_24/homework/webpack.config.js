const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    },
    {
      test: /\.(jpg|gif)$/,
      loader: 'file-loader',
      options: {
        name: 'src/img/[name].[ext]'
      }
    }]
  },
  devServer: {
    contentBase: './'
  }
}

