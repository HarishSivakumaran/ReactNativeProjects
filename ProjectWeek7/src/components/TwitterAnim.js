import React,{Component} from "react";
import {Animated,View,Image,Text,StyleSheet,ScrollView} from "react-native";
const maxHeaderHeight = 120;
const minHeaderHeight = 60;
const imageHeight = 80;
export default class TwitterAnim extends Component{

    constructor(props){
        super(props);

          this.yScroll =new Animated.Value(0);
          this.headerHeight = this.yScroll.interpolate({
              inputRange:[0,maxHeaderHeight-minHeaderHeight],
              outputRange:[maxHeaderHeight,minHeaderHeight],
              extrapolate:"clamp"
          })
          this.scrollViewTop = this.yScroll.interpolate({
            inputRange:[0,maxHeaderHeight],
            outputRange:[maxHeaderHeight+50,minHeaderHeight],
            extrapolate:"clamp"
        })

          this.headerZIndex = this.yScroll.interpolate({
            inputRange:[0,maxHeaderHeight-minHeaderHeight],
            outputRange:[0,1],
            extrapolate:"clamp"
        })
          this.imageHeightAni = this.yScroll.interpolate({
              inputRange:[0,maxHeaderHeight-minHeaderHeight],
              outputRange:[imageHeight,imageHeight/2],
              extrapolate:"clamp"
          })
          this.imageMoveAni = this.yScroll.interpolate({
            inputRange:[maxHeaderHeight-minHeaderHeight,maxHeaderHeight],
            outputRange:[0,-imageHeight],
            extrapolate:"clamp"
        })
    }
    render(){
        return(
            <View style={{flex:1,}}>

            <Animated.View style={[styles.container,{height:this.headerHeight,zIndex:this.headerZIndex}]}>
            
            </Animated.View>

            <Animated.Image
            source={{uri:"https://images.pexels.com/photos/2090704/pexels-photo-2090704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
            style={[styles.imageStyle,{height:this.imageHeightAni,width:this.imageHeightAni,borderRadius:this.imageHeightAni,
            transform:[{translateY:this.imageMoveAni}]}]}></Animated.Image>


            <Animated.ScrollView 
            style={[styles.scrollView,{ top:this.scrollViewTop,
            }]}
            scrollEventThrottle={16}
            onScroll={(Animated.event(
                [{nativeEvent: {contentOffset: {y: this.yScroll}}}]
            ))}
            >
            <View style={{height:1000}}>
            <Text style={{fontSize:15,fontFamily:"sans-serif-medium",zIndex:0}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            </View>
           
            </Animated.ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container :{
        backgroundColor:"skyblue",
        position:"absolute",
        width:"100%"
    },
    imageStyle:{
        position:"absolute",
        zIndex:0,
        top:maxHeaderHeight-imageHeight/2,
        left:20,
        borderColor:"white",
        marginBottom:imageHeight/2
    },
    scrollView:{
        position:"absolute",
        left:0,
        right:0,
        bottom:0,
    }
})