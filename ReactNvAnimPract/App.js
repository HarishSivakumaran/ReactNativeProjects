import React from 'react';
import {createStackNavigator,createAppContainer} from "react-navigation";
import HomeScreen from "./screens/HomeScreen"
import MediumClapAnim from "./screens/MediumClapAnim"
import Animations from "./screens/Animations"
const mainNavigator = createStackNavigator({
  AnimScreen:{
    screen:Animations
  },

  ClapScreen:{
    screen: MediumClapAnim,
  },
  HomeScreen:{
    screen:HomeScreen,
  },
 
})

const App = createAppContainer(mainNavigator);
export default App;