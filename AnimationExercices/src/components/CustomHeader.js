import React,{Component} from "react";
import {Header,Right,Left,Body,Icon} from "native-base";

export default class CustomHeader extends Component{

    render(){


        return(

            <Header style={{backgroundColor:"#1BCA9B"}}>
            <Left>
            <Icon
            name="menu"
            color="#FFF"></Icon>
            </Left>
            <Body>
            <Text > Animation</Text>
            </Body>
            <Right>
            <Icon
            name="camera"
            color="#FFF"></Icon>
            </Right>
            </Header>
        );

    }
}