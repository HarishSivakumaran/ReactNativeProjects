import React from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import {Entypo} from "@expo/vector-icons";
import {Button} from "native-base";

var itemArray = new Array(9).fill("empty");
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isCross : false,
      winGame:""
    }
  }
  drawItem=(itemNo)=>{

    if(itemArray[itemNo] == "empty"){
      itemArray[itemNo]=this.state.isCross;
    this.setState({isCross: !itemArray[itemNo]});
    }
    
    this.winGame();


  }

  chooseItemIcon=(itemNo)=>{
    if( itemArray[itemNo] != "empty"){
      return itemArray[itemNo] ? "cross" : "circle" ;
    }
    return "pencil";

  }
  chooseItemColor=(itemNo)=>{

    if( itemArray[itemNo] != "empty"){
      return itemArray[itemNo] ? "red" : "green" ;
    }
    return "black";


  }
  resetGame=()=>{
    itemArray.fill("empty");
    this.setState({winGame:""});
    this.forceUpdate();
  }

  winGame=(itemNo)=>{
    if(itemArray[0] != "empty" && itemArray[0]==itemArray[1] && itemArray[0]==itemArray[2]){
      this.setState({winGame: itemArray[0]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[3] != "empty" && itemArray[3]==itemArray[4] && itemArray[3]==itemArray[5]){
      this.setState({winGame: itemArray[3]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[6] != "empty" && itemArray[6]==itemArray[7] && itemArray[6]==itemArray[8]){
      this.setState({winGame: itemArray[6]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[0] != "empty" && itemArray[0]==itemArray[3] && itemArray[0]==itemArray[6]){
      this.setState({winGame: itemArray[0]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[1] != "empty" && itemArray[1]==itemArray[4] && itemArray[1]==itemArray[7]){
      this.setState({winGame: itemArray[1]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[2] != "empty" && itemArray[2]==itemArray[5] && itemArray[2]==itemArray[8]){
      this.setState({winGame: itemArray[2]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[0] != "empty" && itemArray[0]==itemArray[4] && itemArray[0]==itemArray[8]){
      this.setState({winGame: itemArray[0]?"cross":"circle".concat(" wins")});
    }else  if(itemArray[2] != "empty" && itemArray[2]==itemArray[4] && itemArray[2]==itemArray[6]){
      this.setState({winGame: itemArray[2]?"cross":"circle".concat(" wins")});
    }
  }

  render(){
    return(
      <View style={styles.container}>
      <View style={styles.grid}>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(0)}}>
      <Entypo 
      name={this.chooseItemIcon(0)}
      color={this.chooseItemColor(0)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(1)}}>
      <Entypo 
      name={this.chooseItemIcon(1)}
      color={this.chooseItemColor(1)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(2)}}>
      <Entypo 
      name={this.chooseItemIcon(2)}
      color={this.chooseItemColor(2)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(3)}}>
      <Entypo 
      name={this.chooseItemIcon(3)}
      color={this.chooseItemColor(3)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(4)}}>
      <Entypo 
      name={this.chooseItemIcon(4)}
      color={this.chooseItemColor(4)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(5)}}>
      <Entypo 
      name={this.chooseItemIcon(5)}
      color={this.chooseItemColor(5)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(6)}}>
      <Entypo 
      name={this.chooseItemIcon(6)}
      color={this.chooseItemColor(6)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(7)}}>
      <Entypo 
      name={this.chooseItemIcon(7)}
      color={this.chooseItemColor(7)}
      size={50}
      ></Entypo>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}
      onPress={()=>{this.drawItem(8)}}>
      <Entypo 
      name={this.chooseItemIcon(8)}
      color={this.chooseItemColor(8)}
      size={50}
      ></Entypo>
      </TouchableOpacity>

      
      
      
      </View>
      <Text style={styles.winMessage}>{this.state.winGame}</Text>
      <Button full rounded primary onPress={()=>{this.resetGame();}}><Text  style={styles.resetBtn}>Reset Game</Text></Button>

      </View>
    );
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },
  grid:{
    flexWrap:"wrap",
    flexDirection:"row",
    justifyContent:'center'
    

  },
  btn:{
    width:"30%",
    height:100,
    alignItems:"center",
    justifyContent:"center",
    borderColor:"black",
    borderWidth:2
    
  },
  winMessage:{
    fontSize:25,
    marginTop:20,
    fontWeight:'bold',

  },
  resetBtn:{
    color:"#FFF",
    fontSize:20,

    
  }

});