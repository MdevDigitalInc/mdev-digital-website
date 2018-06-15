// MDEV Digital - Webpack Boilerplate[VueJS]
// Webpack 4 Configuration file
// -----------------------------------------
// PRODUCTION ENVIRONMENT
// ----------------------------------------

// Required Imports
const path = require('path')
const webpack = require('webpack')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require ('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const setPath = function(folderName) {
  return path.join(__dirname, folderName);
}

// Module Exports
module.exports = {
  // Asset Splitting [ Vendor | Build ]
  entry: {
    build: './src/main.js',
    vendor: [
      'vue',
      'vue-i18n',
      'vue-resource',
      'vue-router'
    ]
  },
  // Output Files
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'app/[name][hash].js'
  },
  // Split Vendor | Build Assets into separate chunks
  optimization:{
    runtimeChunk: false,
    splitChunks: {
      chunks: "all", //Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
    }
  },
  // Find Node Modules
  resolveLoader: {
    modules: [setPath('/node_modules')]
  },
  // Module Rules & Loaders
  module: {
    rules: [
      // Vue Linting
      {
        enforce: 'pre',
        test: /\.vue$/,
        use: 'eslint-loader',
        exclude: /node_modules/
      },
      // Vue Template Processing
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader'
          }
        }
      },
      // JS Processing & Transpiling
      {
        test: /\.js$/,
          exclude: /(node_modules)/,
          use: [{
            loader: "babel-loader",
            options: { presets: ['es2015'] }
          }]
      },
      // CSS Processing
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
        fallback: "style-loader",
          use: ["css-loader"]
        })
      },
      // SASS Processing
      {
        test: /\.scss$/,
        use:
        ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
              }
            },
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-resources-loader',
              // Import Global Stylesheets
              options: {
                resources: './src/assets/styles/component-lean-main.scss' // Contains Mixins / Variables only
              }
            }
          ]
        }),
      },
      // Image Processing
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loaders: [ 'file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            // JPEG Processing
            mozjpeg: {
              progressive: true,
              quality: 95
            },
            // GIF Processing
            gifsicle: {
              interlaced: false,
              optimizationLevel: 2
            },
            // PNG Processing
            pngquant: {
              quality: '85-90',
              speed: 4
            },
            // SVG Processing
            svgo: {
              plugins: [
                {
                  removeViewBox: false
                },
                {
                  removeEmptyAttrs: false
                }
              ]
            }
          }
        }]
      }
    ]
  },
  // Plugins & Post Processing
  plugins: [
    // Auto Prefix & Linting
    new VueLoaderPlugin(),
    new StyleLintPlugin({
      syntax: 'scss',
      files: ['**/*.vue']
    }),
    // Text Extraction & Chunking
    new ExtractTextPlugin("assets/styles/styles[hash].css"),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  performance: {
    hints: 'warning'
  }
}
