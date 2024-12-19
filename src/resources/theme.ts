const pallete = {
	black0: "#242424",
	black1: "#343434",
	white0: "#FAFAFA",
	white1: "#FEFEFE",
	gray0: "#B0B0B0",
	gray1: "#DADADA",
	green0: "#1B5F6B",
	green1: "#22B96B",
	cyan1: "#06CEB1",
	red: "#E53944",
	yellow: "#FFCC00",
}

export const theme = {
	colors: {
		textDark: pallete.black0,
		textLight: pallete.white1,

		backgroundDark: pallete.black1,
		backgroundLight: pallete.white0,

		primary: pallete.green1,
		secondary: pallete.green0,
		accent: pallete.cyan1,

		danger: pallete.red,
		warning: pallete.yellow,

		grayDark: pallete.gray0,
		grayLight: pallete.gray1,
	},

	spacing: {
		xxs: 8,
		xs: 12,
		s: 16,
		m: 24,
		l: 32,
		xl: 48,
		xxl: 64,
	},

	fontSize: {
		xs: 14,
		s: 18,
		m: 24,
		l: 32,
		xl: 42,
		xxl: 48,
	},

	textWeights: {
		light: 300,
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		undef: undefined,
	},
}
