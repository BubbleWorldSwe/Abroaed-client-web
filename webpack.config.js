import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const IS_PROD_ENV = process.env.NODE_ENV === 'production';
const config = {
  mode: IS_PROD_ENV ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: { directory: path.resolve(process.cwd(), 'public') },
    compress: true,
    port: 2000,
    historyApiFallback: true,
    hot: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: path.resolve(process.cwd(), 'public', 'index.html')
    })
  ]
};
if (!IS_PROD_ENV) {
  config.devtool = 'eval-cheap-module-source-map';
}
export default config;
