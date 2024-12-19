import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle,
} from "react-native"
import { theme } from "../../utils/theme"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

type Props = {
    title: string
    onPress: () => void
    isDisabled?: boolean
    color?: keyof typeof theme.colors
    size?: keyof typeof theme.spacing
    textColor?: keyof typeof theme.colors
    icon?: string
    iconSize?: number
    iconColor?: keyof typeof theme.colors
    style?: StyleProp<ViewStyle>
}

export default function ButtonFilled({
    title,
    onPress,
    color = "primary",
    size = "xl",
    textColor = "textDark",
    isDisabled = false,
    icon = "def",
    iconSize = theme.fontSize.m,
    iconColor = "textDark",
    style,
}: Props) {
    const btnStyles: StyleProp<ViewStyle> = {
        paddingVertical: theme.spacing.s,
        borderRadius: 6,
        backgroundColor:
            isDisabled || color == undefined
                ? theme.colors.grayDark
                : theme.colors[color as keyof typeof theme.colors],
        paddingHorizontal:
            size == undefined
                ? theme.spacing.s
                : theme.spacing[size as keyof typeof theme.spacing],
    }

    const textStyles: StyleProp<TextStyle> = {
        fontSize: theme.fontSize.s,
        fontWeight: "600",
        alignSelf: "center",
        color: theme.colors[textColor as keyof typeof theme.colors],
    }

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[btnStyles, style]}
            onPress={onPress}
            disabled={isDisabled}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                }}
            >
                {icon !== "def" ? (
                    <Icon
                        name={icon}
                        size={iconSize}
                        color={
                            theme.colors[iconColor as keyof typeof theme.colors]
                        }
                        style={{ marginRight: theme.spacing.xs }}
                    />
                ) : (
                    <></>
                )}
                <Text style={textStyles}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
