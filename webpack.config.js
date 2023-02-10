const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "/dist"),
        filename: "index.bundle.js",
    },
    resolve: {
        extensions: [".jsx", ".js"],
    },
    devServer: {
        port: 5500,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [new HTMLWebPackPlugin({ template: "./src/index.html" })],
};
