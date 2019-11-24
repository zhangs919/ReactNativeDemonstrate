import * as React from "react"
import {FlatList, Platform, SectionList, TouchableOpacity, View, ViewStyle,StyleSheet} from "react-native"
import {Screen, Text} from "../../components"
// import { useStores } from "../models/root-store"
import {color, palette} from "../../theme"
import {NavigationScreenProps} from "react-navigation"
import {pageList} from "../../demonstrate/beeshell/routers";
import styles from "../../demonstrate/beeshell/common/styles"
import variables from "../../demonstrate/beeshell/customTheme";

export interface BeeshellScreenProps extends NavigationScreenProps<{}> {
}

interface State {
  sections: object
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}


export class BeeshellScreen extends React.Component<BeeshellScreenProps, State> {

  constructor(props) {
    super(props)
    this.state = {
      sections: [
        {
          label: '通用',
          key: 'general',
        },

        // {
        //   label: '布局',
        //   key: 'layout',
        // },

        {
          label: '导航',
          key: 'navigation',
        },
        {
          label: '数据录入',
          key: 'dataEntry',
        },

        {
          label: '数据展示',
          key: 'dataDisplay',
        },

        {
          label: '操作反馈',
          key: 'feedback'
        },

        {
          label: '其他',
          key: 'other'
        },

        {
          label: '基础工具',
          key: 'base'
        },

        {
          label: '演示',
          key: 'demo'
        }
      ]
    }

    const sections = this.state.sections;
    sections.forEach((item) => {
      item.data = item.data || [];
      pageList.forEach((pageItem) => {
        pageItem.group = pageItem.group || 'other';
        if (pageItem.group == item.key) {
          item.data.push(pageItem)
        }
      })
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
      title: navigation.getParam("title"),
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",

        marginLeft: titleMargin,
      },
    }
  }


  componentDidMount() {
    // setTimeout(() => {
    //   this.props.navigation.navigate('Modal')
    // }, 1000)
  }

  gotoPage (item) {
    this.props.navigation.navigate(item.key)
  }

  renderSectionListItem = (rowData) => {
    const { item, index, section } = rowData
    // console.log(rowData)
    const isFirst = index === 0
    const isLast = index === section.data.length - 1
    return (
      <TouchableOpacity
        testID={item.key}
        onPress={() => {
          this.gotoPage(item)
        }}>
        <View
          style={[
            {
              paddingHorizontal: variables.mtdHSpacingXL,
              paddingVertical: variables.mtdVSpacingXL,
              backgroundColor: '#fff',
              borderTopWidth: StyleSheet.hairlineWidth,
              borderTopColor: 'transparent',
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderBottomColor: 'transparent',

            },
            {
              borderTopColor: isFirst ? variables.mtdGrayLightest : 'transparent',
              marginTop: isFirst ? StyleSheet.hairlineWidth : 0,
              borderBottomColor: isLast ? variables.mtdGrayLightest : 'transparent'
            }
          ]}>
          <Text
            style={{
              color: variables.mtdGrayBase,
              // fontSize: 14
            }}>
            {item.key} - {item.label}
          </Text>
        </View>
        {
          (!isLast) ?
            <View
              style={{
                marginLeft: variables.mtdHSpacingXL,
                height: StyleSheet.hairlineWidth,
                backgroundColor: variables.mtdGrayLightest
              }}>
            </View> : null
        }
      </TouchableOpacity>
    )
  }

  renderSectionHeader = (sectionData) => {
    const { section } = sectionData

    return (
      <Text
        style={[
          styles.header,
          {
            color: variables.mtdBrandPrimaryDark,
          }
        ]}>
        {section.label}
      </Text>
    )
  }

  render() {
    const data = [
      /*通用*/
      {
        title: 'Button 按钮',
        routeName: 'buttonScreen',
      },
      // {
      //   title: 'Icon 按钮',
      //   routeName: 'iconScreen',
      // },
      /*导航*/
      {
        title: 'NavigationBar 导航条',
        routeName: 'navigationBarScreen',
      },
      {
        title: 'Dropdown 下拉菜单',
        routeName: 'dropdownScreen',
      },
      /*数据录入*/
      {
        title: 'Form 表单',
        routeName: 'formScreen',
      },
      {
        title: 'Input 输入框',
        routeName: 'inputScreen',
      },
      {
        title: 'Radio 单选',
        routeName: 'radioScreen',
      },
      {
        title: 'Checkbox 多选',
        routeName: 'checkboxScreen',
      },
      {
        title: 'Switch 开关',
        routeName: 'switchScreen',
      },
      {
        title: 'Slider 滑块',
        routeName: 'sliderScreen',
      },
      {
        title: 'Rate 评分',
        routeName: 'rateScreen',
      },
      {
        title: 'Stepper 计步器',
        routeName: 'stepperScreen',
      },
      {
        title: 'Scrollpicker 滚动选择',
        routeName: 'scrollpickerScreen',
      },
      {
        title: 'Calendar 日历',
        routeName: 'calendarScreen',
      },
      {
        title: 'Cascader 级联选择',
        routeName: 'cascaderScreen',
      },
      /*数据展示*/
      {
        title: 'Progress 进度条',
        routeName: 'progressScreen',
      },
      {
        title: 'Badge 徽章',
        routeName: 'badgeScreen',
      },
      {
        title: 'Tab 标签页',
        routeName: 'tabScreen',
      },
      {
        title: 'Tag 标签',
        routeName: 'tagScreen',
      },
      // {
      //   title: 'TreeView 树形结构组件',
      //   routeName: 'treeViewScreen',
      // },
      {
        title: 'Longlist 长列表',
        routeName: 'longlistScreen',
      },
      /*操作反馈*/
      {
        title: 'Modal 模态框',
        routeName: 'modalScreen',
      },
      {
        title: 'Dialog 对话框',
        routeName: 'dialogScreen',
      },
      {
        title: 'Tip 提示信息弹框',
        routeName: 'tipScreen',
      },
      {
        title: 'SlideModal 滑动弹框',
        routeName: 'slideModalScreen',
      },
      {
        title: 'Actionsheet 行动面板',
        routeName: 'actionsheetScreen',
      },
      {
        title: 'BottomModal 半页弹框',
        routeName: 'bottomModalScreen',
      },
      {
        title: 'Popover 弹出框',
        routeName: 'popoverScreen',
      },
      {
        title: 'Picker 筛选器',
        routeName: 'pickerScreen',
      },
      {
        title: 'Topview 顶层视图',
        routeName: 'topviewScreen',
      },
      /*其他*/
      {
        title: 'Ruler 刻度尺',
        routeName: 'rulerScreen',
      },
      /*复合组件 未开源*/

      /*基础工具*/
    ];

    return (
      <Screen style={ROOT} preset="scroll">

        <View
          style={{
            flex: 1,
          }}
        >
          <SectionList
            sections={this.state.sections}
            renderSectionHeader={this.renderSectionHeader}
            renderItem={this.renderSectionListItem}
          />

        </View>
      </Screen>
    )
  }

}
