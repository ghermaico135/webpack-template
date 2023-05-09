/** @format */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"],
			},
			{
				test: /\.xml$/i,
				use: ["xml-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Output Management",
		}),
	],
	optimization: {
		runtimeChunk: "single",
	},
};
