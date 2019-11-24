import * as React from "react"
import { createBottomTabNavigator, createStackNavigator } from "react-navigation"

import {palette } from "../theme"
import {CategoryScreen, DiscoverInfoScreen, DiscoverScreen, HomeScreen,MessageScreen, MyScreen} from "../screens";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {View,Text,StyleSheet} from "react-native";
import {CarouselScreen} from "../demonstrate/react-native-snap-carousel/carousel-screen";
import {EchartScreen} from "../demonstrate/echarts-for-react/echart-screen";
import { IndicatorScreen } from "../demonstrate/indicator-screen/indicator-screen"
import { WebviewScreen } from "../screens/webview-screen/webview-screen"
import {ParallaxScrollViewScreen} from "../demonstrate/react-native-parallax-scroll-view/react-native-parallax-scroll-view";
import {BeeshellScreen} from "../screens/beshell-screen/beeshell-screen";
import {NavigationBar} from "beeshell"
import variables from 'beeshell/dist/common/styles/variables';
import {pageList} from "./routers";
import ButtonScreen from "../demonstrate/beeshell/Button";
import BottomModalScreen from "../demonstrate/beeshell/BottomModal";
import NavigationBarScreen from "../demonstrate/beeshell/NavigationBar";
import DropdownScreen from "../demonstrate/beeshell/Dropdown";
import FormScreen from "../demonstrate/beeshell/Form";
import InputScreen from "../demonstrate/beeshell/Input";
import RadioScreen from "../demonstrate/beeshell/Radio";
import CheckboxScreen from "../demonstrate/beeshell/Checkbox";
import SwitchScreen from "../demonstrate/beeshell/Switch";
import SliderScreen from "../demonstrate/beeshell/Slider";
import RateScreen from "../demonstrate/beeshell/Rate";
import StepperScreen from "../demonstrate/beeshell/Stepper";
import ScrollpickerScreen from "../demonstrate/beeshell/Scrollpicker";
import CalendarScreen from "../demonstrate/beeshell/Calendar";
import CascaderScreen from "../demonstrate/beeshell/Cascader";
import ProgressScreen from "../demonstrate/beeshell/Progress";
import BadgeScreen from "../demonstrate/beeshell/Badge";
import TabScreen from "../demonstrate/beeshell/Tab";
import TagScreen from "../demonstrate/beeshell/Tag";
import TreeViewScreen from "../demonstrate/beeshell/TreeView";
import LonglistScreen from "../demonstrate/beeshell/Longlist";
import ModalScreen from "../demonstrate/beeshell/Modal";
import DialogScreen from "../demonstrate/beeshell/Dialog";
import TipScreen from "../demonstrate/beeshell/Tip";
import SlideModalScreen from "../demonstrate/beeshell/SlideModal";
import ActionsheetScreen from "../demonstrate/beeshell/Actionsheet";
import PopoverScreen from "../demonstrate/beeshell/Popover";
import PickerScreen from "../demonstrate/beeshell/Picker";
import TopviewScreen from "../demonstrate/beeshell/Topview";
import RulerScreen from "../demonstrate/beeshell/Ruler";
import AnimationsScreen from "../demonstrate/beeshell/common/AnimationsScreen";
import Demo1Screen from "../demonstrate/beeshell/Demo1Screen";
import Demo2Screen from "../demonstrate/beeshell/Demo2Screen";
import Demo3Screen from "../demonstrate/beeshell/Demo3Screen";
import Demo4Screen from "../demonstrate/beeshell/Demo4Screen";
import TreeScreen from "../demonstrate/beeshell/common/TreeScreen";

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
              parallaxScrollViewScreen: {screen: ParallaxScrollViewScreen, },
              beeshellScreen: {screen: BeeshellScreen},

              /*beeshell screens*/
              Button: {screen: ButtonScreen},
              NavigationBar: {screen: NavigationBarScreen},
              Dropdown: {screen: DropdownScreen},
              Form: {screen: FormScreen},
              Input: {screen: InputScreen},
              Radio: {screen: RadioScreen},
              Checkbox: {screen: CheckboxScreen},
              Switch: {screen: SwitchScreen},
              Slider: {screen: SliderScreen},
              Rate: {screen: RateScreen},
              Stepper: {screen: StepperScreen},
              Scrollpicker: {screen: ScrollpickerScreen},
              Calendar: {screen: CalendarScreen},
              Cascader: {screen: CascaderScreen},

              Progress: {screen: ProgressScreen},
              Badge: {screen: BadgeScreen},
              Tab: {screen: TabScreen},
              Tag: {screen: TagScreen},
              TreeView: {screen: TreeViewScreen},
              Longlist: {screen: LonglistScreen},

              Modal: {screen: ModalScreen},
              Dialog: {screen: DialogScreen},
              Tip: {screen: TipScreen},
              SlideModal: {screen: SlideModalScreen},
              Actionsheet: {screen: ActionsheetScreen},
              BottomModal: {screen: BottomModalScreen},
              Popover: {screen: PopoverScreen},
              Picker: {screen: PickerScreen},
              Topview: {screen: TopviewScreen},

              Animations: {screen: AnimationsScreen},
              Tree: {screen: TreeScreen},
              Demo1: {screen: Demo1Screen},
              Demo2: {screen: Demo2Screen},
              Demo3: {screen: Demo3Screen},
              Demo4: {screen: Demo4Screen},

              Ruler: {screen: RulerScreen},


            },
            {
              initialRouteName: "homeScreen",
              headerMode: "none",
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

    // other screens
    // ...pageList.reduce((res, item) => {
    //   res[item.key] = {
    //     navigationOptions: ({navigation}) => ({
    //       header: ({navigation, item}) => {
    //         MakeHeader(navigation, item.title || `${item.key} ${item.label}`, '', item)
    //       }
    //     }),
    //     ...item
    //   }
    //   return res
    // })
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

export function MakeHeader (navigation, title, backLabel, item?) {
  return (
    <NavigationBar
      testID={item ? `navigationBar${item.key}` : undefined}
      style={{ borderBottomColor: variables.mtdBorderColorDark, borderBottomWidth: StyleSheet.hairlineWidth }}
      title={title}
      backLabel={backLabel}
      onPressBack={() => {
        navigation.back()
      }}
    />
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = [
  // "homeScreen"
]
