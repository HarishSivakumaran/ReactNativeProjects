import React from "react";
import {View,Image,Alert} from "react-native";
import HeaderCustom from "../src/components/HeaderCustom";
import DeckSwiperCards from "../src/components/DeckSwiperCards";
const cards = [
    {
      text: 'Samantha',
      name: 'One',
      image: {uri:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      
    },
    {
      text: 'Thamana',
      name: 'One',
      image: {uri:"https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      
    },
    {
      text: 'Trisha',
      name: 'One',
      image: {uri:"https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      
    },
    
    
  ];

export default class HomeScreen extends React.Component{
    componentDidMount(){

        this.props.navigation.setParams({navigateMethod:this.navigate});

    }
// static navigationOptions={
//     header:<HeaderCustom onPress={navigation.getParam("navigateMethod")
//     }></HeaderCustom>
// }
static navigationOptions=({navigation})=>{
    return({
        header:<HeaderCustom 
        onPress={navigation.getParam("navigateMethod")}></HeaderCustom>
    });
}

navigate=()=>{
    this.props.navigation.navigate("CameraScreen");
}
    render(){
        let pic=this.props.navigation.getParam("photo");
        if(pic!= null){
        cards.push({
            text: 'MyPicture',
            name: 'One',
            image: pic
            
          })
        }
        return(
        //     <Image
        //     source={{uri:"https://images.pexels.com/photos/1776906/pexels-photo-1776906.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
        //     style={{height:"100%",
        // width:"100%"}}>
        //     </Image>
        <DeckSwiperCards
        dataSource={cards}
        ></DeckSwiperCards>
            
        );
    }
}