import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import MainScreen from '../Containers/MainScreen'

const InitNav = createStackNavigator({
  LaunchScreen: {
    screen: LaunchScreen,
    navigationOptions: {
      header: null,
    }
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

// Manifest of possible screens
// const PrimaryNav = createStackNavigator({
//   MainScreen: {
//     screen: MainScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       header: null
//     }
//   },
// }, {
//   // Default config for all screens
//   headerMode: 'none',
//   initialRouteName: 'HomeScreen',
//   navigationOptions: {
//     headerStyle: styles.header
//   }
// })

export default createAppContainer(InitNav)
// export default createAppContainer(createSwitchNavigator({
//   Init: InitNav,
//   // Main:PrimaryNav
// }))
