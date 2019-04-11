import React from "react";
import {Animated,Easing,View,Image,Text,StyleSheet,Button,Dimensions} from "react-native";

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;
export default class Animations extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            xPos : new Animated.Value(0),
            yPos: new Animated.Value(0),
            fadeIn: new Animated.Value(0.8),
            springVal:new Animated.Value(1),
            rotateVal:new Animated.Value(0),

        }
    }
    animateMethod=()=>{
     ;
      console.log("heuy");
      

      Animated.parallel([ Animated.timing(this.state.xPos,{
      toValue: 300,
      duration:3000,
      easing:Easing.bounce,
     
      
    }),
    Animated.timing(this.state.rotateVal,{
      toValue:100,
      duration:3000,
      easing:Easing.linear
    })
    
    
    ])
      .start(()=>{
        this.setState({
          yPos:new Animated.Value(0),
          fadeIn:new Animated.Value(1),
          springVal:new Animated.Value(1),
          xPos:new Animated.Value(0),
          rotateVal:new Animated.Value(0),
        })
        this.animateMethod();});
  }

    render(){

      const interpolatedRotateVal = this.state.rotateVal.interpolate({
        inputRange:[0,100],
        outputRange:["0deg","360deg"]
      })

        let animationStyle ={
            transform:[
              {scale:this.state.springVal },
{translateY:this.state.yPos},
{translateX:this.state.xPos},
{rotate: interpolatedRotateVal}],
            opacity:this.state.fadeIn,

        }
       
        return(
            <View style={{flex:1,backgroundColor:"#c1c1c1"}}>
            <Animated.View style={[styles.container,animationStyle]}>
            </Animated.View>
            <View  style={styles.button}>
            <Button 
            title="Animate"
            onPress={()=>{this.animateMethod();}}></Button></View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{

      position:"absolute",
      top:100,
      left:20,

        height:100,
        width:100,
        backgroundColor: "blue",
        borderRadius:30
    },
    button:{
      position:"absolute",
      left:0,
      right:0,
      bottom:0,

    }

});
