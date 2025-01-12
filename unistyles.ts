import { StyleSheet } from "react-native-unistyles"
import { darkTheme, lightTheme } from "./src/resources/theme"

const appThemes = {
	light: lightTheme,
	dark: darkTheme,
}

type AppThemes = typeof appThemes

declare module "react-native-unistyles" {
	export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
	themes: appThemes,
	settings: {
		initialTheme: "light",
	},
})
