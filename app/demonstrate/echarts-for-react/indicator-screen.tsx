import * as React from "react"
import { Platform, View, ViewStyle } from "react-native"
import {Button, Screen, Text} from "../../components"
// import { useStores } from "../models/root-store"
import {color, palette} from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import {BackButton} from "../../components/back-button";
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from "react-native-indicators"

export interface IndicatorScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}


export class IndicatorScreen extends React.Component<IndicatorScreenProps, {}> {

  static navigationOptions = ({navigation}) => {
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.white,
        borderBottomWidth: 0,
        color: palette.black,
      },
      headerBackTitle: null,
      // headerBackImage: <BackButton backTitle={navigation.getParam("backTitle", "Carousel Demos")}/>,
      headerTintColor: palette.black,
      title: "Carousel Demos",
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

        {/*indicators*/}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginVertical: 15,
          }}
        >
          <BallIndicator color={palette.purple} />
          <BarIndicator color={palette.purple} />
          <DotIndicator color={palette.purple} />
          <MaterialIndicator color={palette.purple} />
          <PacmanIndicator color={palette.angry} />
          <PulseIndicator color={palette.purple} />
          <SkypeIndicator color={palette.purple} />
          <UIActivityIndicator color={palette.purple} />
          <WaveIndicator color={palette.purple} />
        </View>
      </Screen>
    )
  }

}
