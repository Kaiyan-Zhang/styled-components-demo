import HtmlWebpackPlugin from "html-webpack-plugin";

const config = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
};
export default config;
