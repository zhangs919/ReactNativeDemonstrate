import * as React from "react"
import {Image, View, ViewStyle, StyleSheet, Text} from "react-native"
// import { useStores } from "../models/root-store"
import {color, metrics, palette} from "../../theme"
import {NavigationScreenProps} from "react-navigation"
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Header} from "../../components";

const PARALLAX_HEADER_HEIGHT = 270;
const AVATAR_SIZE = 90;

export interface ParallaxScrollViewScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}


export class ParallaxScrollViewScreen extends React.Component<ParallaxScrollViewScreenProps, {}> {

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
      tabBarOptions: null
    }
  }

  getParallaxRenderConfig(params) {


    let config = {};
    let avatar = typeof (params.avatar) === 'string' ? {uri: params.avatar} : params.avatar;
    config.renderBackground = () => (
      <View key="background">
        <Image
          // source={{
          //   uri: params.backgroundImg,
          //   width: metrics.screenWidth,
          //   height: PARALLAX_HEADER_HEIGHT
          // }}
          source={params.backgroundImg}
          style={{
            width:metrics.screenWidth,
            height: PARALLAX_HEADER_HEIGHT
          }}
        />
        <View style={{
          position: 'absolute',
          top: 0,
          width: metrics.screenWidth,
          backgroundColor: 'rgba(0,0,0,.3)',
          height: PARALLAX_HEADER_HEIGHT
        }}/>
      </View>
    );
    config.renderForeground = () => (
      <View key="parallax-header" style={styles.parallaxHeader}>
        <Image style={styles.avatar}
               source={avatar}/>
        <Text style={styles.sectionSpeakerText}>
          {params.name}
        </Text>
        <Text style={styles.sectionTitleText}>
          {params.description}
        </Text>
      </View>
    );
    config.renderStickyHeader = () => (
      <View key="sticky-header" style={styles.stickySection}>
        <Text style={styles.stickySectionText}>{params.name}</Text>
      </View>
    );

    config.renderFixedHeader = () => (

      <View key="fixed-header" style={styles.fixedSection}>
        <Header
          headerTx=""
          leftIcon="back"
          onLeftPress={() => {
            this.props.navigation.goBack(null),[this.props.navigation]
          }}
          // style={HEADER}
          // titleStyle={HEADER_TITLE}
        />
      </View>
    );
    return config;

  }

  render() {
    const params = {
      "name": "React Native Demonstrate",
      "description": "This is a hot project created by React Native,it's based on the React Native support Android and iOS double platforms",
      "avatar": "",
      "backgroundImg": require("./background_image.jpg"),
    }
    const renderConfig = this.getParallaxRenderConfig(params);
    return (
      <ParallaxScrollView
        backgroundColor={palette.portGore}
        contentBackgroundColor={palette.lighterGrey}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={metrics.stickyHeaderHeight}
        backgroundScrollSpeed={10}
        {...renderConfig}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <View style={{
            height: metrics.slideHeight
          }}><Text>parallax scroll view</Text></View>
          <View style={{
            height: metrics.slideHeight
          }}><Text>parallax scroll view</Text></View>
        </View>
      </ParallaxScrollView>
    )
  }

}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: 'black'
  // },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: metrics.screenWidth,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: metrics.stickyHeaderHeight,
    alignItems: 'center',
    paddingTop: metrics.top
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: metrics.top
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
    marginBottom: 10
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    marginLeft: 10
  },
});
