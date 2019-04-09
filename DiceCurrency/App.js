import React from 'react';
import { StyleSheet, Text, View,TextInput,SafeAreaView,Image ,TouchableOpacity,Alert} from 'react-native';

const currencyPerRS={
  DOLLOR:0.015,
  EURO:0.013,
  UK:0.0112,
  AUS:0.0206,
  JAPAN:1.618,
  SINGAPORE:0.0197,
}
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      resultValue:"0.0",
      inputValue: null,
      uri:require("./src/images/dice1.png"),
    }

  }

  convertCurrnecy=(currency)=>{
    if(this.state.input === ""){
      Alert.alert("please enter some value..");
    }
    let result=this.state.inputValue *(currencyPerRS[currency]);
    this.setState({resultValue:result.toFixed(2)});
    this.rollTheDice();

  }
  rollTheDice=()=>{
    let a=Math.floor(Math.random()*6)+1;
    switch (a) {
      case 1:this.setState({uri:require("./src/images/dice1.png")});
      break;
      case 2:this.setState({uri:require("./src/images/dice2.png")});
      break;
      case 3:this.setState({uri:require("./src/images/dice3.png")});
      break;
      case 4:this.setState({uri:require("./src/images/dice4.png")});
      break;
      case 5:this.setState({uri:require("./src/images/dice5.png")});
      break;
      case 6:this.setState({uri:require("./src/images/dice6.png")});
      break;
    
        
      default:
        break;
    }
  }
  render() {
    return (
      <SafeAreaView style={styles.safeareaview}>
      <View style={styles.container}>
      <View style={styles.resultContainer}>
      <Image source={this.state.uri} 
      style={styles.diceImage}></Image>
      <Text style={styles.resultOutput}>{this.state.resultValue}</Text>
      
      </View>
      <View style={styles.inputContainer}>
      <Image source={this.state.uri} 
      style={styles.diceImage}></Image>
      <TextInput 
      style={styles.textInput}
      placeholder="ENTER HERE.."
      keyboardType="decimal-pad"
      onChangeText={(text)=>{this.setState({inputValue:text,})}}></TextInput>
      
      </View>
      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("DOLLOR")}} >
      <Text style={styles.textBtn}>$</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("EURO")}} >
      <Text style={styles.textInput}>EURO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("UK")}} >
      <Text style={styles.textInput}>UK</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("AUS")}} >
      <Text style={styles.textBtn}>AUS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("JAPAN")}} >
      <Text style={styles.textBtn}>JAPAN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("SING")}} >
      <Text style={styles.textBtn}>SING</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("DOLLOR")}} >
      <Text style={styles.textBtn}>MEXI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("DOLLOR")}} >
      <Text style={styles.textBtn}>AFRI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchOp} onPress={()=>{this.convertCurrnecy("DOLLOR")}} >
      <Text style={styles.textBtn}>CHINA</Text>
      </TouchableOpacity>
      </View>
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
    marginTop:25,
  },
  safeareaview:{
    flex:1,

  },
  resultContainer:{
    height:"15%",
    width:"97%",
    backgroundColor:"#c1c1c1",
    alignItems:"center",
    padding:5,
    flexDirection:"row"
  },
  diceImage:{
    height:"90%",
    width:"20%",
    marginRight:80
  },
  resultOutput:{
    fontSize:25,
    fontWeight:"bold",
    color:"#FFF",
  },
  inputContainer:{
    height:"15%",
    width:"97%",
    backgroundColor:"#c1c1c1",
    alignItems:"center",
    padding:5,
    flexDirection:"row",
    marginTop:5,

  },
  textInput:{

    fontSize:25,
    fontWeight:"bold",
    color:"#FFFFFF"
  },
  btnContainer:{
    flexWrap:"wrap",
    backgroundColor:"#FFF",
    flexDirection:"row",
    marginTop:10,
    

  },
  touchOp:{
    height:70,
    width:"30.33%",
    borderWidth:2,
    borderColor:"#FFF",
    borderRadius:7,
    backgroundColor:"#D63031",
    alignItems:"center",
    justifyContent:"center",
    margin:5
    

  },
  textBtn:{
    fontSize:20,
    color:"#FFF",
    fontWeight:"bold",
  }
  
});
