import * as React from "react"
import {Platform} from "react-native"
import {BackButton, Screen, Text} from "../../components"
// import { useStores } from "../models/root-store"
import {palette} from "../../theme"
import { NavigationScreenProps } from "react-navigation"

export interface DiscoverInfoScreenProps extends NavigationScreenProps<{}> {
}

export class DiscoverInfoScreen extends React.Component<DiscoverInfoScreenProps, {}> {
  static navigationOptions = ({navigation}) => {
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.white,
        borderBottomWidth: 0,
      },
      headerBackTitle: null,
      headerBackImage: <BackButton backTitle={navigation.getParam("backTitle", "")}/>,
      headerTintColor: palette.shamrock,
      title: "",
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",
        marginLeft: titleMargin,
      },
    }
  }

  render(){
    return (
      <Screen preset="scroll">
        <Text preset="header" style={{color: palette.black}} text={'discover detail'} />
      </Screen>
    )
  }
}
