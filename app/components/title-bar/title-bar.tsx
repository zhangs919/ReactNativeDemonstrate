import * as React from "react"
import { NavigationScreenProps } from "react-navigation"
import { View, ViewStyle, Image, TextStyle, ImageStyle } from "react-native"
import { Text } from "../"
import { palette, spacing } from "../../theme"

const ROOT: ViewStyle = {
  flexDirection: "row",
  backgroundColor: palette.portGore,
  // padding: spacing.large + spacing.tiny,
  padding: spacing[4] + spacing[1],
}

const BACK_BUTTON: ImageStyle = {
  width: 15,
  height: 15,
}

const TITLE: TextStyle = {}

export interface TitleBarNavigationParams {
  title?: string
}
export interface TitleBarProps extends NavigationScreenProps<TitleBarNavigationParams> {}

export class TitleBar extends React.Component<TitleBarProps, {}> {
  render() {
    return (
      <View style={ROOT}>
        <Image source={require("./icon.back-arrow.png")} style={BACK_BUTTON} />
        <Text text={this.props.navigation.state.params.title} style={TITLE} />
      </View>
    )
  }
}
