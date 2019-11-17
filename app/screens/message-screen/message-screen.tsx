import * as React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useStores } from "../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface MessageScreenProps extends NavigationScreenProps<{}> {
}

interface MessageScreenState {
  refreshing: boolean
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export class MessageScreen extends React.Component<MessageScreenProps, MessageScreenState> {
  state = {
    refreshing: false,
  }
  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    // Header Style is necessary to prevent ugly white header when navigating back to this screen from a child screen
    headerStyle: {
      backgroundColor: color.palette.portGore,
      borderBottomWidth: 0,
    },
  }

  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <Text preset="header" tx="MessageScreen.header" />
      </Screen>
    )
  }
}
