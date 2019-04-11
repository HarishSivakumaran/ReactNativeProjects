import React,{Component} from "react";
import {Text,TouchableOpacity} from "react-native";
import {Header,Left,Right,Icon,Body,Button} from "native-base"


export default class CustomHeader extends Component{

    render(){

        return(

            <Header style={{marginTop:25,backgroundColor:"#1BCA9B"}}>
            <Left>
            <TouchableOpacity activeOpacity={0.35}>
            <Button transparent onPress={this.props.onPress}>
            <Icon
            name="menu"
            color="#FFF"></Icon>
            </Button>
            </TouchableOpacity>
            </Left>
            <Body>
            <Text style={{color:"#FFF",fontSize:20}}>Animation</Text>
            </Body>
            <Right>
            <TouchableOpacity activeOpacity={0.75}>

            <Button transparent>
            <Icon
            name="camera"
            color="#FFF"></Icon>
            </Button>
            </TouchableOpacity>
            </Right>
            </Header>

        );
    }
}