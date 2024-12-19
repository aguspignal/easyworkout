// import { ColorThemeContextProvider } from "./src/contexts/ColorThemeContext"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import RootStack from "./src/components/navigation/RootStack"

export default function App() {
	return (
		// <ColorThemeContextProvider>
		<NavigationContainer>
			<StatusBar style="dark" />
			<RootStack />
		</NavigationContainer>
		// </ColorThemeContextProvider>
	)
}
