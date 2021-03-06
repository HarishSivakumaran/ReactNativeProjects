import React from 'react';
import { StyleSheet, Text, View,Dimensions,Animated,TouchableWithoutFeedback } from 'react-native';
import {Svg} from "expo";
import {Feather} from "@expo/vector-icons";
import * as Shape from "d3-shape";

export const tabBarHeight = 70;

export const width = Dimensions.get("window").width;

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

   
   this.opAni = this.prevval.interpolate({
     inputRange:[index-1,index,index+1],outputRange:[0.99,0,1],
     extrapolate:"clamp"
   })

        return(
          <Animated.View
              key={index}
              style={{opacity:this.opAni}}
          >
            <TouchableWithoutFeedback
            onPress={()=>{

             this.changeBtn(index);

             }}
            >
            <Feather 
            name={icon.name}
            size={30}></Feather>
            </TouchableWithoutFeedback>
            </Animated.View>
        );

    })
}

renderIcon2 = ( ) =>{

  const check=tabs.map((icon,index)=>{
    this.opacityAni2 = this.prevval.interpolate({
      inputRange:[index-1,index,index+1],
      outputRange:[0,1,0],
      extrapolate:"clamp",
    })

      return(
          <Animated.View
          style={{opacity:this.opacityAni2, height:50,width:50,borderRadius:25,backgroundColor:"#FFF",alignItems:"center",justifyContent:"center"}}
         
          key={index}
          >
          <Feather 
          name={icon.name}
          size={30}></Feather>
          </Animated.View>
      );

  });
  console.log(check);
  /* Array [
  Object {
    "$$typeof": Symbol(react.element),
    "_owner": FiberNode {
      "tag": 2,
      "key": null,
      "type": [Function App],
    },
    "_store": Object {},
    "key": "0",
    "props": Object {
      "children": Object {
        "$$typeof": Symbol(react.element),
        "_owner": FiberNode {
          "tag": 2,
          "key": null,
          "type": [Function App],
        },
        "_store": Object {},
        "key": null,
        "props": Object {
          "allowFontScaling": false,
          "name": "grid",
          "size": 30,
        },
        "ref": null,
        "type": [Function Icon],
      },
      "style": Object {
        "alignItems": "center",
        "backgroundColor": "#FFF",
        "borderRadius": 25,
        "height": 50,
        "justifyContent": "center",
        "opacity": 1,
        "width": 50,
      },
    },
    "ref": null,
    "type": [Function AnimatedComponent],
  },
  Object {
    "$$typeof": Symbol(react.element),
    "_owner": FiberNode {
      "tag": 2,
      "key": null,
      "type": [Function App],
    },
    "_store": Object {},
    "key": "1",
    "props": Object {
      "children": Object {
        "$$typeof": Symbol(react.element),
        "_owner": FiberNode {
          "tag": 2,
          "key": null,
          "type": [Function App],
        },
        "_store": Object {},
        "key": null,
        "props": Object {
          "allowFontScaling": false,
          "name": "list",
          "size": 30,
        },
        "ref": null,
        "type": [Function Icon],
      },
      "style": Object {
        "alignItems": "center",
        "backgroundColor": "#FFF",
        "borderRadius": 25,
        "height": 50,
        "justifyContent": "center",
        "opacity": 0,
        "width": 50,
      },
    },
    "ref": null,
    "type": [Function AnimatedComponent],
  },
  Object {
    "$$typeof": Symbol(react.element),
    "_owner": FiberNode {
      "tag": 2,
      "key": null,
      "type": [Function App],
    },
    "_store": Object {},
    "key": "2",
    "props": Object {
      "children": Object {
        "$$typeof": Symbol(react.element),
        "_owner": FiberNode {
          "tag": 2,
          "key": null,
          "type": [Function App],
        },
        "_store": Object {},
        "key": null,
        "props": Object {
          "allowFontScaling": false,
          "name": "repeat",
          "size": 30,
        },
        "ref": null,
        "type": [Function Icon],
      },
      "style": Object {
        "alignItems": "center",
        "backgroundColor": "#FFF",
        "borderRadius": 25,
        "height": 50,
        "justifyContent": "center",
        "opacity": 0,
        "width": 50,
      },
    },
    "ref": null,
    "type": [Function AnimatedComponent],
  },
  Object {
    "$$typeof": Symbol(react.element),
    "_owner": FiberNode {
      "tag": 2,
      "key": null,
      "type": [Function App],
    },
    "_store": Object {},
    "key": "3",
    "props": Object {
      "children": Object {
        "$$typeof": Symbol(react.element),
        "_owner": FiberNode {
          "tag": 2,
          "key": null,
          "type": [Function App],
        },
        "_store": Object {},
        "key": null,
        "props": Object {
          "allowFontScaling": false,
          "name": "map",
          "size": 30,
        },
        "ref": null,
        "type": [Function Icon],
      },
      "style": Object {
        "alignItems": "center",
        "backgroundColor": "#FFF",
        "borderRadius": 25,
        "height": 50,
        "justifyContent": "center",
        "opacity": 0,
        "width": 50,
      },
    },
    "ref": null,
    "type": [Function AnimatedComponent],
  },
  Object {
    "$$typeof": Symbol(react.element),
    "_owner": FiberNode {
      "tag": 2,
      "key": null,
      "type": [Function App],
    },
    "_store": Object {},
    "key": "4",
    "props": Object {
      "children": Object {
        "$$typeof": Symbol(react.element),
        "_owner": FiberNode {
          "tag": 2,
          "key": null,
          "type": [Function App],
        },
        "_store": Object {},
        "key": null,
        "props": Object {
          "allowFontScaling": false,
          "name": "user",
          "size": 30,
        },
        "ref": null,
        "type": [Function Icon],
      },
      "style": Object {
        "alignItems": "center",
        "backgroundColor": "#FFF",
        "borderRadius": 25,
        "height": 50,
        "justifyContent": "center",
        "opacity": 0,
        "width": 50,
      },
    },
    "ref": null,
    "type": [Function AnimatedComponent],
  },
]*/
  
  return check;
}

  render() {
    return (
      <View style={styles.container}>
      <AnimatedSvg  style={{position:"absolute",bottom:0,height:tabBarHeight,width:3*width,transform:[{translateX:this.xVal}]}}>
      <Path d={`${left} ${tab}  ${right}`}  fill="#FFF" ></Path>
      </AnimatedSvg>

     
     

      <View  style={{position:"absolute",bottom:30,height:tabBarHeight,width:width,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      {this.renderIcon2()}
      </View>

      <View  style={{position:"absolute",bottom:0,height:tabBarHeight,width:width,flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
      {this.renderIcon()}
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
