import { StyleSheet, Text, View } from "react-native"
// import { useColorTheme } from "../hooks/useColorTheme"
// import ButtonText from "../components/buttons/ButtonText"

export default function Settings() {
	// const { colorTheme, setDarkTheme, setLightTheme } = useColorTheme()

	return (
		<View style={styles.container}>
			<Text>Change theme</Text>
			{/* <ButtonText title="Light" onPress={setLightTheme} isDisabled={colorTheme === "light"} />
			<ButtonText title="Dark" onPress={setDarkTheme} isDisabled={colorTheme === "dark"} /> */}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
})
