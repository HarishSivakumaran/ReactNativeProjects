import React from "react";
import {View,Image,Text,PanResponder,Animated,Dimensions} from "react-native";

const screenHeight = Dimensions.get("window").height;
const screenWidth =Dimensions.get("window").width;
var users= [ 
  {id:1,uri:require("./assets/1.jpeg")},
  {id:2,uri:require("./assets/2.jpeg")},
  {id:3,uri:require("./assets/3.jpg")},
  {id:4,uri:require("./assets/4.jpeg")},
  {id:5,uri:require("./assets/5.jpeg")}]

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
       currentIndex : 0 ,
    }

    this.position = new Animated.ValueXY();

    this.rotate=  this.position.x.interpolate({
      inputRange:[-100,0,100],
      outputRange:["-20deg","0deg","20deg"],
      extrapolate:"clamp",
    })

    this.nextCard= this.position.x.interpolate({
      inputRange:[-screenWidth/2,0,screenWidth/2],
      outputRange:[1,0.9,1],
      extrapolate:"clamp"

    })

    this.nextCardOp= this.position.x.interpolate({
      inputRange:[-screenWidth/2,0,screenWidth/2],
      outputRange:[1,0,1],
      extrapolate:"clamp"
    })
    this.textOp=this.position.x.interpolate({
      inputRange:[-200,0],
      outputRange:[1,0],
      extrapolate:"clamp",
    })

    this.textOpr=this.position.x.interpolate({
      inputRange:[0,200],
      outputRange:[0,1],
      extrapolate:"clamp",
    })

    
    
  }

  componentWillMount(){

    this.panResponder =  PanResponder.create(
      {

        onStartShouldSetPanResponder:(evt,gestureState)=>true ,
        onPanResponderMove:(evt,gestureState)=>{
          this.position.setValue({x:gestureState.dx,y:gestureState.dy})

        },
        onPanResponderRelease:(evt,gestureState)=>{
          if(gestureState.dx > 250){
            Animated.spring(this.position,{
              toValue:{x:screenWidth+100,y:gestureState.dy},
              friction:5
            }).start(()=>{
              this.setState({currentIndex:this.state.currentIndex+1})

              this.position.setValue({x:0,y:0})

            });
          }else if(gestureState.dx  < -250){
            Animated.spring(this.position,{
              toValue:{x:-(screenWidth+100),y:gestureState.dy},
              friction:5
            }).start(()=>{

              this.setState({currentIndex:this.state.currentIndex+1})
   this.position.setValue({x:0,y:0})
            });
          }else {
            Animated.spring(this.position,{
              toValue:{x:0,y:0},
              friction:5
            }).start();
          }

        }

      }
    );
  }


  
  
  renderUsers=()=>{

    return users.map((user,index)=>{
      if(index<this.state.currentIndex){
        
        return null
      }else if(index==this.state.currentIndex){
      return(
        <Animated.View 
        {...this.panResponder.panHandlers}
        key={user.id}
        style={[{ height: screenHeight - 120, width: screenWidth, padding: 10, position: 'absolute' },
        {
          transform:[
            {translateX:this.position.x},
            {translateY:this.position.y},
            {rotate:this.rotate}
          ],
          
          
                    
        }]}>
        <Animated.Text style={{color:"green",position:"absolute",top:50,left:50,fontSize:20,borderWidth:2,borderColor:"green",opacity:this.textOpr,zIndex:1000,transform:[{rotate:"-30deg"}],}}> LIKE</Animated.Text>


        <Animated.Text style={{color:"red",position:"absolute",top:50,right:50,fontSize:20,borderWidth:2,borderColor:"red",opacity:this.textOp,zIndex:1000,transform:[{rotate:"30deg"}],}}> NOPE</Animated.Text>
        <Image
        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
        source={user.uri} />

        </Animated.View>


      );}
      else {
        return(
          <Animated.View 
        key={user.id}
        style={[{height: screenHeight - 120, width: screenWidth, padding: 10, position: 'absolute',},
        {
          transform:[
            {scale:this.nextCard},        
               ],   opacity:this.nextCardOp                                          
        }]}>
        <Image
        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 20 }}
        source={user.uri} />

        </Animated.View>
        
        );
      }

    }).reverse();

  }
  render(){

    return(
      <View style={{ flex: 1, }}>
        <View style={{ height: 60 }}>
        
        </View>
        <View style={{ flex: 1}}>
        {this.renderUsers()}
        </View>
        <View style={{ height: 60 }}>

        </View>


      </View>


    );
  }
}
