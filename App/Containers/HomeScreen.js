import React, { Component } from 'react'
import { Image, Platform, ScrollView, StatusBar, Text, View } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import NavigationBar from '../Components/NavigationBar'
import RoundedButton from '../Components/RoundedButton'
import styles, { colors } from './Styles/HomeScreenStyle'

import Carousel, { Pagination } from 'react-native-snap-carousel';
import { itemWidth, sliderWidth } from '../Themes/Metrics'
import SliderEntry from '../Components/SliderEntry'

const SLIDER_1_FIRST_ITEM = 1;

class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    }
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('light-content');
      StatusBar.setBackgroundColor('#148fd5');
      StatusBar.setTranslucent(false);
    });

  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  _renderItemWithParallax =  ({item, index}, parallaxProps) => {
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
  topCarousel () {
    const { slider1ActiveSlide } = this.state;

    const ENTRIES1 = [
      {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      },
      {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://68dsw.oss-cn-beijing.aliyuncs.com/images/site/2/gallery/2019/04/28/15564235994967.jpg'
      }
    ];

    return (
      <ScrollView>
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


  render () {
    let statusBar = {
      backgroundColor: '#148fd5',
      barStyle: 'light-content',
    };
    let navigationBar = <NavigationBar
      // statusBar={statusBar}
      hide={true}
    />;

    return (
      <View style={{flex: 1}}>
        {navigationBar}

        {this.topCarousel(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots')}
        <RoundedButton
          styles={{

          }}
          onPress={
            () => this.props.navigation.navigate('CarouselScreen')
          }
        >
          轮播演示
        </RoundedButton>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
