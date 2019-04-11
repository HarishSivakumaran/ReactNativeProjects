import React from "react";
import {View,StyleSheet} from "react-native";
import ClapButton from "../src/components/ClapButton"

export default class MediumClapAnim extends React.Component{

    render(){
        return(
            <View style={{flex:1,backgroundColor:"#F4C724"}}>
            <ClapButton></ClapButton></View>
        );
    }

}