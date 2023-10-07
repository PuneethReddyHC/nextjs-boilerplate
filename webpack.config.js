const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Other webpack configuration options...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          // Add other loaders if needed (e.g., postcss-loader)
        ],
      },
      // Other rules...
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Change this to your desired CSS filename
    }),
    // Other plugins...
  ],
};
