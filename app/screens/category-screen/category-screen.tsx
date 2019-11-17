import * as React from "react"
import { ViewStyle } from "react-native"
import { Screen, Text } from "../../components"
// import { useStores } from "../models/root-store"
import { color } from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface CategoryScreenProps extends NavigationScreenProps<{}> {
}

interface CategoryScreenState {
  refreshing: boolean
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}

export class CategoryScreen extends React.Component<CategoryScreenProps, CategoryScreenState> {
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
        <Text preset="header" tx="CategoryScreen.header" />
      </Screen>
    )
  }
}
