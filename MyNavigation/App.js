import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home"
import Follow from "./screens/Follow"
const mainNavigator = createStackNavigator({
  Home:{
    screen:Home
  },
  Follow:{
    screen :Follow
  }
},{
  defaultNavigationOptions:{
    title:"NavigationApp",
    headerTintColor:"#FFF",
    headerStyle:{
      backgroundColor:"red"
    },
    headerTitleStyle:{
      color:"#FFF"
    }

  }
})

const App = createAppContainer(mainNavigator);

export default App;