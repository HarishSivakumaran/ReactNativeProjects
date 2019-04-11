import React from "react";
import {Animated,Easing,View,Image,Text,StyleSheet,Button,Dimensions} from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
export default class Animations extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            xPos : new Animated.Value(0)

        }
    }

    render(){

        let animationStyle ={
            transform:[{
                translateX : this.state.xPos,
            }]

        }
        animateMethod=()=>{
            Animated.timing(this.state.xPos,{
                toValue: width-100,
                duration:1000,
                easing:Easing.linear,

            })
        }
        return(
            <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
            <Animated.View style={[styles.container,animationStyle]}>
            </Animated.View>
            <Button 
            title="Animate"
            onPress={this.animateMethod}/>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{


        height:100,
        width:100,
        backgroundColor: "blue",
        borderRadius:30
    }

});
