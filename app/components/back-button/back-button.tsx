import * as React from "react"
import { Image, TextStyle, View, ViewStyle } from "react-native"
import { metrics, palette, spacing } from "../../theme"
import { Text } from "../"

const HEADER_TEXT: TextStyle = {
  fontSize: 17,
  fontWeight: "600",
  lineHeight: 45,
  marginLeft: spacing[4],
  color: palette.black,
}

const BACK_ARROW: ViewStyle = {
  flexDirection: "row",
  paddingLeft: spacing[4],
  alignItems: "center",
  justifyContent: "center",
}

export function BackButton(props: { backTitle: string }) {
  return (
    <View style={BACK_ARROW} hitSlop={metrics.HIT_SLOP}>
      <Image source={require("../../components/title-bar/icon.back-arrow.png")} />
      {/*<Text text={props.backTitle} style={HEADER_TEXT} />*/}
    </View>
  )
}
