import React from "react";
import {View} from "react-native";
import CustomHeader from "../src/components/CustomHeader"

export default class HomeScreen extends React.Component{

    static navigationOptions = (navigation)=>{

        return(
            {
                header:<CustomHeader></CustomHeader>
            }
        );
    }

    render(){
        return(
            <View></View>
        );
    }
}