import * as React from "react"
import {Platform, ViewStyle} from "react-native"
import {Button, Screen, Text} from "../../components"
// import { useStores } from "../models/root-store"
import {color, palette} from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import {BackButton} from "../../components/back-button";

export interface DiscoverScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}


export class DiscoverScreen extends React.Component<DiscoverScreenProps, {}> {
  static navigationOptions = ({navigation}) => {
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.white,
        borderBottomWidth: 0,
      },
      headerBackTitle: null,
      headerBackImage: <BackButton backTitle={navigation.getParam("backTitle", "Discover")}/>,
      headerTintColor: palette.shamrock,
      title: null,
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
      <Screen style={ROOT} preset="scroll">
        <Text style={{color: palette.black}} preset="header" tx="discoverScreen.header" />
        <Button text={'discover info'} onPress={()=>{
          this.props.navigation.navigate('discoverInfoScreen')
        }}/>
      </Screen>
    )
  }

}
