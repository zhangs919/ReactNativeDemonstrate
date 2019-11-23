import * as React from "react"
import {View, ViewStyle, TextStyle, TouchableOpacity} from "react-native"
import { HeaderProps } from "./header.props"
import { Button, Icon, Text } from "../"
import { spacing } from "../../theme"
import { translate } from "../../i18n/"
import Ionicons from 'react-native-vector-icons/Ionicons'


// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}
const TITLE: TextStyle = { textAlign: "center" }
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: "center" }
const LEFT: ViewStyle = { width: 32 }
const RIGHT: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const Header: React.FunctionComponent<HeaderProps> = props => {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""
  {/*<Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} />
        </Button>*/}
  return (

    <View style={{ ...ROOT, ...style }}>
      {leftIcon ? (
        <TouchableOpacity
          style={{padding: 8, paddingLeft: 12}}
          onPress={onLeftPress}>
          <Ionicons
            name={'ios-arrow-back'}
            size={26}
            style={{color: 'white'}}/>
        </TouchableOpacity>
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={{ ...TITLE, ...titleStyle }} text={header} />
      </View>
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} />
        </Button>
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  )
}
