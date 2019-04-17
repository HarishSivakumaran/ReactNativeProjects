import React from "react";
import {createStackNavigator,createAppContainer} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import ProfileScreen from "./screens/ProfileScreen";

const mainNavigator = createStackNavigator({

  HomeScreen:{screen:HomeScreen},

  ProfileScreen:{screen:ProfileScreen},



 CameraScreen:{screen:CameraScreen},
},{
  defaultNavigationOptions:{
    header:null
  }
})

const App =createAppContainer(mainNavigator);
export default App;