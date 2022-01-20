const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
        fallback: {
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: require.resolve("stream-browserify"),
          util: require.resolve("util/"),
          asset: require.resolve("assert/")
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser",
        }),
      ],
    },
  },
};