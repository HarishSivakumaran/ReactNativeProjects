import React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,TouchableOpacity,Alert} from 'react-native';
import {Entypo} from "@expo/vector-icons";
import {Button} from "native-base";

var itemArray = new Array(9).fill("empty");
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isCross : true,
      winGame: '',
      btnColor : "primary"
    }

  }

  assignItmCrossorCircle=(itemNo)=>{
if( itemArray[itemNo] == "empty"){
  itemArray[itemNo] = this.state.isCross;
  this.setState({isCross: !itemArray[itemNo]});

}
this.winGame();

  }

chooseIcon=(itemNo)=>{
  if(itemArray[itemNo] != "empty"){
    return itemArray[itemNo]? "cross":"circle"
  }
  return "pencil"
}

chooseIconColor=(itemNo)=>{

  if(itemArray[itemNo] != "empty"){
    return itemArray[itemNo]? "red":"green";
  }
  return "black";
}
winGame=()=>{
  if(itemArray[0] != "empty" && itemArray[0]==itemArray[1] && itemArray[0]==itemArray[2]){
    this.setState({winGame: (itemArray[0]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[3] != "empty" && itemArray[3]==itemArray[4] && itemArray[3]==itemArray[5]){
    this.setState({winGame: (itemArray[3]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[6] != "empty" && itemArray[6]==itemArray[7] && itemArray[6]==itemArray[8]){
    this.setState({winGame: (itemArray[6]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[0] != "empty" && itemArray[0]==itemArray[3] && itemArray[0]==itemArray[6]){
    this.setState({winGame: (itemArray[0]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[1] != "empty" && itemArray[1]==itemArray[4] && itemArray[1]==itemArray[7]){
    this.setState({winGame: (itemArray[1]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[2] != "empty" && itemArray[2]==itemArray[5] && itemArray[2]==itemArray[8]){
    this.setState({winGame:( itemArray[2]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[0] != "empty" && itemArray[0]==itemArray[4] && itemArray[0]==itemArray[8]){
    this.setState({winGame: (itemArray[0]?"cross":"circle").concat(" wins")});
  }else  if(itemArray[2] != "empty" && itemArray[2]==itemArray[4] && itemArray[2]==itemArray[6]){
    this.setState({winGame: (itemArray[2]?"cross":"circle").concat(" wins")});
  }

}

  resetGame=()=>{
    Alert.alert("DO YOU WANT TO RESET THE GAME?")
    itemArray.fill("empty");
    this.setState({winGame:""});
    this.forceUpdate();
  }

  render(){
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titleText}>TIC TAC TOE</Text>
        <View style={styles.grid}>
         <TouchableOpacity style={styles.boxes}
         onPress={()=>{this.assignItmCrossorCircle(0)}}>
         <Entypo name={this.chooseIcon(0)}
         size={50}
         color={this.chooseIconColor(0)}>
           </Entypo>       
             </TouchableOpacity>
             <TouchableOpacity style={styles.boxes}
             onPress={()=>{this.assignItmCrossorCircle(1)}}>
             <Entypo name={this.chooseIcon(1)}
             size={50}
             color={this.chooseIconColor(1)}>
               </Entypo>       
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.boxes}
                 onPress={()=>{this.assignItmCrossorCircle(2)}}>
                 <Entypo name={this.chooseIcon(2)}
                 size={50}
                 color={this.chooseIconColor(2)}>
                   </Entypo>       
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.boxes}
                     onPress={()=>{this.assignItmCrossorCircle(3)}}>
                     <Entypo name={this.chooseIcon(3)}
                     size={50}
                     color={this.chooseIconColor(3)}>
                       </Entypo>       
                         </TouchableOpacity>
                         <TouchableOpacity style={styles.boxes}
                         onPress={()=>{this.assignItmCrossorCircle(4)}}>
                         <Entypo name={this.chooseIcon(4)}
                         size={50}
                         color={this.chooseIconColor(4)}>
                           </Entypo>       
                             </TouchableOpacity>
                             <TouchableOpacity style={styles.boxes}
                             onPress={()=>{this.assignItmCrossorCircle(5)}}>
                             <Entypo name={this.chooseIcon(5)}
                             size={50}
                             color={this.chooseIconColor(5)}>
                               </Entypo>       
                                 </TouchableOpacity>
                                 <TouchableOpacity style={styles.boxes}
                                 onPress={()=>{this.assignItmCrossorCircle(6)}}>
                                 <Entypo name={this.chooseIcon(6)}
                                 size={50}
                                 color={this.chooseIconColor(6)}>
                                   </Entypo>       
                                     </TouchableOpacity>
                                     <TouchableOpacity style={styles.boxes}
                                     onPress={()=>{this.assignItmCrossorCircle(7)}}>
                                     <Entypo name={this.chooseIcon(7)}
                                     size={50}
                                     color={this.chooseIconColor(7)}>
                                       </Entypo>       
                                         </TouchableOpacity>
                                         <TouchableOpacity style={styles.boxes}
                                         onPress={()=>{this.assignItmCrossorCircle(8)}}>
                                         <Entypo name={this.chooseIcon(8)}
                                         size={50}
                                         color={this.chooseIconColor(8)}>
                                           </Entypo>       
                                             </TouchableOpacity>                  
           
        </View>
        <Text style={styles.titleText}>{this.state.winGame.toUpperCase()}</Text>
       
        <TouchableOpacity  style={styles.btn}>
        <Button  full rounded primary style={styles.btnBtn} 
        onPress={()=>{this.resetGame()}}><Text style={styles.resetbtn}>RESET</Text></Button>
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
    marginTop:25,
    backgroundColor:"#74B9FF",
  },
  titleText:{
    fontWeight:"bold",
    fontSize:25,
    color:"#FFF",
    marginBottom:50,
    marginTop:30
    

  },
  safeArea:{
    flex:1,
    backgroundColor:"#2475B0"
  },
  grid:{
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  boxes:{
    width:"30%",
    height:80,
    backgroundColor:"#FFF",
    justifyContent:"center",
    alignItems:"center",
    borderColor:"#616C6F",
    borderWidth:2,
  },
  resetbtn:{
    color:"#FFF",
    fontSize:20,
    fontWeight:"bold",
  },btn:{

    marginTop:30
  },
  btnBtn:{
width:"100%"
  }
});
