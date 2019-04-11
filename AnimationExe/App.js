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
            fadeIn: new Animated.Value(0.3),
            springVal:new Animated.Value(0.3),

        }
    }
    animateMethod=()=>{
      // Animated.timing(this.state.xPos,{
      //     toValue: -100,
      //     duration:1000,
      //     easing:Easing.linear,

      // });
      console.log("heuy");
      

      Animated.parallel([Animated.timing(this.state.yPos,{
        toValue:100,
        duration:2200,
        easing:Easing.back(50)
      }), Animated.timing(this.state.fadeIn,{
        toValue:1,
        duration:1000,
        easing:Easing.elastic(10),
      }),
    Animated.spring(this.state.springVal,{
      toValue:1,
      duration:1000,
      friction:1,
    })])
      .start(()=>{
        this.setState({
          yPos:new Animated.Value(0),
          fadeIn:new Animated.Value(0),
          springVal:new Animated.Value(0),
        })
        this.animateMethod();});
  }

    render(){

        let animationStyle ={
            transform:[{
scale:this.state.springVal,            }],
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
