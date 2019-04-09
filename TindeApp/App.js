import React from "react";
import {createStackNavigator,createAppContainer} from "react-navigation"
import HomeScreen from "./screens/HomeScreen";
import HeaderCustom from "./src/components/HeaderCustom";

import CameraScreen from "./screens/CameraScreen";

const mainNavigator = createStackNavigator(
  {
  HomeScreen :{screen:HomeScreen},
  CameraScreen :{screen:CameraScreen}
  }
);

const App = createAppContainer(mainNavigator);

export default App;