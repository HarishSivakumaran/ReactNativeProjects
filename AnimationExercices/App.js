import React from "react";
import {View} from "react-native";
import {createStackNavigator,createAppContainer} from "react-navigation";
import HomeScreen from "./screens/HomeScreen"
const mainNavigator = createStackNavigator({
  HOME:{ screen:HomeScreen},

},{})

const App = createAppContainer(mainNavigator);
export default App;