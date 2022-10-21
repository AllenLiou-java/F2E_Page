module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	extends: [
		"@nuxtjs/eslint-config-typescript",
		"plugin:nuxt/recommended",
		"plugin:prettier/recommended"
		// 'prettier',
	],
	plugins: [],
	// add your custom rules here
	rules: {
		"vue/multi-word-component-names": 0, // 關閉vue文件和元件命名校驗
		"vue/singleline-html-element-content-newline": "off",
		"vue/multiline-html-element-content-newline": "off",
		"no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
		"prettier/prettier": [
			"error",
			{
				printWidth: 80, // 程式碼單行長度
				tabWidth: 2, // tab鍵縮排為2空格
				useTabs: true, // 使用空格縮排
				semi: false, // 去分號
				trailingComma: "none", // 去結尾逗號
				arrowParens: "avoid", // 箭頭函式盡可能省略括號
				endOfLine: "auto",
				vueIndentScriptAndStyle: true,
				// singleAttributePerLine: true,
				bracketSpacing: true,
				singleQuote: false
			}
		]
	}
}
