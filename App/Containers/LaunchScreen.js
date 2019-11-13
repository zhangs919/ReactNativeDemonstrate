import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button, StatusBar } from 'react-native'

import { Colors, Images, Metrics } from '../Themes'
import RoundedButton from '../Components/RoundedButton'

export default class LaunchScreen extends Component {

  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          // backgroundColor="#ff0000"
          translucent={true}
          hidden={true}
          animated={true}/>

        <Image source={Images.background}
               style={{
                 flex: 1,
                 width: Metrics.width,
                 height: Metrics.height,
               }}
        />
        <RoundedButton
          styles={{
            marginTop: -60,
            top: -120,
            backgroundColor: Colors.facebook
          }}
          onPress={
            () => this.props.navigation.navigate('HomeScreen')
          }
        >
          开启 react native 之旅
        </RoundedButton>
      </View>
    )
  }
}
