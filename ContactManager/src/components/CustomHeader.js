import React,{Component} from "react";
import {Header,Left,Right,Icon,Body,Button,Text} from "native-base";

export default class CustomHeader extends Component{


    render(){
        return(
            <Header style={{backgroundColor:"#53E0BC",marginTop:24}}>
            <Left>
            <Button transparent>
            <Icon
            name="menu"
            size={50}
            color="#FFF"></Icon>
            </Button>
            </Left>
            <Body>
            <Text style={{color:"#FFF",fontSize:20}}>{this.props.name}</Text>
            </Body>
            </Header>
        );
    }
}