import * as React from "react"
import { View, Image, ViewStyle, TextStyle } from "react-native"
import { NavigationScreenProps } from "react-navigation"
import { Button, Screen, Wallpaper } from "../../components"
import {color, metrics, spacing} from "../../theme"

const background = require("./background.png");

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  // paddingHorizontal: spacing[4],
}
const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: "Montserrat",
}
const BOLD: TextStyle = { fontWeight: "bold" }
// const HEADER: TextStyle = {
//   paddingTop: spacing[3],
//   paddingBottom: spacing[4] + spacing[1],
//   paddingHorizontal: 0,
// }
// const HEADER_TITLE: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 12,
//   lineHeight: 15,
//   textAlign: "center",
//   letterSpacing: 1.5,
// }
// const TITLE_WRAPPER: TextStyle = {
//   ...TEXT,
//   textAlign: "center",
// }
// const TITLE: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 28,
//   lineHeight: 38,
//   textAlign: "center",
// }
// const ALMOST: TextStyle = {
//   ...TEXT,
//   ...BOLD,
//   fontSize: 26,
//   fontStyle: "italic",
// }
// const BOWSER: ImageStyle = {
//   alignSelf: "center",
//   marginVertical: spacing[5],
//   maxWidth: "100%",
// }
// const CONTENT: TextStyle = {
//   ...TEXT,
//   color: "#BAB6C8",
//   fontSize: 15,
//   lineHeight: 22,
//   marginBottom: spacing[5],
// }
const CONTINUE: ViewStyle = {
  position: 'absolute',
  width: metrics.screenWidth,
  bottom: 80,
  justifyContent: 'center',
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "rgba(91,125,244,.5)",
}
const CONTINUE_TEXT: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
// const FOOTER: ViewStyle = { backgroundColor: "#20162D" }
// const FOOTER_CONTENT: ViewStyle = {
//   paddingVertical: spacing[4],
//   paddingHorizontal: spacing[4],
// }

export interface WelcomeScreenProps extends NavigationScreenProps<{}> {}

export class WelcomeScreen extends React.Component<WelcomeScreenProps>{
  timer: number;

  componentDidMount() {
    this.timer = setTimeout(() => {
      // SplashScreen.hide();
      this.props.navigation.navigate('home')
    }, 3000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }


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
      <View style={FULL}>
        <Wallpaper />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <Image source={background}
                 style={{
                   flex: 1,
                   width: metrics.screenWidth,
                   height: metrics.screenHeight - 24,
                   // marginTop: -20,
                   // resizeMode: "stretch"
                 }}
          />
        </Screen>
        <View>
          <Button
            style={CONTINUE}
            textStyle={CONTINUE_TEXT}
            text={'enjoy it!'}
            onPress={() => {
              this.props.navigation.navigate('home')
            }}
          />
        </View>
      </View>
    )
  }
}
