import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      followRequests : ["a","b","c","d","e","f"],
      following:["Harish"]
    }
  }

  doFollow=(index)=>{
    let {followRequests,following}=this.state;
  let follower=  followRequests.splice(index,1)
  following.push(follower)
  console.log(following);
  
    this.forceUpdate();


  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{`you have ${this.state.following.length} friends`}</Text>
        <Button title="Go To Follow Page"
        onPress={()=>{
            this.props.navigation.navigate("Follow",{followReq:this.state.followRequests,
            following:this.state.following,
          doFollowMethod:this.doFollow})
        }}></Button>
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
