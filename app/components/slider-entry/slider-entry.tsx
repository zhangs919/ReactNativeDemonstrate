import * as React from "react"
import {Image, Platform, StyleSheet, TouchableOpacity, View} from "react-native"
import { Text } from "../"
import {ParallaxImage} from "react-native-snap-carousel"
import {palette,metrics} from "../../theme";
import {NavigationScreenProps} from "react-navigation";
const IS_IOS = Platform.OS === 'ios';

const entryBorderRadius = 8;

export interface SliderEntryProps extends NavigationScreenProps{
  // /**
  //  * Text which is looked up via i18n.
  //  */
  // tx?: string
  //
  // /**
  //  * The text to display if not using `tx` or nested components.
  //  */
  // text?: string
  //
  // /**
  //  * An optional style override useful for padding & margin.
  //  */
  // style?: ViewStyle

  // data: object
  data:{
    title: string,
    subtitle: string
  }

  even?: boolean

  parallax?: boolean

  parallaxProps?: object

}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
// export function SliderEntry(props: SliderEntryProps) {
//   // grab the props
//   const { tx, text, style, ...rest } = props
//   const textStyle = { }
//
//   return (
//     <View style={style} {...rest}>
//       <Text tx={tx} text={text} style={textStyle} />
//     </View>
//   )
// }

export class SliderEntry extends React.Component<SliderEntryProps,{}>{
  // grab the props
  get image () {
    // @ts-ignore
    const { data: { illustration }, parallax, parallaxProps, even } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image
        source={{ uri: illustration }}
        style={styles.image}
      />
    );
  }

  render () {
    const { data: { title, subtitle }, even } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}
      >
        { title.toUpperCase() }
      </Text>
    ) : false;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        // onPress={() => { alert(`You've clicked '${title}'`); }}
      >
        <View style={styles.shadow} />
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          { this.image }
          <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
        </View>
        <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          { uppercaseTitle }
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}
          >
            { subtitle }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: metrics.itemWidth,
    height: metrics.slideHeight,
    paddingHorizontal: metrics.itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: metrics.itemHorizontalMargin,
    right: metrics.itemHorizontalMargin,
    bottom: 18,
    shadowColor: palette.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  imageContainerEven: {
    backgroundColor: palette.black
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
    backgroundColor: 'white'
  },
  radiusMaskEven: {
    backgroundColor: palette.black
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius
  },
  textContainerEven: {
    backgroundColor: palette.black
  },
  title: {
    color: palette.black,
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },
  titleEven: {
    color: 'white'
  },
  subtitle: {
    marginTop: 6,
    color: palette.lightGrey,
    fontSize: 12,
    fontStyle: 'italic'
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)'
  }
});
