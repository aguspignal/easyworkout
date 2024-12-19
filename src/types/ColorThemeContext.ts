export type ColorTheme = "light" | "dark"

export type ColorThemeContextType = {
	colorTheme: ColorTheme
	setColorTheme: (theme: ColorTheme) => void
}
