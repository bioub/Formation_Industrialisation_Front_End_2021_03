const HtmlWebpackPlugin = require('html-webpack-plugin');

function configFactory(_, { mode }) {
  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: false,
    entry: './src/js/index',
    output: {
      filename: mode === 'production' ? 'bundle.[contenthash].js' : 'bundle.js',
      environment: {
        arrowFunction: false,
      },
    },
    module: {
      rules: [
        // Exercice 1 :
        // le fichier horloge.js charge un fichier .json5
        // ajouter la règle pour prendre en charge ce type de fichier
        // comme dans :
        // https://github.com/webpack/webpack/tree/master/examples/custom-json-modules
        // Exercice 2 :
        // le fichier index.js charge un fichier .css
        // installer style-loader et css-loader
        // puis ajouter la règle pour prendre en charge ce type de fichier
        // comme dans :
        // https://github.com/webpack-contrib/css-loader#assets
        // Optionnel :
        // En production utiliser mini-css-extract-plugin pour charger
        // un fichier css avec <link> plutot que <style>
        // https://github.com/webpack-contrib/mini-css-extract-plugin
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env' /*, { corejs: '3', useBuiltIns: 'usage' }*/,
                ],
              ],
              plugins: [],
            },
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };

  return config;
}

module.exports = configFactory;
