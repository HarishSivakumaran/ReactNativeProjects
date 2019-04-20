import React,{Component} from "react";
import {View,TouchableWithoutFeedback} from "react-native";
import {Feather} from "@expo/vector-icons";
import {tabBarHeight,width} from "../../App";
export const a= 1;

const tabs = [
    {
      name: "grid",
    },
    {
      name: "list",
    },
    {
      name: "repeat",
    },
    {
      name: "map",
    },
    {
      name: "user",
    },
  ];


  export default class StaticTabBar extends Component{

   

    render(){
        return(
           <View></View>
        );
    }
  }