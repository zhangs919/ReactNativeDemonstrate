import * as React from "react"
import { createBottomTabNavigator, createStackNavigator } from "react-navigation"

import {palette } from "../theme"
import {CategoryScreen, DiscoverInfoScreen, DiscoverScreen, HomeScreen,MessageScreen, MyScreen} from "../screens";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {View,Text} from "react-native";
import {CarouselScreen} from "../demonstrate/react-native-snap-carousel/carousel-screen";
import {EchartScreen} from "../demonstrate/echarts-for-react/echart-screen";
import { IndicatorScreen } from "../demonstrate/indicator-screen/indicator-screen"
import { WebviewScreen } from "../screens/webview-screen/webview-screen"


class IconWithBadge extends React.Component {
  render() {
    // @ts-ignore
    const { name, badgeCount, color, size } = this.props;
    return (
      <View style={{ width: 24, height: 24, margin: 5 }}>
        <MaterialCommunityIcons name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <View
            style={{
              // /If you're using react-native < 0.57 overflow outside of the parent
              // will not work on Android, see https://git.io/fhLJ8
              position: 'absolute',
              right: -6,
              top: -3,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 12,
              height: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
              {badgeCount}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

// @ts-ignore
const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation,focused,tintColor) =>{
  const {routeName} = navigation.state;
  let IconComponent = MaterialCommunityIcons;
  let iconName;
  if (routeName === 'home') {
    // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    iconName = 'home';
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  }else if (routeName === 'category') {
    iconName = `widgets`;
  }else if (routeName === 'discover') {
    iconName = `refresh`;
  }else if (routeName === 'message') {
    iconName = `comment-multiple`;
  }else if (routeName === 'my') {
    iconName = `account`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
}

export const MainNavigator = createStackNavigator(
  {
    tabs: {
      screen: createBottomTabNavigator(
        {
          home: createStackNavigator(
            {
              homeScreen: { screen: HomeScreen },
              carouselScreen: {screen: CarouselScreen},
              indicatorScreen: {screen: IndicatorScreen},
              echartScreen: {screen: EchartScreen},
              webviewScreen: {screen: WebviewScreen, },
            },
            {
              initialRouteName: "homeScreen",
            },
          ),
          category: createStackNavigator(
            {
              categoryScreen: { screen: CategoryScreen },
            },
            {
              initialRouteName: "categoryScreen",
            },
          ),
          discover: createStackNavigator(
            {
              discoverScreen: { screen: DiscoverScreen },
              discoverInfoScreen: { screen: DiscoverInfoScreen },
            },
            {
              initialRouteName: "discoverScreen",
            },
          ),
          message: createStackNavigator(
            {
              messageScreen: { screen: MessageScreen },
            },
            {
              initialRouteName: "messageScreen",
            },
          ),
          my: createStackNavigator(
            {
              myScreen: { screen: MyScreen },
            },
            {
              initialRouteName: "myScreen",
            },
          ),
        },
        {
          defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) =>
              getTabBarIcon(navigation, focused, tintColor),
            // tabBarIcon: ({ focused }) => {
            //   const { routeName } = navigation.state
            //   return <TabIcon routeName={routeName} focused={focused} />
            // },
          }),
          tabBarPosition: "bottom",
          animationEnabled: false,
          swipeEnabled: false,
          initialRouteName: "home",
          tabBarOptions: {
            // style: {
            //   backgroundColor: color.tabbar,
            //   height: 56,
            //   paddingVertical: spacing[1],
            // },
            activeTintColor: palette.black,
          },
        },
      ),
    },
  },
  {
    headerMode: "none",
    initialRouteName: "tabs",
    navigationOptions: {
      gesturesEnabled: false,
    },
    cardStyle: { shadowColor: "transparent" },
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = [
  // "welcome"
]
