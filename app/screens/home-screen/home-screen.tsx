import * as React from "react"
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ToastAndroid
} from "react-native"
import {Screen, SliderEntry} from "../../components"
// import { useStores } from "../models/root-store"
import {color, metrics, palette} from "../../theme"
import {NavigationScreenProps} from "react-navigation"
import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'


export interface HomeScreenProps extends NavigationScreenProps<{}> {
}

interface HomeScreenState {
  slider1ActiveSlide: number,
}

export class HomeScreen extends React.Component<HomeScreenProps, HomeScreenState> {

  state = {
    slider1ActiveSlide: 1,

  }

  static navigationOptions = {
    header: null,
    headerBackTitle: null,
    // Header Style is necessary to prevent ugly white header when navigating back to this screen from a child screen
    headerStyle: {
      backgroundColor: color.palette.portGore,
      borderBottomWidth: 0,
    },
  }


  _renderItemWithParallax = ({item, index}, parallaxProps) => {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  // 顶部轮播
  topCarousel() {
    const ENTRIES1 = [
      {
        title: 'Carousel',
        subtitle: 'react-native-snap-carousel',
        routeName: 'carouselScreen',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'Navigation',
        subtitle: 'react-navigation',
        routeName: 'carouselScreen',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'Echarts',
        subtitle: 'echarts-for-react',
        routeName: 'carouselScreen',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'Carousel',
        subtitle: 'react-native-snap-carousel',
        routeName: 'carouselScreen',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
    ];

    return (
      <ScrollView>
        <Carousel
          // ref={c => this._slider1Ref = c}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={metrics.sliderWidth}
          itemWidth={metrics.itemWidth}
          hasParallaxImages={true}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
          onSnapToItem={(index) => this.setState({slider1ActiveSlide: index})}
        />
        {/*<Pagination*/}
        {/*dotsLength={ENTRIES1.length}*/}
        {/*activeDotIndex={slider1ActiveSlide}*/}
        {/*containerStyle={styles.paginationContainer}*/}
        {/*dotColor={'rgba(60, 155, 239, 0.92)'}*/}
        {/*dotStyle={styles.paginationDot}*/}
        {/*inactiveDotColor={colors.black}*/}
        {/*inactiveDotOpacity={0.4}*/}
        {/*inactiveDotScale={0.6}*/}
        {/*carouselRef={this._slider1Ref}*/}
        {/*tappableDots={!!this._slider1Ref}*/}
        {/*/>*/}
      </ScrollView>
    );
  }

  _keyExtractor = (item, index) => item.title;
  _renderRecComItem(rowData) {
    const item = rowData.item;
    const even = rowData.index % 2;
    const borderRightWidth = even ? 0 : .5;
    const navigation = this.props.navigation;
    const onSelect = goTo => {
      navigation.navigate(item.routeName,{title: item.title})
    }
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onSelect}
      >
        <View
          style={styles.innerViewStyle}
        >
          <Image
            // source={{uri: item.icon}}
            source={item.icon}
            style={styles.iconStyle}

          />
          {/*<MaterialIcons name='view-carousel' size={20} color={palette.black} />*/}
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'space-around',
              width: 90,
              borderRightWidth: borderRightWidth,
              borderRightColor: palette.lightGrey,
              paddingRight: 10
            }}
          >
            <Text>{item.title}</Text>
            <Text style={{
              fontSize: 12,
              color: palette.lighterGrey
            }}>{item.subTitle}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  recommendComponents() {

    const recComData = [
      {
        title: 'Carousel',
        subTitle: 'react-native-snap-carousel',
        routeName: 'carouselScreen',
        // icon: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg',
        icon: require("./images/view_carousel.png")
      },
      {
        title: 'Navigation',
        subTitle: 'react-navigation',
        routeName: 'carouselScreen',
        icon: require("./images/navigation.png")
      },
      {
        title: 'Echarts',
        subTitle: 'echarts-for-react',
        routeName: 'carouselScreen',
        icon: require("./images/chart.png")
      },
      // {
      //   title: 'Button',
      //   subTitle: 'button',
      //   routeName: 'carouselScreen',
      //   icon: require("./images/button.png")
      // },
      {
        title: 'Indicators',
        subTitle: 'react-native-indicators',
        routeName: 'indicatorScreen',
        icon: require("./images/indicator-card.png")
      },
    ]

    return (
      <View style={styles.recComContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}
        >
          <Text style={{
            fontSize: 16,

          }}>Recommend components</Text>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("Show more", ToastAndroid.SHORT);
            }}
          >
            <MaterialCommunityIcons name='dots-horizontal' size={20} color={palette.black} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={recComData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRecComItem.bind(this)}
          contentContainerStyle={{
            // 主轴方向
            flexDirection: 'row',

            justifyContent: 'space-around',
            // 一行显示不下,换一行
            flexWrap: 'wrap',
            // 侧轴方向
            alignItems: 'center', // 必须设置,否则换行不起作用
            marginTop: 15
          }}

          // showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl
          //     title={'Loading'}
          //     // titleColor={THEME_COLOR}
          //     // colors={[THEME_COLOR]}
          //     refreshing={true}
          //     // onRefresh={() => this.loadData()}
          //     // tintColor={THEME_COLOR}
          //   />
          // }
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}
        >
          <Text style={{
            fontSize: 16,

          }}>Commonly used components</Text>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("Show more", ToastAndroid.SHORT);
            }}
          >
            <MaterialCommunityIcons name='dots-horizontal' size={20} color={palette.black} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={recComData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRecComItem.bind(this)}
          contentContainerStyle={{
            // 主轴方向
            flexDirection: 'row',

            justifyContent: 'space-around',
            // 一行显示不下,换一行
            flexWrap: 'wrap',
            // 侧轴方向
            alignItems: 'center', // 必须设置,否则换行不起作用
            marginTop: 15
          }}
        />

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
          }}
        >
          <Text style={{
            fontSize: 16,

          }}>Study resources</Text>
          <TouchableOpacity
            onPress={() => {
              ToastAndroid.show("Show more", ToastAndroid.SHORT);
            }}
          >
            <MaterialCommunityIcons name='dots-horizontal' size={20} color={palette.black} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={recComData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderRecComItem.bind(this)}
          contentContainerStyle={{
            // 主轴方向
            flexDirection: 'row',

            justifyContent: 'space-around',
            // 一行显示不下,换一行
            flexWrap: 'wrap',
            // 侧轴方向
            alignItems: 'center', // 必须设置,否则换行不起作用
            marginTop: 15
          }}
        />

      </View>
    )
  }



  render() {
    return (
      <Screen style={{}} preset="scroll">

        {this.topCarousel()}

        {/*github webview entry*/}
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 15
          }}
          onPress={() => {
            this.props.navigation.navigate('webviewScreen', {url:"https://github.com/zhangs919/ReactNativeDemonstrate", title: 'react native demo github page'})
          }}
        >
          <Text>React Native Demonstrate</Text>
          <AntDesign name='github' size={20} color={palette.portGore} />
        </TouchableOpacity>

        {/*精选组件*/}
        {this.recommendComponents()}



        {/*<Button title={'轮播组件'} onPress={()=>{*/}
          {/*this.props.navigation.navigate('carouselScreen')*/}
        {/*}}/>*/}
      </Screen>
    )
  }
}


const styles = StyleSheet.create({
  /*carousel*/
  slider: {
    marginTop: 15,
    overflow: 'visible'
  },
  sliderContentContainer: {
    paddingVertical: 10
  },

  /*recommend components*/
  recComContainer: {
    flex: 1
  },
  innerViewStyle: {
    width: metrics.screenWidth / 2,
    height: metrics.screenWidth / 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: .5,
    borderTopColor: palette.lightGrey,
  },

  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 3
  },
})
