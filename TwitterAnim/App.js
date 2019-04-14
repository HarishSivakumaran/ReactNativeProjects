import React from "react";
import {SafeAreaView,ScrollView,View,Image,StyleSheet,Dimensions,Animated,Text} from "react-native";
const screenWidth= Dimensions.get("window").width;

const maxHeaderHeight=120;
const minHeaderHeight=70;
const imageOriginalSize=80

export default class App extends React.Component{
  constructor(props){
    super(props);
    

    this.state = {
      yScroll:new Animated.Value(0),

    }

    this.headerHeight = this.state.yScroll.interpolate({
      inputRange:[0,maxHeaderHeight-minHeaderHeight],
      outputRange:[maxHeaderHeight,minHeaderHeight],
      extrapolate:"clamp",
    })

    this.imageScale = this.state.yScroll.interpolate({
      inputRange:[0,maxHeaderHeight-minHeaderHeight-2],
      outputRange:[imageOriginalSize,imageOriginalSize/2],
      extrapolate:"clamp"
    })

    this.scrollImageUp = this.state.yScroll.interpolate({
      inputRange:[maxHeaderHeight-minHeaderHeight-2,maxHeaderHeight],
      outputRange:[0,-maxHeaderHeight/2],
      extrapolate:"clamp"
    })
    this.moveImageUnder= this.state.yScroll.interpolate({
      inputRange:[0,maxHeaderHeight+imageOriginalSize/2],
      outputRange:[0,3],
      extrapolate:"clamp"
    })

    this.scrollTextUp= this.state.yScroll.interpolate({
      inputRange:[0,maxHeaderHeight-minHeaderHeight,maxHeaderHeight],
      outputRange:[0,-imageOriginalSize/2,-1.7*imageOriginalSize],
      extrapolate:"clamp"
    })
  }
  render(){
    return(<SafeAreaView style={styles.root}>
      <View style={styles.container}>
      <Animated.View style={[styles.header,{height:this.headerHeight,zIndex:this.moveImageUnder }]} ></Animated.View>
      <Animated.View style={[styles.imageView,{height:this.imageScale,width:this.imageScale,
      transform:[{translateY:this.scrollImageUp}],}]}>
      <Image
      style={{flex:1,overflow:"hidden"}}
       source={{uri:"https://images.pexels.com/photos/2100624/pexels-photo-2100624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}></Image>
      </Animated.View>
      <Animated.Text style={{position:"absolute",
    left:30,transform:[{translateY:this.scrollTextUp}],
  top:maxHeaderHeight+imageOriginalSize/2}}>Samantha</Animated.Text>
  <Animated.Text style={{position:"absolute",fontSize:20,fontWeight:"bold",
    left:(screenWidth/2)-50,color:"white",zIndex:5,transform:[{translateY:this.scrollTextUp}],
  top:maxHeaderHeight+imageOriginalSize/2}}>Samantha</Animated.Text>
  
  
      <ScrollView 
      scrollEventThrottle={2}
      onScroll={Animated.event([{
        nativeEvent:{
          contentOffset:{
            y:this.state.yScroll,
          }
        }
      }])
    }
      style={styles.scrollView}>
      <View style={{height:2000}}></View>
      </ScrollView>
      </View>
      </SafeAreaView>);
  }
}


const styles=StyleSheet.create({
  root:{
    flex:1,
    zIndex:0
  },
  container:{
    flex:1,
    marginTop:25,
    zIndex:0

  },
  header:{
    backgroundColor:"lightblue",
    top:0,
    left:0,
    right:0,
  },
  scrollView:{
    flex:1,
    
  },
  imageView:{

    borderRadius:imageOriginalSize/2,
    position:"absolute",
    top:maxHeaderHeight-imageOriginalSize/2,
    left:20,
    overflow:"hidden",

  }


});