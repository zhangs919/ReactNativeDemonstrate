import * as React from "react"
import {Platform, ViewStyle} from "react-native"
import {Button, Screen, Text} from "../../components"
// import { useStores } from "../models/root-store"
import {color, palette} from "../../theme"
import { NavigationScreenProps } from "react-navigation"
import {BackButton} from "../../components/back-button";
import ReactEcharts from "echarts-for-react";

export interface EchartScreenProps extends NavigationScreenProps<{}> {
}

const ROOT: ViewStyle = {
  backgroundColor: color.palette.white,
}


export class EchartScreen extends React.Component<EchartScreenProps, {}> {
  static navigationOptions = ({navigation}) => {
    const titleMargin = Platform.OS === "ios" ? -50 : 0
    return {
      headerStyle: {
        backgroundColor: palette.white,
        borderBottomWidth: 0,
      },
      headerBackTitle: null,
      headerBackImage: <BackButton backTitle={navigation.getParam("backTitle", "Echart")}/>,
      headerTintColor: palette.shamrock,
      title: null,
      headerTitleStyle: {
        textAlign: "left",
        fontWeight: "500",
        width: "100%",
        marginLeft: titleMargin,
      },
    }
  }

  /*echarts option*/
  getOption = () => {
    return {
      title: {
        text: '堆叠区域图'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        data:['邮件营销','联盟广告','视频广告']
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          boundaryGap : false,
          data : ['周一','周二','周三','周四','周五','周六','周日']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name:'邮件营销',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
          name:'联盟广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
          name:'视频广告',
          type:'line',
          stack: '总量',
          areaStyle: {normal: {}},
          data:[150, 232, 201, 154, 190, 330, 410]
        }
      ]
    };
  };

  render(){
    return (
      <Screen style={ROOT} preset="scroll">
        {/*echart demo*/}
        <ReactEcharts
          option={this.getOption()}
          style={{height: '350px', width: '100%'}}
          className='react_for_echarts' />

      </Screen>
    )
  }

}
