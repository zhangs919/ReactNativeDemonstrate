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
import {Header, Screen, SliderEntry} from "../../components"
// import { useStores } from "../models/root-store"
import {color, metrics, palette} from "../../theme"
import {NavigationScreenProps} from "react-navigation"
import Carousel from 'react-native-snap-carousel';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ParallaxScrollView from 'react-native-parallax-scroll-view';

const PARALLAX_HEADER_HEIGHT = 270;
const AVATAR_SIZE = 90;


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

  /*顶部滚动视差*/

  /*顶部滚动视差*/
  getParallaxRenderConfig(params) {


    let config = {};
    // let avatar = typeof (params.avatar) === 'string' ? {uri: params.avatar} : params.avatar;
    config.renderBackground = () => (
      <View key="background">
        <Image
          // source={{
          //   uri: params.backgroundImg,
          //   width: metrics.screenWidth,
          //   height: PARALLAX_HEADER_HEIGHT
          // }}
          source={params.backgroundImg}
          style={{
            width:metrics.screenWidth,
            height: PARALLAX_HEADER_HEIGHT
          }}
        />
        <View style={{
          position: 'absolute',
          top: 0,
          width: metrics.screenWidth,
          backgroundColor: 'rgba(0,0,0,.3)',
          height: PARALLAX_HEADER_HEIGHT
        }}/>
      </View>
    );
    config.renderForeground = () => (
      <View key="parallax-header" style={styles.parallaxHeader}>
        <Text style={styles.sectionSpeakerText}>
          {params.name}
        </Text>
        <Text style={styles.sectionTitleText}>
          {params.description}
        </Text>
      </View>
    );
    config.renderStickyHeader = () => (
      <View key="sticky-header" style={styles.stickySection}>
        <Text style={styles.stickySectionText}>{params.name}</Text>
      </View>
    );

    config.renderFixedHeader = () => (

      <View key="fixed-header" style={styles.fixedSection}>
        <Header
          headerTx=""
          // leftIcon="back"
          // onLeftPress={() => {
          //   this.props.navigation.goBack(null),[this.props.navigation]
          // }}
          rightIcon="bullet"
          onRightPress={() => {

          }}
          // style={HEADER}
          // titleStyle={HEADER_TITLE}
        />
      </View>
    );
    return config;

  }
  topParallax(content) {
    const params = {
      "name": "React Native Demonstrate",
      "description": "This is a hot project created by React Native,it's based on the React Native support Android and iOS double platforms.\n\nAuthor: laravelvip.com",
      "avatar": "",
      "backgroundImg": require("./images/background_image.jpg"),
    }
    const renderConfig = this.getParallaxRenderConfig(params);
    return (
      <ParallaxScrollView
        backgroundColor={palette.portGore}
        contentBackgroundColor={palette.white}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={metrics.stickyHeaderHeight}
        backgroundScrollSpeed={10}
        {...renderConfig}>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          {content}
        </View>

      </ParallaxScrollView>
    )
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
      {
        title: 'Parallax',
        subTitle: 'react-native-parallax-scroll-view',
        routeName: 'parallaxScrollViewScreen',
        icon: require("./images/parallax-scroll-view.png")
      },
      {
        title: 'Parallax',
        subTitle: 'react-native-parallax-scroll-view',
        routeName: 'parallaxScrollViewScreen',
        icon: require("./images/parallax-scroll-view.png")
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
    const content = <View>
      {/*{this.topCarousel()}*/}

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
    </View>;
    return this.topParallax(content)
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

  /*滚动视差*/
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: metrics.screenWidth,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: metrics.stickyHeaderHeight,
    alignItems: 'center',
    paddingTop: metrics.top
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: metrics.top
  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100
  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5,
    marginBottom: 10
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    marginLeft: 10
  },
})
