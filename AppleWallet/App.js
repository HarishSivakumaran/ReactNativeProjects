import React ,{Component} from "react";
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

        this.yScroll=gestureState.dy

      },
      onPanResponderRelease:(evt,gestureState)=>{

        Animated.spring(this.yScroll,{
          toValue:0,
          friction:3,
          useNativeDriver:true,
        }).start();

        


      }
    })
  }


  renderCards=()=>{

    return ( cardVals.map((cardVal,index)=>{
      
      this.cardsExpand = this.yScroll.interpolate({
        inputRange:[0,cardHeight],
        outputRange:[-(cardHeight-cardTitle)*(index+1),-(cardTitle)*(index+1)],
        extrapolate:"clamp",
      })

      return(
        <Animated.View
        key={index}
        style={{width:"100%"}}
        >
        <Cards
        backgroundColor={cardVal.color}
        ></Cards>
        </Animated.View>
      );


    }) );

  }

  render(){
    return(
      <View  style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,

  }

})