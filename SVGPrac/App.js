import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chart from "./src/components/Chart";
import TabBar from "./src/components/TabBar";


export const chartData = [
  {
    x:new Date(2019,3,16),y:0,
  },
  {
    x:new Date(2019,3,17),y:500,
  },
  {
    x:new Date(2019,3,18),y:200,
  },
  {
    x:new Date(2019,3,19),y:0,
  },
  {
    x:new Date(2019,3,20),y:20,
  },
  {
    x:new Date(2019,3,21),y:300,
  },
  {
    x:new Date(2019,3,22),y:100,
  },
  {
    x:new Date(2019,3,23),y:20,
  },
]

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Chart></Chart>
      <TabBar></TabBar>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1c1c1',
   marginTop:24,
   
  },
});
