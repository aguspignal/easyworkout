import { StyleSheet, UnistylesRuntime } from "react-native-unistyles"
import { Text, View } from "react-native"
import ButtonFilled from "../components/buttons/ButtonFilled"

export default function Home() {
	function toggleTheme() {
		var currentTheme = UnistylesRuntime.themeName
		currentTheme === "light"
			? UnistylesRuntime.setTheme("dark")
			: UnistylesRuntime.setTheme("light")
	}

	return (
		<View style={styles.container}>
			<Text style={styles.text}>This is the home</Text>
			<ButtonFilled onPress={toggleTheme} title="Toggle Theme" />
		</View>
	)
}

const styles = StyleSheet.create((theme) => ({
	container: {
		backgroundColor: theme.colors.background,
	},
	text: {
		color: theme.colors.text,
	},
}))
