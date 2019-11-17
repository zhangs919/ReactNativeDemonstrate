import { createStackNavigator } from "react-navigation"
import { MainNavigator } from "./main-navigator"
import {WelcomeScreen,
} from "../screens";

export const RootNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen },
    mainStack: { screen: MainNavigator },
  },
  {
    initialRouteName: "welcome",
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    cardStyle: { shadowColor: "transparent" },
  },
)
