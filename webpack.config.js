const path = require('path')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  output: {
    filename: 'cssjson.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'cssjson',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devServer: {
    clientLogLevel: 'warning',
    open: true,
    historyApiFallback: true,
    stats: 'errors-only',
  },
}
