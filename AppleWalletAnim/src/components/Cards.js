import React,{Component} from "react";
import {View,StyleSheet} from "react-native";
export const cardHeight=250;
const cardWidth="90%"
export const cardTitle = 25;

export default class Cards extends Component{

    render(){
        return(
            <View style={[styles.card,{backgroundColor:this.props.backgroundColor,        borderColor:this.props.backgroundColor,
            }]}></View>
        );
    }
}

const styles = StyleSheet.create({
    card:{

        height:cardHeight,
        width:cardWidth,
        elevation:5,
        borderWidth:1,
        borderRadius:10,
      

        


    }
})