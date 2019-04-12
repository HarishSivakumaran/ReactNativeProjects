import React from "react";
import {View,Image,Text,PanResponder,Animated,Dimensions} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth =Dimensions.get("window").width;
var users= [ 
  {id:1,uri:require("./src/images/1.jpeg")},
  {id:2,uri:require("./src/images/2.jpeg")},
  {id:3,uri:require("./src/images/3.jpg")},
  {id:4,uri:require("./src/images/4.jpeg")},
  {id:5,uri:require("./src/images/5.jpeg")}]

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {

    }
  }

  render(){

    return(
      <View style={{flex:1}}>
      <View style={{height:60,width:screenWidth,}}></View>
      <View style={{height:screenHeight-120,width:screenWidth,position:"absolute"}}>
      <Image
      source={users[0].uri}
      style={{flex:1}}></Image>
      
      </View>


      <View style={{height:60,width:screenWidth,}}></View>
      </View>

    );
  }
}
