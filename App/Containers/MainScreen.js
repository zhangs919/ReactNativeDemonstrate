import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen'
import MyScreen from './MyScreen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CategoryScreen from './CategoryScreen'
import DiscoverScreen from './DiscoverScreen'
import MessageScreen from './MessageScreen'
import { Colors } from '../Themes'


class IconWithBadge extends React.Component {
  render() {
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

const HomeIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};

const getTabBarIcon = (navigation,focused,tintColor) =>{
  const {routeName} = navigation.state;
  let IconComponent = MaterialCommunityIcons;
  let iconName;
  if (routeName === 'Home') {
    // iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    iconName = 'home';
    // We want to add badges to home tab icon
    // IconComponent = HomeIconWithBadge;
  }else if (routeName === 'Category') {
    iconName = `widgets`;
  }else if (routeName === 'Discover') {
    iconName = `refresh`;
  }else if (routeName === 'Message') {
    iconName = `comment-multiple`;
  }else if (routeName === 'My') {
    iconName = `account`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
}

export default createAppContainer(
  createBottomTabNavigator(
    {
      Home: { screen: HomeScreen },
      Category: { screen: CategoryScreen },
      Discover: { screen: DiscoverScreen },
      Message: { screen: MessageScreen },
      My: { screen: MyScreen },
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
      }),
      tabBarOptions: {
        activeTintColor: Colors.facebook,
        inactiveTintColor: 'gray',
      },
    }
  )
);
