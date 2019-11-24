import * as React from "react"
import {Platform, ScrollView, StatusBar, StyleSheet, Text, View} from "react-native"
import LinearGradient from 'react-native-linear-gradient';

import {Screen, SliderEntry} from "../../components"
// import { useStores } from "../models/root-store"
import {metrics, palette} from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import Carousel, {Pagination}  from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
// import styles, { colors } from './styles/index.style';
import { ENTRIES1, ENTRIES2 } from './static/entries';
import { scrollInterpolators, animatedStyles } from './utils/animations';
import {
  BarIndicator,
} from "react-native-indicators"

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;

export interface CarouselScreenProps extends NavigationScreenProps<{}> {

}

interface CarouselScreenState {
  slider1ActiveSlide:number,
  loading: boolean
}

export class CarouselScreen extends React.Component<CarouselScreenProps, CarouselScreenState> {



  state = {
    slider1ActiveSlide: 1,
    loading: true
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({
      loading: false,
    })
  }





  static navigationOptions = ({navigation}) => {
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.white,
        borderBottomWidth: 0,
        color: palette.black,
      },
      headerBackTitle: null,
      // headerBackImage: <BackButton backTitle={navigation.getParam("backTitle", "Carousel Demos")}/>,
      headerTintColor: palette.black,
      title: "Carousel Demos",
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",

        marginLeft: titleMargin,
      },
    }
  }


  _renderItem ({item, index}) {
    return <SliderEntry data={item} even={(index + 1) % 2 === 0}  />;
  }

  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
       />
    );
  }

  _renderLightItem ({item, index}) {
    return <SliderEntry data={item} even={false}  />;
  }

  _renderDarkItem ({item, index}) {
    return <SliderEntry data={item} even={true}  />;
  }

  mainExample (number, title) {
    const { slider1ActiveSlide } = this.state;

    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
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
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
        />
        <Pagination
          dotsLength={ENTRIES1.length}
          activeDotIndex={slider1ActiveSlide}
          containerStyle={styles.paginationContainer}
          dotColor={'rgba(255, 255, 255, 0.92)'}
          dotStyle={styles.paginationDot}
          inactiveDotColor={colors.black}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          carouselRef={this._slider1Ref}
          tappableDots={!!this._slider1Ref}
        />
      </View>
    );
  }

  momentumExample (number, title) {
    return (
      <View style={styles.exampleContainer}>
        <Text style={styles.title}>{`Example ${number}`}</Text>
        <Text style={styles.subtitle}>{title}</Text>
        <Carousel
          data={ENTRIES2}
          renderItem={this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          inactiveSlideScale={0.95}
          inactiveSlideOpacity={1}
          enableMomentum={true}
          activeSlideAlignment={'start'}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          activeAnimationType={'spring'}
          activeAnimationOptions={{
            friction: 4,
            tension: 40
          }}
        />
      </View>
    );
  }

  layoutExample (number, title, type) {
    const isTinder = type === 'tinder';
    return (
      <View style={[styles.exampleContainer, isTinder ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isTinder ? {} : styles.titleDark]}>{`Example ${number}`}</Text>
        <Text style={[styles.subtitle, isTinder ? {} : styles.titleDark]}>{title}</Text>
        <Carousel
          data={isTinder ? ENTRIES2 : ENTRIES1}
          renderItem={isTinder ? this._renderLightItem : this._renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          layout={type}
          loop={true}
        />
      </View>
    );
  }

  customExample (number, title, refNumber, renderItemFunc) {
    const isEven = refNumber % 2 === 0;

    // todo Do not render examples on Android; because of the zIndex bug, they won't work as is
    // here we make it to show on android.
    return IS_ANDROID ? (
      <View style={[styles.exampleContainer, isEven ? styles.exampleContainerDark : styles.exampleContainerLight]}>
        <Text style={[styles.title, isEven ? {} : styles.titleDark]}>{`Example ${number}`}</Text>
        <Text style={[styles.subtitle, isEven ? {} : styles.titleDark]}>{title}</Text>
        <Carousel
          data={isEven ? ENTRIES2 : ENTRIES1}
          renderItem={renderItemFunc}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          scrollInterpolator={scrollInterpolators[`scrollInterpolator${refNumber}`]}
          slideInterpolatedStyle={animatedStyles[`animatedStyles${refNumber}`]}
          useScrollView={true}
        />
      </View>
    ) : false;
  }

  get gradient () {
    return (
      <LinearGradient
        colors={[colors.background1, colors.background2]}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render () {
    const {loading} = this.state;
    const indicator = <BarIndicator sizs={12} color={palette.martinique} style={{
      flex: 1,
      justifyContent: 'center',
      width: metrics.screenWidth,
      height: metrics.screenHeight - 64 - 40 - 25,
      alignItems: 'center',}} />

    const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
    const example2 = this.momentumExample(2, 'Momentum | Left-aligned | Active animation');
    const example3 = this.layoutExample(3, '"Stack of cards" layout | Loop', 'stack');
    const example4 = this.layoutExample(4, '"Tinder-like" layout | Loop', 'tinder');
    const example5 = this.customExample(5, 'Custom animation 1', 1, this._renderItem);
    const example6 = this.customExample(6, 'Custom animation 2', 2, this._renderLightItem);
    const example7 = this.customExample(7, 'Custom animation 3', 3, this._renderDarkItem);
    const example8 = this.customExample(8, 'Custom animation 4', 4, this._renderLightItem);



    return (
      <Screen style={{}} preset="scroll">
        {loading ? indicator : <View style={styles.container}>
          { this.gradient }
          <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            { example1 }
            { example2 }
            { example3 }
            { example4 }
            { example5 }
            { example6 }
            { example7 }
            { example8 }
          </ScrollView>
        </View>}
      </Screen>
    );
  }
}




const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD'
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.black
  },
  container: {
    flex: 1,
    backgroundColor: colors.background1
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  exampleContainer: {
    paddingVertical: 30
  },
  exampleContainerDark: {
    backgroundColor: colors.black
  },
  exampleContainerLight: {
    backgroundColor: 'white'
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  titleDark: {
    color: colors.black
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: 'transparent',
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 13,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  slider: {
    marginTop: 15,
    overflow: 'visible' // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  }
});
