import React, { Component } from 'react'
import { Image, ScrollView, StatusBar, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/HomeScreenStyle'
import NavigationBar from '../Components/NavigationBar'
import Images from '../Themes/Images'
import Metrics from '../Themes/Metrics'

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#148fd5');
      StatusBar.setTranslucent(false);
    });

  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render () {
    let statusBar = {
      backgroundColor: '#148fd5',
      barStyle: 'light-content',
    };
    let navigationBar = <NavigationBar
      // statusBar={statusBar}
      hide={true}
    />;

    return (
      <View style={{flex: 1}}>
        {navigationBar}

        <Image source={require('../Images/temp/home.png')}
               style={{
                 flex: 1,
                 width: Metrics.width,
                 height: Metrics.height,
               }}
        />
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
