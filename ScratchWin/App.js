import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity} from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {Button} from "native-base";

var itemArray = new Array(25).fill("empty");
export default class App extends React.Component {

  constructor(props){
    super(props);

       this.state = {
                      isLucky : false,  
                      randumNumber:""
                    }
  }

  componentDidMount(){

    this.generateRandomNumber();
  }

  generateRandomNumber=()=>{

    let a = Math.floor(Math.random()*25);
    this.setState({randumNumber:a});
  }

  scratchItem=(itemNumber)=>{
    if( itemArray[itemNumber] == "empty"){
      if( this.state.randumNumber == itemNumber){
        itemArray[itemNumber] = "lucky"
      }else{
        itemArray[itemNumber] = "unlucky"
  
      }
    }
   this.forceUpdate();
  }
  scratchItemIcon=(itemNumber)=>{
    if(itemArray[itemNumber] == "lucky"){
      return "dollar"
    }else if(itemArray[itemNumber] == "unlucky"){
      return "frown-o"

    }
    return "bell-o"

  }

  scratchItemIconColor=(itemNumber)=>{
    if(itemArray[itemNumber] == "lucky"){
      return "green"
    }else if(itemArray[itemNumber] == "unlucky"){
      return "red"

    }
    return "#616C6F"

  }
  resetGame=()=>{
    itemArray.fill("empty");
    this.forceUpdate();
this.generateRandomNumber();

  }

  showAll=()=>{
    itemArray.fill("unlucky");
    itemArray[this.state.randumNumber] = "lucky";
    this.forceUpdate();


  }




  render() {
    return (
      <SafeAreaView style={styles.safeArea}>    
       <View style={styles.container}>
       <Text style={styles.title}>SCRATCH AND WIN </Text>
       <View style={styles.grid} >
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(0)}}>
       <FontAwesome
       name={this.scratchItemIcon(0)}
       size={30}
       color={this.scratchItemIconColor(0)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(1)}}>
       <FontAwesome
       name={this.scratchItemIcon(1)}
       size={30}
       color={this.scratchItemIconColor(1)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(2)}}>
       <FontAwesome
       name={this.scratchItemIcon(2)}
       size={30}
       color={this.scratchItemIconColor(2)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(3)}}>
       <FontAwesome
       name={this.scratchItemIcon(3)}
       size={30}
       color={this.scratchItemIconColor(3)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(4)}}>
       <FontAwesome
       name={this.scratchItemIcon(4)}
       size={30}
       color={this.scratchItemIconColor(4)}></FontAwesome>
       </TouchableOpacity>
   
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(5)}}>
       <FontAwesome
       name={this.scratchItemIcon(5)}
       size={30}
       color={this.scratchItemIconColor(5)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(6)}}>
       <FontAwesome
       name={this.scratchItemIcon(6)}
       size={30}
       color={this.scratchItemIconColor(6)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(7)}}>
       <FontAwesome
       name={this.scratchItemIcon(7)}
       size={30}
       color={this.scratchItemIconColor(7)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(8)}}>
       <FontAwesome
       name={this.scratchItemIcon(8)}
       size={30}
       color={this.scratchItemIconColor(8)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(9)}}>
       <FontAwesome
       name={this.scratchItemIcon(9)}
       size={30}
       color={this.scratchItemIconColor(9)}></FontAwesome>
       </TouchableOpacity>
   
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(10)}}>
       <FontAwesome
       name={this.scratchItemIcon(10)}
       size={30}
       color={this.scratchItemIconColor(10)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(11)}}>
       <FontAwesome
       name={this.scratchItemIcon(11)}
       size={30}
       color={this.scratchItemIconColor(11)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(12)}}>
       <FontAwesome
       name={this.scratchItemIcon(12)}
       size={30}
       color={this.scratchItemIconColor(12)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(13)}}>
       <FontAwesome
       name={this.scratchItemIcon(13)}
       size={30}
       color={this.scratchItemIconColor(13)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(14)}}>
       <FontAwesome
       name={this.scratchItemIcon(14)}
       size={30}
       color={this.scratchItemIconColor(14)}></FontAwesome>
       </TouchableOpacity>
   
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(15)}}>
       <FontAwesome
       name={this.scratchItemIcon(15)}
       size={30}
       color={this.scratchItemIconColor(15)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(16)}}>
       <FontAwesome
       name={this.scratchItemIcon(16)}
       size={30}
       color={this.scratchItemIconColor(16)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(17)}}>
       <FontAwesome
       name={this.scratchItemIcon(17)}
       size={30}
       color={this.scratchItemIconColor(17)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(18)}}>
       <FontAwesome
       name={this.scratchItemIcon(18)}
       size={30}
       color={this.scratchItemIconColor(18)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(19)}}>
       <FontAwesome
       name={this.scratchItemIcon(19)}
       size={30}
       color={this.scratchItemIconColor(19)}></FontAwesome>
       </TouchableOpacity>
   
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(20)}}>
       <FontAwesome
       name={this.scratchItemIcon(20)}
       size={30}
       color={this.scratchItemIconColor(20)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(21)}}>
       <FontAwesome
       name={this.scratchItemIcon(21)}
       size={30}
       color={this.scratchItemIconColor(21)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(22)}}>
       <FontAwesome
       name={this.scratchItemIcon(22)}
       size={30}
       color={this.scratchItemIconColor(22)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(23)}}>
       <FontAwesome
       name={this.scratchItemIcon(23)}
       size={30}
       color={this.scratchItemIconColor(23)}></FontAwesome>
       </TouchableOpacity>
       <TouchableOpacity 
       style={styles.touchOp}
       onPress={()=>{this.scratchItem(24)}}>
       <FontAwesome
       name={this.scratchItemIcon(24)}
       size={30}
       color={this.scratchItemIconColor(24)}></FontAwesome>
       </TouchableOpacity>
   
       </View>
       <TouchableOpacity style={styles.resetBtn}>

       <Button full rounded danger style={{marginBottom:20}} 
       onPress={()=>{this.resetGame()}}>
       <Text style={{color:"#FFF",fontSize:20,fontWeight:"bold"}}>RESET</Text>
       </Button>
       </TouchableOpacity>
       <TouchableOpacity style={styles.resetBtn}>
       <Button full rounded success
       onPress={()=>{this.showAll()}}>
       <Text style={{color:"#FFF",fontSize:20,fontWeight:"bold"}}>SHOW ALL</Text>
       </Button>
       </TouchableOpacity>
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
    backgroundColor:"#25CCF7",
    marginTop:25
  },
  safeArea:{
    flex:1,
    backgroundColor:"#2475B0"
  },
  title:{
    fontSize:25,
    fontWeight:"bold",
    color:"#FFF",
    marginBottom:30
  },
  grid:{
    flexWrap:"wrap",
    flexDirection:"row",
    paddingHorizontal:10,
    marginBottom:30
  },
  touchOp:{
    width:"20%",
    height:40,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#4C4B4B"
  },
  resetBtn:{
    width:"100%"
  }
});
