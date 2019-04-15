import React,{Component} from "react";
import {Header,Left,Body,Right,Icon,Button} from "native-base";
import {Text,} from "react-native";

export default class CustomHeader extends Component{

    render(){
        return(
            <Header style={{backgroundColor:"#25CCF7",marginTop:25}}>
            <Left>
            <Button transparent>
            <Icon 
            name="menu"
            color="#FFF"
            ></Icon>
            </Button>
            </Left>
            <Body>
            <Text style={{color:"#FFF",
        fontSize:20}} >TinderMatch</Text>
            </Body>
            <Right>
            <Button 
            onPress = {this.props.onPress}
            transparent>
            <Icon
            name="camera"
            color="#FFF"
            ></Icon>
            </Button>
            </Right>
            </Header>
        );
    }
}
