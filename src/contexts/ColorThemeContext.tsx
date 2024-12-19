import { createContext, ReactNode, useState } from "react"
import { ColorTheme, ColorThemeContextType } from "../types/ColorThemeContext"

export const ColorThemeContext = createContext<ColorThemeContextType | null>(null)

export const ColorThemeContextProvider = ({ children }: { children: ReactNode }) => {
	const [colorTheme, setColorTheme] = useState<ColorTheme>("light")

	function toggleTheme() {
		setColorTheme
	}

	return (
		<ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
			{children}
		</ColorThemeContext.Provider>
	)
}
