import { createStackNavigator } from "react-navigation"
import {MainNavigator, MakeHeader} from "./main-navigator"
import {WelcomeScreen,
} from "../screens";
import {IndicatorScreen} from "../demonstrate/indicator-screen/indicator-screen";
import {pageList} from "./routers";
import {CarouselScreen} from "../demonstrate/react-native-snap-carousel/carousel-screen";
import {EchartScreen} from "../demonstrate/echarts-for-react/echart-screen";
import {WebviewScreen} from "../screens/webview-screen/webview-screen";
import {ParallaxScrollViewScreen} from "../demonstrate/react-native-parallax-scroll-view/react-native-parallax-scroll-view";
import {BeeshellScreen} from "../screens/beshell-screen/beeshell-screen";


export const RootNavigator = createStackNavigator(
  {
    welcome: { screen: WelcomeScreen,
    },
    mainStack: { screen: MainNavigator,
    },
    // indicatorScreen: {screen: IndicatorScreen},





// other screens
//     ...pageList.reduce((res, item) => {
//       res[item.key] = {
//         navigationOptions: ({navigation}) => ({
//           header: ({navigation, item}) => {
//             MakeHeader(navigation, item.title || `${item.key} ${item.label}`, '', item)
//           }
//         }),
//         ...item
//       }
//       return res
//     })

  },
  {
    initialRouteName: "welcome",
    headerMode: "none",
    navigationOptions: { gesturesEnabled: false },
    cardStyle: { shadowColor: "transparent" },
  },
)


