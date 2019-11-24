import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Calendar, Icon } from 'beeshell'
import styles from '../common/styles'
import variables from '../customTheme'


export default class CalendarScreen extends Component<any, any> {
  constructor (p) {
    super(p)
    this.state = {
      date: '2018-05-20',
    }
  }

  render () {
    return (
      <ScrollView
        style={styles.body}>
        <Text style={styles.header}>基础</Text>
        <Calendar
          date={this.state.date}
          startDate={'2018-04-11'}
          endDate={'2018-06-22'}

          onChange={(date) => {
            this.setState({
              date
            })
          }}>
      </Calendar>

      <Text style={styles.header}>自定义渲染项</Text>
        <Calendar
          date={this.state.date}
          startDate={'2018-04-11'}
          endDate={'2018-06-22'}
          renderItem={(item, date, desc) => {
            return (
              <Text>{item.dateModel.format('D')}</Text>
            )
          }}
          onChange={(date) => {
            this.setState({
              date
            })
          }}>
      </Calendar>
      </ScrollView>
    )
  }
}
