import React from "react";
import {View,Text,StyleSheet}from "react-native";
import TwitterAnim from "../src/components/TwitterAnim";
import MediumClap from "../src/components/MediumClap"

export default class ProfileScreen extends React.Component{


    render(){
        return(
            <View style={styles.container}>
            <TwitterAnim> </TwitterAnim>
            <MediumClap></MediumClap>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        flex:1,
    }
})