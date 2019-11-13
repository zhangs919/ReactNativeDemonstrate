import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { ViewPropTypes,View, Text,StatusBar } from 'react-native'
import styles from './Styles/NavigationBarStyle'
// import {PropTypes} from 'prop-types';


const StatusBarShape = {//设置状态栏所接受的属性
  barStyle: PropTypes.oneOf(['light-content', 'default',]),
  hidden: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

export default class NavigationBar extends Component {
  //提供属性的类型检查
  static propTypes = {
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleView: PropTypes.element,
    titleLayoutStyle: ViewPropTypes.style,
    hide: PropTypes.bool,
    statusBar: PropTypes.shape(StatusBarShape),
    rightButton: PropTypes.element,
    leftButton: PropTypes.element,
  };
  //设置默认属性
  static defaultProps = {
    statusBar: {
      barStyle: 'light-content',
      hidden: false,
    }
  };

  render() {
    let statusBar = !this.props.statusBar.hidden ?
      <View style={styles.statusBar}>
        <StatusBar {...this.props.statusBar} />
      </View> : null;

    let titleView = this.props.titleView ? this.props.titleView :
      <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>{this.props.title}</Text>;

    let content = this.props.hide ? null :
      <View style={styles.navBar}>
        {this.getButtonElement(this.props.leftButton)}
        <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
          {titleView}
        </View>
        {this.getButtonElement(this.props.rightButton)}
      </View>;
    return (
      <View style={[styles.container, this.props.style]}>
        {statusBar}
        {content}
      </View>
    )
  }

  getButtonElement = (data) => {
    return (
      <View style={styles.navBarButton}>
        {data ? data : null}
      </View>
    )

  }
}
