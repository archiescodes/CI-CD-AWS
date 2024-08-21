const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile JavaScript files
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Process CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve these file types
  },
  mode: 'production', // Set the mode to production for optimization
};
