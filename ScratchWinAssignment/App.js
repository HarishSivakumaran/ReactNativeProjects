import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native';
import {Audio} from "expo";
import {FontAwesome} from "@expo/vector-icons";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

var itemArray = new Array(25).fill("empty");
var soundObj = new Audio.Sound();

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      randomNumber : '',
      count: 0,
      comments:""
    }

  }

  componentDidMount(){
    this.generateRandomNumber();
  }
  generateRandomNumber=()=>{
    let a = Math.floor(Math.random()*25);
    this.setState({randomNumber:a});
    
  }

  playSound=async()=>{
    try {

      await soundObj.loadAsync(require("./assets/victory.wav"));
      await soundObj
                    .playAsync()
                    .then(async(playbackStatus)=>{setTimeout(()=>{soundObj.unloadAsync()},playbackStatus.playableDurationMillis)})
      
    } catch (error) {
      
    }
  }

  scratchItem=(itemNumber)=>{
    
    
    if(itemArray[itemNumber] == "empty" && this.state.count<6 ){

      this.state.count ++;

      if(itemNumber == this.state.randomNumber){
        itemArray[itemNumber] = "lucky"
        this.setState({comments:"Hurrayyy!!!"});
        this.playSound();
      }else{
        itemArray[itemNumber]="unlucky"
      }


    } else{
      this.setState({comments:"max count reached press show all or reset"})
    }
    this.forceUpdate();

   

  }
iconSelect=(itemNumber)=>{
  if(itemArray[itemNumber] == "lucky"){
    return "dollar";
  }else if(itemArray[itemNumber] == "unlucky"){
    return "frown-o";
  } return "bell"

}

iconColorSelect=(itemNumber)=>{
  if(itemArray[itemNumber] == "lucky"){
    return "green";
  }else if(itemArray[itemNumber] == "unlucky"){
    return "red";
  } return "#C1c1c1"
}

showAll=()=>{
  itemArray.fill("unlucky");
  itemArray[this.state.randomNumber]="lucky";
  this.forceUpdate();

}

resetAll=()=>{
  itemArray.fill("empty");
  this.generateRandomNumber();
  this.setState({comments:"",count:0},()=>{this.forceUpdate();});
}


  render(){
    return (
      <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Scratch And Win</Text>
        <View style={styles.grid}>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(0)}}>
        <FontAwesome
        name={this.iconSelect(0)}
        size={50}
        color={this.iconColorSelect(0)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(1)}}>
        <FontAwesome
        name={this.iconSelect(1)}
        size={50}
        color={this.iconColorSelect(1)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(2)}}>
        <FontAwesome
        name={this.iconSelect(2)}
        size={50}
        color={this.iconColorSelect(2)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(3)}}>
        <FontAwesome
        name={this.iconSelect(3)}
        size={50}
        color={this.iconColorSelect(3)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(4)}}>
        <FontAwesome
        name={this.iconSelect(4)}
        size={50}
        color={this.iconColorSelect(4)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(5)}}>
        <FontAwesome
        name={this.iconSelect(5)}
        size={50}
        color={this.iconColorSelect(5)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(6)}}>
        <FontAwesome
        name={this.iconSelect(6)}
        size={50}
        color={this.iconColorSelect(6)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(7)}}>
        <FontAwesome
        name={this.iconSelect(7)}
        size={50}
        color={this.iconColorSelect(7)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(8)}}>
        <FontAwesome
        name={this.iconSelect(8)}
        size={50}
        color={this.iconColorSelect(8)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(9)}}>
        <FontAwesome
        name={this.iconSelect(9)}
        size={50}
        color={this.iconColorSelect(9)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(10)}}>
        <FontAwesome
        name={this.iconSelect(10)}
        size={50}
        color={this.iconColorSelect(10)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(11)}}>
        <FontAwesome
        name={this.iconSelect(11)}
        size={50}
        color={this.iconColorSelect(11)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(12)}}>
        <FontAwesome
        name={this.iconSelect(12)}
        size={50}
        color={this.iconColorSelect(12)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(13)}}>
        <FontAwesome
        name={this.iconSelect(13)}
        size={50}
        color={this.iconColorSelect(13)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(14)}}>
        <FontAwesome
        name={this.iconSelect(14)}
        size={50}
        color={this.iconColorSelect(14)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(15)}}>
        <FontAwesome
        name={this.iconSelect(15)}
        size={50}
        color={this.iconColorSelect(15)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(16)}}>
        <FontAwesome
        name={this.iconSelect(16)}
        size={50}
        color={this.iconColorSelect(16)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(17)}}>
        <FontAwesome
        name={this.iconSelect(17)}
        size={50}
        color={this.iconColorSelect(17)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(18)}}>
        <FontAwesome
        name={this.iconSelect(18)}
        size={50}
        color={this.iconColorSelect(18)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(19)}}>
        <FontAwesome
        name={this.iconSelect(19)}
        size={50}
        color={this.iconColorSelect(19)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(20)}}>
        <FontAwesome
        name={this.iconSelect(20)}
        size={50}
        color={this.iconColorSelect(20)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(21)}}>
        <FontAwesome
        name={this.iconSelect(21)}
        size={50}
        color={this.iconColorSelect(21)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(22)}}>
        <FontAwesome
        name={this.iconSelect(22)}
        size={50}
        color={this.iconColorSelect(22)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(23)}}>
        <FontAwesome
        name={this.iconSelect(23)}
        size={50}
        color={this.iconColorSelect(23)}
        ></FontAwesome>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.touchOp}
        onPress={()=>{this.scratchItem(24)}}>
        <FontAwesome
        name={this.iconSelect(24)}
        size={50}
        color={this.iconColorSelect(24)}
        ></FontAwesome>
        </TouchableOpacity>
        </View>
        <Text style={styles.comments}>{this.state.comments}</Text>
        <Button
       onPress={this.showAll}
        icon={
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        iconRight
        title="SHOW ALL"
      />
      <Text style={styles.button}></Text>
      <Button
      onPress={this.resetAll}
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  iconRight
  title="RESET"
/>

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
    backgroundColor:"#FAD02E",
    marginTop:25,
  },
  safeArea:{
    flex:1,
    backgroundColor:"#DFAF2B",
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    color:"#FFF",
    marginBottom:50
  },
  grid:{
    flexWrap:"wrap",
    flexDirection:"row",
    paddingHorizontal:10
  },
  touchOp:{
    height:60,
    width:"20%",
    backgroundColor:"#FFF",
    borderWidth:2,
    borderColor:"#C1c1c1",
    justifyContent:"center",
    alignItems:"center"
  },
  comments:{
    color:"#FFF",
    fontSize:20,
    marginVertical:20,
    textAlign:"center"

  },
  button:{
    marginBottom:10
  }
});
