import React,{Component} from "react";
import {View,Animated,TouchableWithoutFeedback} from "react-native";
import {Svg} from "expo";
import {FontAwesome} from "@expo/vector-icons";
import {width} from "./Chart";
import * as Shape from "d3-shape";






export const tabBarHeight = 70;

const tabs = [
    {
      name: "twitter",
    },
    {
      name: "stack-overflow",
    },
    {
      name: "instagram",
    },
    {
      name: "linux",
    },
    {
      name: "apple",
    },
  ];
  const tabWidth = width / tabs.length;
  

const {Path} =Svg;

const d3 = {Shape,};

const lineMethod = d3.Shape.line()
                           .x(d=>d.x)
                           .y(d=>d.y);

 const curveMethod = d3.Shape.line()
                           .x(d=>d.x)
                           .y(d=>d.y)
                           .curve(d3.Shape.curveBasis);
                         
 var left = lineMethod([
     {x:0,y:0},
     {x:width,y:0},
 ]); 
 
 var tab = curveMethod([
     {x:width,y:0},
     {x:width,y:tabBarHeight/2},
     {x:width+tabWidth/2,y:tabBarHeight/1.2},
     {x:width+tabWidth-10,y:tabBarHeight/2},
     {x:width+tabWidth-10,y:0}
 ]);
                           
 var right = lineMethod([
     {x:width+tabWidth,y:0},
     {x:2*width,y:0},
     {x:2*width,y:tabBarHeight},
     {x:0,y:tabBarHeight},
     {x:0,y:0},

 ])



export default class TabBar extends Component{

    constructor(props){
        super(props);
        this.prevVal = new Animated.Value(0);

        this.xTrans = this.prevVal.interpolate({
            inputRange:[0,1,2,3,4],
            outputRange:[5*(-tabWidth)+5,4*(-tabWidth)+5,3*(-tabWidth)+5,2*(-tabWidth)+5,1*(-tabWidth)+5],
            extrapolate:"clamp"
        })
    }


    btnChange=(index)=>{

        Animated.spring(this.prevVal,{
            toValue:index,
            friction:10,
        }).start();
    }


    renderIcons=()=>{

        return tabs.map((icon,index)=>{

            this.opacityAnim = this.prevVal.interpolate({
                inputRange:[index-1,index,index+1],
                outputRange:[1,0,1],
                extrapolate:"clamp"
            })


          return(
            <Animated.View 
            style={{opacity:this.opacityAnim}}
            key={index}
            >
            <TouchableWithoutFeedback

            onPress={()=>{

                this.btnChange(index);

            }}
            >
            <FontAwesome
            name={icon.name}
            size={40}
            color="#000"
            ></FontAwesome>
            </TouchableWithoutFeedback>


            </Animated.View>
          );

        })

    }

    renderIcons2=()=>{

        return tabs.map((icon,index)=>{

            this.opacityAnim = this.prevVal.interpolate({
                inputRange:[index-1,index,index+1],
                outputRange:[0,1,0],
                extrapolate:"clamp"
            })


          return(
            <Animated.View 
            style={{opacity:this.opacityAnim,height:60,width:60,borderRadius:30,backgroundColor:"#FAD02E",alignItems:"center",justifyContent:"center"}}
            key={index}
            >
            <FontAwesome
            name={icon.name}
            size={40}
            color="#000"
            ></FontAwesome>
            </Animated.View>
           );

        })

    }


    render(){
        return(
            <View style={{flex:1}} >
            <Animated.View style={{height:tabBarHeight,width:2*width,position:"absolute",bottom:0,transform:[{translateX:this.xTrans}]}}>              
            <Svg style={{height:tabBarHeight,width:2*width,position:"absolute",bottom:0,}}>
            <Path d={`${left} ${tab} ${right}`} fill="#FAD02E"></Path>
            </Svg>
            </Animated.View>
           <View style={{height:tabBarHeight,width:width,position:"absolute",bottom:30,flexDirection:"row",justifyContent:"space-around",alignItems:"center",}}>   

            {this.renderIcons2()}

            </View>


            <View style={{height:tabBarHeight,width:width,position:"absolute",bottom:5,flexDirection:"row",justifyContent:"space-around",alignItems:"center",}}>   

            {this.renderIcons()}
          
            </View>
 

            </View>);
    }

}
