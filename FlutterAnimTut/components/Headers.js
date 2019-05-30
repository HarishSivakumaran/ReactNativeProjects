// @flow
import * as React from 'react';
import { View, Dimensions,Text,StyleSheet } from 'react-native';
import Animated from "react-native-reanimated";

const {interpolate,add,multiply} =Animated;

import {
  type Section, SMALL_HEADER_HEIGHT, MEDIUM_HEADER_HEIGHT, PADDING, CURSOR_WIDTH,
} from './Model';
import Header from './Header';
import Label from './Label';
import Cursor from './Cursor';

const cursor =[1,2,3,4]

type HeadersProps = {
  sections: Section[],
};

const backgroundColor = '#343761';
const { width, height } = Dimensions.get('window');

export default class Headers extends React.PureComponent<HeadersProps> {



  
  render() {
    const { sections,x,y } = this.props;

      const FULL_HEADER_HEIGHT = height / sections.length;
    return (
      <View style={{ height, width: (sections.length)* width, backgroundColor }}>
        {
          sections.map((section, key) => {

         
            
           
            const y1 = y.interpolate({
              inputRange:[0,height-SMALL_HEADER_HEIGHT],
              outputRange:[0,-key*(height/sections.length)],
              extrapolate:"clamp",
            });
            
            const heightAnim = y.interpolate({
              inputRange:[0 , height-MEDIUM_HEADER_HEIGHT , height-SMALL_HEADER_HEIGHT],
              outputRange:[FULL_HEADER_HEIGHT,MEDIUM_HEADER_HEIGHT,SMALL_HEADER_HEIGHT],
              extrapolate:"clamp",
            });

            const x2 = x.interpolate({
              inputRange:[0,width,2*width,3*width,4*width],
              outputRange:[0,-width,-2*width,-3*width,-4*width],
              extrapolate:"clamp",
            });


            x3=multiply(x2,-1);

            const x1 = y.interpolate({
              inputRange:[0,height-SMALL_HEADER_HEIGHT],
              outputRange:[x3,key*width],
              extrapolate:"clamp",
            });

            const xT =add(x1,x2);

            return(
            <Animated.View
              style={{
                position: 'absolute', top: key * FULL_HEADER_HEIGHT, left: 0, height: heightAnim,
                transform:[{translateX:xT},{translateY:y1}]
              }}
              {...{ key }}
            >
              <Header index={key} {...{ section }} />
              <Text style={[StyleSheet.absoluteFill,{textAlign:"center",fontSize:20,marginTop:FULL_HEADER_HEIGHT/3,fontWeight:"bold",color:"#FFF"}]}>{section.title}</Text>
              </Animated.View>
            
          );})
        }
       {cursor.map((val,index)=> {

        var topMargin = y.interpolate({
          inputRange:[0,height-SMALL_HEADER_HEIGHT],
          outputRange:[(index * height/sections.length ) + FULL_HEADER_HEIGHT/1.6,SMALL_HEADER_HEIGHT-20],
          extrapolate:"clamp"
        });
    
    
        var leftMargin = y.interpolate({
          inputRange:[0,height-SMALL_HEADER_HEIGHT],
          outputRange:[(width/2 )-20,(width/2 )-90+(index*50)],
          extrapolate:"clamp"
        });
    
    const opacityAnim = x.interpolate({
      inputRange:[(index-1)*width,index*width,(index+1)*width],
      outputRange:[0.3,1,0.3],
      extrapolate:"clamp",
    })
        return (
          <Animated.View  key={index} style={{position:"absolute",opacity:opacityAnim,top:topMargin,left:leftMargin,height:3,width:40,backgroundColor:"#FFF"}}>
          </Animated.View>
        );
      })
    }        
      </View>
    );
  }
}
