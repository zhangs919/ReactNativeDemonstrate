import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import MainScreen from '../Containers/MainScreen'
import CarouselScreen from '../../demonstrate/react-native-snap-carousel/CarouselScreen'

const InitNav = createStackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      header: null,
    }
  },
})


// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
  HomeScreen: {
    screen: HomeScreen,
  },


  // Demonstrate Screens
  CarouselScreen: {
    screen: CarouselScreen,
  },

}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'HomeScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// export default createAppContainer(InitNav)
export default createAppContainer(createSwitchNavigator({
  Init: InitNav,
  Main:PrimaryNav
}, {
  navigationOptions: {
    header: null,
  },
}))
