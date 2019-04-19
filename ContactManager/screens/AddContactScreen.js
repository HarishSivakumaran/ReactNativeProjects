import React from "react";
import {View,StyleSheet,Text,AsyncStorage,Keyboard,TouchableWithoutFeedback,} from "react-native";
import {Label,Input,Item,Button} from "native-base";

const imageBg = [
    {uri:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {uri:"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {uri:"https://images.pexels.com/photos/905913/pexels-photo-905913.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
    {uri:"https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},

    {uri:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
]

export default class AddContactScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            fName :"",
            lName :"",
            phoneNumber:"",
            address:""
        }
    }



    saveContact=async ()=>{

        if(this.state.address != "" &&
        this.state.fName != "" &&
        this.state.phoneNumber != "" &&
        this.state.lName != "" ){

        var data = {
            fName : this.state.fName,

            lName : this.state.lName,

            phoneNumber : this.state.phoneNumber,

            address : this.state.address,

            
        }
       

        await AsyncStorage.setItem(Date.now().toString(),
        JSON.stringify(data)
        ).then(()=>{
            
            this.props.navigation.goBack()})
        .catch((e)=>{
            console.log(e);
            
        })
    }else{

    }


    }


    render(){
        return(
            <TouchableWithoutFeedback
            style={{flex:1,}}
             onPress={()=>{                 
                 Keyboard.dismiss}}>
            <View style={styles.container}>
            <Item fixedLabel>
            <Label>FirstName</Label>
            <Input  
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="default"
            onChangeText={(txt)=>{this.setState({
                fName:txt
            })}}
            />
          </Item>
          <Item fixedLabel>
          <Label>LastName</Label>
          <Input  
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
          onChangeText={(txt)=>{this.setState({
              lName:txt
          })}}
          />
        </Item>
        <Item fixedLabel>
        <Label>phoneNumber</Label>
        <Input  
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="decimal-pad"
        onChangeText={(txt)=>{this.setState({
            phoneNumber:txt
        })}}
        />
      </Item>

      <Item fixedLabel>
      <Label>Address</Label>
      <Input  
      autoCorrect={false}
      autoCapitalize="none"
      keyboardType="default"
      onChangeText={(txt)=>{this.setState({
          address:txt
      })}}
      />
    </Item>
    <Button
    onPress={()=>{this.saveContact();}}
     full rounded priary style={{marginTop:20,marginHorizontal:10,backgroundColor:"#10A881"}}>
    <Text style={{color:"#FFF",fontSize:16,textAlign:"center"}}> Save</Text>
    </Button>


            </View>
            </TouchableWithoutFeedback>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:25,
    }
})