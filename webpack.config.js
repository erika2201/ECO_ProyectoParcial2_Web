const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    landing: './src/landing.js',
    login: './src/login.js',
    main: './src/main.js',
    graphic: './src/graphic.js'
  },
  output: {
      path:path.resolve(__dirname, "public")
  }
};