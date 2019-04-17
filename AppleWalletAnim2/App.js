import React from "react";
import {View,PanResponder,StyleSheet,Animated} from "react-native";
import Cards ,{cardHeight,cardTitle} from "./src/components/Cards";

const cardVals =[ 
  { 
    name:"1",
    color:"#10A881",
    title:"Card 1",
  },
  { 
    name:"2",
    color:"#DFAF2B",
    title:"Card 2",
  },
  { 
    name:"3",
    color:"#BB2CD9",
    title:"Card 3",
  },
  { 
    name:"4",
    color:"#1287A5",
    title:"Card 4",
  },
  { 
    name:"5",
    color:"#D63031",
    title:"Card 5",
  },
  

]
export default class App extends React.Component{
    
  
  constructor(props){
    super(props);

this.yScroll = new Animated.Value(0);
   
  }

  componentWillMount(){
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder:(evt,gestureState)=>true,
      onPanResponderMove:(evt,gestureState)=>{

        this.yScroll.setValue(gestureState.dy)


      },
      onPanResponderRelease:(evt,gestureState)=>{

        Animated.spring(this.yScroll,{
          toValue:0,
          friction:9,
          useNativeDriver:true,
          
        }).start();

        


      }
    })
  }


  renderCards=()=>{

    return ( 
      cardVals.map((card,index)=>{


       var yVal = this.yScroll.interpolate({
        inputRange:[0,cardHeight],
        outputRange:[-(cardHeight-cardTitle)*index,-(cardTitle+100)*index],
        extrapolate:"clamp"
      })

        return(
          <Animated.View
          {...this.panResponder.panHandlers}
          key={index}
          style={{width:"100%",height:cardHeight,alignItems:"center" ,transform:[{translateY:yVal}]}}
          >
          <Cards 
          backgroundColor={card.color}></Cards>
          </Animated.View>
        );
      })
    );

   
    
      }


      render(){
        return(
          <View style={styles.container}>
          {this.renderCards()}
          </View>
        );

      }
  }


    




  

 

const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:"center",
    marginTop:25

  }

})
