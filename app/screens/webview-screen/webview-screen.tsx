import * as React from "react"
import { Platform, ScrollView, View, ViewStyle } from "react-native"
import {Button, Screen, Text} from "../../components"
// import { useStores } from "../models/root-store"
import { color, metrics, palette } from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import {BackButton} from "../../components/back-button";
import WebView from "react-native-webview"
import {
  BarIndicator,
} from "react-native-indicators"

export interface WebviewScreenProps extends NavigationScreenProps<{}> {
}

interface WebviewScreenState {
  url: string,
  title: string,
  canGoBack:object,
  loading: boolean
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}


export class WebviewScreen extends React.Component<WebviewScreenProps, WebviewScreenState> {

  // @ts-ignore
  state = {
    url: this.props.navigation.getParam("url", ""),
    title: this.props.navigation.getParam("title", "webview detail page"),
    loading: true
  }

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
      title: navigation.getParam("title", "webview detail page"),
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",

        marginLeft: titleMargin,
      },
    }
  }

  // onNavigationStateChange(navState) {
  //   console.log('aaa')
  //   this.setState({
  //     canGoBack: navState.canGoBack,
  //     url: navState.url,
  //     loading: false
  //   })
  // }

  handleWebViewNavigationStateChange = navState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = navState;
    if (!url) return;

    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
    });

    // // handle certain doctypes
    // if (url.includes('.pdf')) {
    //   this.webview.stopLoading();
    //   // open a modal with the PDF viewer
    // }
    //
    // // one way to handle a successful form submit is via query strings
    // if (url.includes('?message=success')) {
    //   this.webview.stopLoading();
    //   // maybe close this view?
    // }
    //
    // // one way to handle errors is via query string
    // if (url.includes('?errors=true')) {
    //   this.webview.stopLoading();
    // }
    //
    // // redirect somewhere else
    // if (url.includes('google.com')) {
    //   const newURL = 'https://facebook.github.io/react-native/';
    //   const redirectTo = 'window.location = "' + newURL + '"';
    //   this.webview.injectJavaScript(redirectTo);
    // }

  };

  render(){

    const indicator = <BarIndicator sizs={12} color={palette.martinique} style={{
      flex: 1,
      justifyContent: 'center',
      position:'absolute',
      width: metrics.screenWidth,
      height: metrics.screenHeight - 64 - 40 - 25,
      alignItems: 'center',}} />

    return (
      <ScrollView>
        <WebView
          ref={webView => this.webView = webView}
          startInLoadingState={true}
          bounces={true}
          scalesPageToFit={false}
          onNavigationStateChange={e => this.handleWebViewNavigationStateChange(e)}
          source={{uri: this.state.url}}
          scrollEnabled={true}
          onLoad={(e) => console.log('onLoad')}
          onLoadEnd={(e) => console.log('onLoadEnd')}
          onLoadStart={(e) => console.log('onLoadStart')}
          renderError={() => {
            console.log('renderError')
            return <View><Text>renderError回调了，出现错误</Text></View>
          }}
          renderLoading={() => {
            return indicator
          }}

          style={{
            width: metrics.screenWidth,
            height: metrics.screenHeight - 64 - 40 - 25
          }}
        />


      </ScrollView>
    )
  }

}
