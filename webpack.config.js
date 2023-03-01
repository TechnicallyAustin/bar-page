const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
        {
            // css loader
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            // image loader
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource'
        },
        {
            // font loader
            test: /\.(woff|woff2|eot|ttF|otf)$/i,
            type: 'asset/rersource'
        },
        { // babel loader
            //test: 
            //type:
        }

    ],
  },


};
