var HtmlWebpackPlugin = require("html-webpack-plugin")
var path = require("path")

module.exports = {
	entry: {
		"app": path.resolve(__dirname, "src", "app.js"),
	},

	module: {
		rules: [
			{
				test: /\.elm$/,
				exclude: [/elm-stuff/, /node_modules/],
				use: {
					loader: "elm-webpack-loader",
					options: {
						cwd: __dirname,
					},
				},
			},
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "src/app.html",
		}),
	]
}
