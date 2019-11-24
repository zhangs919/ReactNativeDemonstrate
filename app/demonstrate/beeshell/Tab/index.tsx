import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

import { Tab, Button } from 'beeshell'
import styles from '../common/styles'
import variables from '../customTheme'

const scrollToList = [ 5, 6, 1, 0, 1, 2, 3, 4 ]

export default class TabScreen extends Component<any, any> {
  [prop: string]: any

  constructor (props) {
    super(props)
    this.state = {
      value: 1,
      valueA: 1,
      valueC: 6,
      valueX: 1,
      scrollTimes: 0
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this._tab._scroller.scrollTo({ x: -80, y: 0, animated: true })
    // }, 3000)
  }

  handleChange = (key, value: number) => {
    this.setState({
      [key]: value
    } as any)
  }

  render () {
    return (
      <ScrollView style={styles.body}>
        <Text style={styles.header}>基础</Text>
        <Tab
          value={this.state.value}
          data={[{
            value: 1,
            label: '全部'
          },
          {
            value: 2,
            label: '我关注的'
          },
          {
            value: 3,
            label: '我的粉丝'
          }]}
          onChange={ item => this.handleChange('value', item.value) }
        />

        <Text style={styles.header}>左对齐</Text>
        <Tab
          dataItemContainerStyle={{ flex: null }}
          value={this.state.valueA}
          data={[
            {
              value: 1,
              label: '我关注的'
            },
            {
              value: 2,
              label: '我的粉丝'
            }
          ]}
          onChange={ item => this.handleChange('valueA', item.value) }
        />

        <Text style={styles.header}>右对齐</Text>
        <Tab
          dataContainerStyle={{ justifyContent: 'flex-end' }}
          dataItemContainerStyle={{ flex: null }}
          value={this.state.valueV || 1}
          data={[
            {
              value: 1,
              label: '我关注的'
            },
            {
              value: 2,
              label: '我的粉丝'
            }
          ]}
          onChange={ item => this.handleChange('valueV', item.value) }
        />

        <Text style={styles.header}>横向换行</Text>
        <Tab
          dataContainerStyle={{ flexWrap: 'wrap' }}
          dataItemContainerStyle={{ flex: null }}
          value={this.state.valueU || 1}
          data={[
            {
              value: 1,
              label: '我关注的'
            },
            {
              value: 2,
              label: '我的粉丝'
            },
            {
              value: 3,
              label: '我喜欢的'
            },
            {
              value: 4,
              label: '我重视的'
            },
            {
              value: 5,
              label: '我不感兴趣的'
            }
          ]}
          onChange={ item => this.handleChange('valueU', item.value) }
        />

        <Text style={styles.header}>横向可滚动</Text>
        <Tab
          style={{ marginLeft: 0, marginRight: 0 }}
          ref={(c) => {
            this._tab = c
          }}
          value={this.state.valueC}
          scrollable={true}
          data={[
            {
              value: 1,
              label: '选项一'
            }, {
              value: 2,
              label: '选项二'
            }, {
              value: 3,
              label: '选项三'
            }, {
              value: 4,
              label: '选项四'
            }, {
              value: 5,
              label: '选项五'
            }, {
              value: 6,
              label: '选项六'
            }, {
              value: 7,
              label: '选项七'
            }
          ]}
          onChange={ item => this.handleChange('valueC', item.value) }
        />

        <Button
          style={{ margin: 20 }}
          type='primary'
          size='sm'
          textColorInverse
          onPress={() => {
            this._tab && this._tab.scrollTo(scrollToList[this.state.scrollTimes % scrollToList.length])
            this.setState({
              valueC: scrollToList[this.state.scrollTimes % scrollToList.length] + 1,
              scrollTimes: this.state.scrollTimes + 1
            })
          }}>
          点击滚动到第 {scrollToList[this.state.scrollTimes % scrollToList.length] + 1} 项
        </Button>
        <Text style={styles.header}>自定义选项</Text>
        <Tab
          dataItemContainerStyle={{ flex: null }}
          value={this.state.valueX}
          data={[
            {
              value: 1,
              label: '选项1'
            },
            {
              value: 2,
              label: '选项2'
            },
            {
              value: 3,
              label: '选项3'
            }
          ]}
          renderItem={(item, index, selected) => {
            return (
              <View style={{ paddingVertical: variables.mtdVSpacingXL, paddingHorizontal: variables.mtdHSpacingXL }}>
                <View
                  style={{
                    padding: 5,
                    borderRadius: 2,
                    backgroundColor: selected ? variables.mtdGrayBase : variables.mtdFillBody,
                    justifyContent: 'center'
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: selected ? '#fff' : variables.mtdGrayBase,
                    }}>
                    {item.label}
                  </Text>
                </View>
              </View>
            )
          }}
          onChange={ item => this.handleChange('valueX', item.value) }
        />
      </ScrollView>
    )
  }
}
