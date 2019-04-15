import React from "react";
import {View,StyleSheet} from "react-native";
import TinderCards from "../src/components/TinderCards";
import CustomHeader from "../src/components/CustomHeader";


const users =[
    {
        id:"Ann",
        uri:{uri:"https://images.pexels.com/photos/2090704/pexels-photo-2090704.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    },
    {
        id:"Lucy",
        uri:{uri:"https://images.pexels.com/photos/2102891/pexels-photo-2102891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    },
    {
        id:"Mathew",
        uri:{uri:"https://images.pexels.com/photos/2072453/pexels-photo-2072453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    },
    {
        id:"Robin",
        uri:{uri:"https://images.pexels.com/photos/2118049/pexels-photo-2118049.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    },
    {
        id:"Joey",
        uri:{uri:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    }]

export default class HomeScreen extends React.Component{
    componentDidMount(){
        this.props.navigation.setParams({
            goToCamera:this.goToCamera,
        })
    }

    static navigationOptions = ({navigation})=>{
        return({
            header:(<CustomHeader 
                onPress={navigation.getParam("goToCamera")}></CustomHeader>)
        });
    }
    goToProfile = ()=>{
        this.props.navigation.navigate("ProfileScreen");
    }

    goToCamera = ()=>{
        this.props.navigation.navigate("CameraScreen");
    }

    render(){
        return(
            <View style={styles.container}>
            <TinderCards 
            swipRight={this.goToProfile}/>
            </View>
        );
    }

}
const styles=StyleSheet.create({
    container:{
        flex:1,

    }
})