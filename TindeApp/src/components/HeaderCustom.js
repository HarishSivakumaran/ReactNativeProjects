import React,{Component} from "react";
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class HeaderCustom extends Component{

    constructor(props){
        super(props);
        this.state={
            isLoading:true
        }
        
    }

   async componentWillMount(){
       await Expo.Font.loadAsync({
            Roboto_medium:require("native-base/Fonts/Roboto_medium.ttf")
        })

        this.setState({isLoading:false});

    }

    render(){
        if(!this.state.isLoading){
        return(
            <Header style={{backgroundColor:"#67E6DC",marginTop:24}}>
            <Left>
            <Button transparent>
            <Icon name="menu" ></Icon>
            </Button>
            </Left>
            <Body>
            <Title>Tinder Cards</Title>
            </Body>
            <Right>
            <Button transparent onPress={this.props.onPress}>
            <Icon name="camera" ></Icon>
            </Button>
            </Right>
            </Header>
            
        );
        }else{
            return (<Expo.AppLoading/>);
        }
       
    }

}