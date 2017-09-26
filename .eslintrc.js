/*eslint-disable key-spacing, header/header*/
module.exports = {
	'root': true,
	'extends': 'eslint:recommended',
	'rules': {
		'no-shadow': 'off',
		'no-param-reassign': 'off',
		'no-unused-vars': 'off',
		'no-console': 'off',
	},
	'globals': {},
	'env': {
		'browser': true,
		'node': true,
		'es6': true,
		'jest': true,
	},
	'parser': 'babel-eslint',
	'parserOptions': {
		'ecmaVersion': 8,
		'sourceType': 'module',
		'ecmaFeatures': {
			'impliedStrict': true,
			'jsx': true,
			'classes': true,
		},
	},
	'plugins': [

	],
};
