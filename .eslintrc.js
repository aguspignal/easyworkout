module.exports = {
	extends: ["expo", "prettier"],
	plugins: ["prettier"],
	rules: {
		"react-hooks/exhaustive-deps": "off",
		"prettier/prettier": [
			"off",
			{
				singleQuote: false,
				semicolon: false,
				trailingComma: "all",
				endOfLine: "auto",
				arrowParens: "always",
				useTabs: true,
			},
		],
	},
}
