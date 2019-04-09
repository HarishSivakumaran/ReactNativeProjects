import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      followReq:this.props.navigation.getParam("followReq",""),
      doFollow:this.props.navigation.getParam("doFollowMethod","")
    }
  }

  static navigationOptions ={
    title:"Follow Page",
    headerStyle:{
      backgroundColor:"#c1c1c1",
      borderRadius:2
    },
    headerTintColor:"#FFF",
    headerTitleStyle:{
      color:"#000000",
      fontWeight:"bold"
    }

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Im in Follow</Text>
        {
          this.state.followReq.map((frn,index)=>{
            return(<Button 
              key={index}
              title={`${frn} wants to follow you`}
              onPress={(key)=>{this.state.doFollow(key);
                this.forceUpdate();
              }}/>);
          })
        }
        <Button
        title="go to home"
        onPress={()=>{this.props.navigation.navigate("Home")}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
