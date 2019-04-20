import React from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,TouchableWithoutFeedback } from 'react-native';
import {Svg} from "expo";
import {Feather} from "@expo/vector-icons";
import * as Shape from "d3-shape";
import StaticTabBar from "./src/components/StaticTabBar"

export const tabBarHeight = 70;

export const width = Dimensions.get("window").width;

const AnimatedTouchableWithoutFeedback = Animated.createAnimatedComponent(TouchableWithoutFeedback);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);


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
const tabWidth = width / tabs.length;

const {Path} = Svg;
const d3 = {Shape};

const lineMethod = d3.Shape.line().x((d)=>d.x).y((d)=>d.y);
const curveMethod = d3.Shape.line().x((d)=>d.x).y((d)=>d.y).curve(d3.Shape.curveBasis);

var left = lineMethod([
  {x:0,y:0},
  {x:width,y:0}
]);

var tab = curveMethod([
  {x:width,y:0},
  {x:width+10,y:5},
  {x:width+ 10, y:tabBarHeight-40},
  {x:width +tabWidth/2, y:tabBarHeight-20},
  {x:width+tabWidth-10, y:tabBarHeight-40},
  {x:width+tabWidth-10 , y:5},
  {x:width+tabWidth , y:0},


   
]);

var right = lineMethod([
  {x:2*width,y :0 },
  {x:2*width,y:tabBarHeight},
  {x:0,y:tabBarHeight},
  {x:0,y:0}
 

])

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.prevval = new Animated.Value(0);
    this.xVal = this.prevval.interpolate({
      inputRange:[0,1,2,3,4],
      outputRange:[-5*tabWidth,-4*tabWidth,-3*tabWidth,-2*tabWidth,-1*tabWidth,],
      extrapolate:"clamp"
    })

    
  }

  changeBtn=(val)=>{

    Animated.spring(this.prevval,{
      toValue : val,
      friction :7,
      useNativeDriver:true
    }).start();


  }
  
 

  renderIcon = ( ) =>{

    return tabs.map((icon,index)=>{
      this.opacityAni = this.prevval.interpolate({
        inputRange:[index-1,index,index+1],
        outputRange:[1,0,1],
        extrapolate:"clamp",
      })

        return(
            <AnimatedTouchableWithoutFeedback
            style={{opacity:this.opacityAni}}
            onPress={()=>{

              this.changeBtn(index);

                

            }}
            key={index}
            >
            <Feather 
            name={icon.name}
            size={30}></Feather>
            </AnimatedTouchableWithoutFeedback>
        );

    })
}

renderIcon2 = ( ) =>{

  return tabs.map((icon,index)=>{
    this.opacityAni = this.prevval.interpolate({
      inputRange:[index-1,index,index+1],
      outputRange:[0,1,0],
      extrapolate:"clamp",
    })

      return(
          <AnimatedTouchableWithoutFeedback
          style={{opacity:this.opacityAni, }}
         
          key={index}
          >
          <View style={{height:50,width:50,borderRadius:25,backgroundColor:"#FFF",alignItems:"center",justifyContent:"center"}}>
          <Feather 
          name={icon.name}
          size={30}></Feather>
          </View>
          </AnimatedTouchableWithoutFeedback>
      );

  })
}

  render() {
    return (
      <View style={styles.container}>
      <AnimatedSvg  style={{position:"absolute",bottom:0,height:tabBarHeight,width:3*width,transform:[{translateX:this.xVal}]}}>
      <Path d={`${left} ${tab}  ${right}`}  fill="#FFF" ></Path>
      </AnimatedSvg>

     
      <View  style={{position:"absolute",bottom:0,height:tabBarHeight,width:width,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      {this.renderIcon()}
      </View>

      <View  style={{position:"absolute",bottom:30,height:tabBarHeight,width:width,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      {this.renderIcon2()}
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D63031',
  marginTop:24,
  },
});
