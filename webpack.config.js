var path = require('path');

module.exports = {
    entry: "./app.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
              test: /\.jsx?$/,
              // include: [
              //   path.join(__dirname, 'app.js'),
              //   path.join(__dirname, 'server.js'),
              //   path.join(__dirname, 'src'),
              //   path.join(__dirname, 'tests')
              // ],
              exclude: /node_modules/,
              loader: "babel"}
        ]
    }
};
