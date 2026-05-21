const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  
  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash:8].js' : '[name].js',
      chunkFilename: isProduction ? '[id].[contenthash:8].chunk.js' : '[id].chunk.js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    optimization: {
      minimize: isProduction,
      usedExports: false,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 2018,
            compress: {
              drop_console: isProduction,
              drop_debugger: isProduction,
              pure_funcs: isProduction ? ['console.log', 'console.info'] : [],
            },
            format: {
              comments: false,
            },
            mangle: false,
          },
          extractComments: false,
        }),
      ],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: 'style.css', to: 'style.css' },
        ],
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false,
      }),
      // 禁用 JavaScript 混淆以确保全局函数正常工作
      // isProduction && new WebpackObfuscator({
      //   rotateStringArray: true,
      //   stringArray: true,
      //   stringArrayThreshold: 0.75,
      //   stringArrayEncoding: ['base64'],
      //   stringArrayCallsTransform: true,
      //   stringArrayCallsTransformThreshold: 0.5,
      //   identifierNamesGenerator: 'mangled',
      //   splitStrings: true,
      //   splitStringsChunkLength: 5,
      //   transformObjectKeys: false,
      //   numbersToExpressions: true,
      //   simplify: true,
      //   shuffleStringArray: true,
      //   compact: true,
      //   controlFlowFlattening: true,
      //   controlFlowFlatteningThreshold: 0.5,
      //   deadCodeInjection: true,
      //   deadCodeInjectionThreshold: 0.2,
      //   selfDefending: false,
      //   debugProtection: false,
      //   debugProtectionInterval: 0,
      //   disableConsoleOutput: false,
      //   log: false
      // }, []),
    ].filter(Boolean),
    devtool: isProduction ? false : 'eval-source-map',
    devServer: {
      static: {
        directory: path.join(__dirname, '.'),
      },
      compress: true,
      port: 8081,
      hot: true,
    },
    performance: {
      hints: isProduction ? 'warning' : false,
    },
  };
};
