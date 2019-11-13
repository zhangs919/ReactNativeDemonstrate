// import React, {Component} from 'react';
// import {Image,View,Text} from 'react-native'
// import {
//   createBottomTabNavigator,
//   createAppContainer,
// } from 'react-navigation';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {BottomTabBar} from 'react-navigation-tabs';
// import {connect} from 'react-redux';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import HomeScreen from '../Containers/HomeScreen'
// import EventBus from "react-native-event-bus";
// import EventTypes from '../Services/EventTypes'
//
// /*
// 优化参考：https://reactnavigation.org/docs/zh-Hans/tab-based-navigation.html
//  */
// const TABS = {
//   HomeScreen: {
//     screen: HomeScreen,
//     navigationOptions: {
//       tabBarLabel: '首页',
//       tabBarIcon: ({tintColor, focused}) => (
//           <View>
//               <MaterialCommunityIcons
//                   name={'home'}
//                   size={26}
//                   style={{color: tintColor}}
//               />
//               <View
//                   style={{
//                       // If you're using react-native < 0.57 overflow outside of parent
//                       // will not work on Android, see https://git.io/fhLJ8
//                       position: 'absolute',
//                       right: -6,
//                       top: -3,
//                       backgroundColor: 'red',
//                       borderRadius: 6,
//                       width: 12,
//                       height: 12,
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                   }}
//               >
//                   <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
//                       8
//                   </Text>
//               </View>
//           </View>
//
//
//       ),
//     },
//   },
//   // CategoryPage: {
//   //   screen: HomeScreen,
//   //   navigationOptions: {
//   //     tabBarLabel: '分类',
//   //     tabBarIcon: ({tintColor, focused}) => (
//   //       <MaterialCommunityIcons
//   //         name={'widgets'}
//   //         size={26}
//   //         style={{color: tintColor}}
//   //       />
//   //     ),
//   //   },
//   // },
//   // NearByPage: {
//   //   screen: HomeScreen,
//   //   navigationOptions: {
//   //     tabBarLabel: '附近商家',
//   //     tabBarIcon: ({tintColor, focused}) => (
//   //       <MaterialCommunityIcons
//   //         name={'map-marker-radius'}
//   //         size={26}
//   //         style={{color: tintColor}}
//   //       />
//   //     ),
//   //   },
//   // },
//   // CartPage: {
//   //   screen: HomeScreen,
//   //   navigationOptions: {
//   //     tabBarLabel: '购物车',
//   //     tabBarIcon: ({tintColor, focused}) => (
//   //       <MaterialIcons
//   //         name={'shopping-cart'}
//   //         size={26}
//   //         style={{color: tintColor}}
//   //       />
//   //     ),
//   //   },
//   // },
//   // MyPage: {
//   //   screen: HomeScreen,
//   //   navigationOptions: {
//   //     tabBarLabel: '我的',
//   //     tabBarIcon: ({tintColor, focused}) => (
//   //       <MaterialCommunityIcons
//   //         name={'account'}
//   //         size={26}
//   //         style={{color: tintColor}}
//   //       />
//   //     ),
//   //   },
//   // },
//
// };
//
// class DynamicTabNavigation extends Component {
//
//   constructor(props) {
//     super(props);
//     console.disableYellowBox = true;
//   }
//
//   _tabNavigator() {
//     if (this.Tabs) {
//       return this.Tabs;
//     }
//     const {HomeScreen} = TABS;
//     const tabs = {HomeScreen};//根据需要定制显示的tab
//     HomeScreen.navigationOptions.tabBarLabel = '首页';//动态配置Tab属性
//     return this.Tabs = createAppContainer(createBottomTabNavigator(tabs, {
//         tabBarComponent: props => {
//           return <TabBarComponent {...props}/>
//         }
//       }
//     ))
//   }
//
//   render() {
//     const Tab = this._tabNavigator();
//       return <Tab
//           onNavigationStateChange={(prevState, newState, action) => {
//               EventBus.getInstance().fireEvent(EventTypes.bottom_tab_select, {//发送底部tab切换的事件
//                   from: prevState.index,
//                   to: newState.index
//               })
//           }}
//       />
//   }
// }
//
// class TabBarComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.theme = {
//     //   tintColor: '#f56456', //props.activeTintColor,
//     //   updateTime: new Date().getTime(),
//     // };
//   }
//
//   render() {
//     return <BottomTabBar
//       {...this.props}
//       activeTintColor= '#f56456' //{this.props.theme}
//     />;
//   }
// }
//
// const mapStateToProps = state => ({
//   // theme: state.theme.theme,
// });
//
// export default connect(mapStateToProps)(DynamicTabNavigation);
//
