import { useContext } from "react"
import { ColorThemeContext } from "../contexts/ColorThemeContext"
import { ColorThemeContextType } from "../types/ColorThemeContext"

export function useColorTheme() {
	const { colorTheme, setColorTheme } = useContext(ColorThemeContext) as ColorThemeContextType

	function setLightTheme() {
		setColorTheme("light")
	}

	function setDarkTheme() {
		setColorTheme("dark")
	}

	return { colorTheme, setDarkTheme, setLightTheme }
}
