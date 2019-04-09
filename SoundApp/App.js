import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image,TouchableOpacity} from 'react-native';
import {Audio} from "expo";

const backgroundColorCustom={
  1:"#25CCF7",
  2:"#AE1438",
  3:"#2ecc72",
  4:"#53E0BC",
  5:"#F4C724",
  6:"#1BCA9B",
  7:"#FAD02E",
  8:"#01CBC6",
  9:"#EA7773",
  10:"#BB2CD9",
}
const sounds={
  1:require("./assets/one.wav"),
  2:require("./assets/two.wav"),
  3:require("./assets/three.wav"),
  4:require("./assets/four.wav"),
  5:require("./assets/five.wav"),
  6:require("./assets/six.wav"),
  7:require("./assets/seven.wav"),
  8:require("./assets/eight.wav"),
  9:require("./assets/nine.wav"),
  10:require("./assets/ten.wav"),

}
export default class App extends React.Component {

  playSound=async (number)=>{

    const soundObj = new Audio.Sound();
    let path = sounds[number];
    try {
     await soundObj.loadAsync(path);
     await soundObj
     .playAsync()
     .then(async (playbackStatus)=>{setTimeout(()=>{soundObj.unloadAsync()},playbackStatus.playableDurationMillis)})
     .catch(error=>{console.log(error);
     })
    } catch (error) {
      console.log(error);
      
      
    }

  }



  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <Image source={require("./assets/logo.png")} ></Image>
      <ScrollView>
      <View style={styles.gridView}>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[1]}]}
       onPress={()=>{this.playSound(1)}}>
      <Text>ONE</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[2]}]}
       onPress={()=>{this.playSound(2)}}>
      <Text>TWO</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[3]}]}
       onPress={()=>{this.playSound(3)}}>
      <Text>THREE</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[4]}]}
       onPress={()=>{this.playSound(4)}}>
      <Text>FOUR</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[5]}]}
       onPress={()=>{this.playSound(5)}}>
      <Text>FIVE</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[6]}]}
       onPress={()=>{this.playSound(6)}}>
      <Text>SIX</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[7]}]}
       onPress={()=>{this.playSound(7)}}>
      <Text>SEVEN</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[8]}]}
       onPress={()=>{this.playSound(8)}}>
      <Text>EIGHT</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[9]}]}
       onPress={()=>{this.playSound(9)}}>
      <Text>NINE</Text>
      </TouchableOpacity>
      <TouchableOpacity
       style={[styles.touchOp,{backgroundColor:backgroundColorCustom[10]}]}
       onPress={()=>{this.playSound(10)}}>
      <Text>TEN</Text>
      </TouchableOpacity>
      
      </View>
      </ScrollView>
      </View>
      </SafeAreaView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#616C6F"
  },
  safeArea:{
    flex:1,
    backgroundColor:"#2F363F"
  },
  gridView:{
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:"center",
    paddingHorizontal:10,
  },
  touchOp:{
    width:"100%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    marginBottom:5,
    marginHorizontal:10,
  }
});
