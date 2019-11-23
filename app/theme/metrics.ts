import {DeviceInfo, Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const TOP = (Platform.OS === 'ios') ? 20 + (DeviceInfo.isIPhoneX_deprecated ? 24 : 0) : 0;
const NAV_BAR_HEIGHT_IOS = 44;
const NAV_BAR_HEIGHT_ANDROID = 50;

const STICKY_HEADER_HEIGHT = (Platform.OS === 'ios') ? NAV_BAR_HEIGHT_IOS + TOP : NAV_BAR_HEIGHT_ANDROID;

// Carousel
const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

const sliderWidth = viewportWidth;
const itemWidth = slideWidth + itemHorizontalMargin * 2
// export const sliderWidth = viewportWidth;
// export const itemWidth = slideWidth + itemHorizontalMargin * 2;


// Used via Metrics.baseMargin
export const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  navBarHeightIos: NAV_BAR_HEIGHT_IOS,
  navBarHeightAndroid: NAV_BAR_HEIGHT_ANDROID,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  },
  spacing: {
    tiny: 4,
    small: 10,
    medium: 14,
    large: 20,
    extraLarge: 43,
    huge: 80,
    ginormous: 100,
  },

  HIT_SLOP: {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  },


  stickyHeaderHeight: STICKY_HEADER_HEIGHT,
  top: TOP,

  // 首页轮播
  slideHeight: slideHeight,
  sliderWidth: sliderWidth,
  itemHorizontalMargin:itemHorizontalMargin,
  itemWidth:itemWidth
}



