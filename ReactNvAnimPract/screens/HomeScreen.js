import React from "react";
import {Image,ScrollView,StyleSheet} from "react-native";
import CustomHeader from "../src/components/CustomHeader";
import {  DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

var cards =[
    {
        text: 'Card One',
        name: 'One',
        image: {uri :"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      },
      {
        text: 'Card two',
        name: 'two',
        image: {uri :"https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      },
      {
        text: 'Card thre',
        name: 'three',
        image: {uri :"https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
      }

]
export default class Homescreen extends React.Component{
    static navigationOptions = ({navigation})=>{

        return(
            {
                header:(<CustomHeader
                    onPress={navigation.getParam("navigMeth")}
                    ></CustomHeader>)
            }
        );

       
    }

    navigateMethod=()=>{
        this.props.navigation.navigate("ClapScreen");
    }
    componentDidMount(){

        this.props.navigation.setParams({navigMeth:this.navigateMethod})

    }

    render(){
        return(
            <DeckSwiper
            style={{flex:1,}}
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 300, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="heart" style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
              
            }
          />
       );
    }
}

const styles = StyleSheet.create(
    {
        scrollView:{
            flex:1,
        }
    }
);