import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native"
import { theme } from "../../resources/theme"

type Props = {
	title: string
	onPress: () => void
	color?: keyof typeof theme.colors
	size?: keyof typeof theme.fontSize
	isDisabled: boolean
	style?: StyleProp<ViewStyle>
}

export default function ButtonText({ title, onPress, color, size, isDisabled, style }: Props) {
	const textStyles: StyleProp<TextStyle> = {
		fontWeight: "600",
		color:
			color === undefined
				? theme.colors.textDark
				: theme.colors[color as keyof typeof theme.colors],
		fontSize:
			size === undefined
				? theme.fontSize.s
				: theme.fontSize[size as keyof typeof theme.fontSize],
	}

	return (
		<TouchableOpacity
			activeOpacity={0.8}
			style={[styles.btn, style]}
			onPress={onPress}
			disabled={isDisabled}
		>
			<Text style={textStyles}>{title}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	btn: {},
})
