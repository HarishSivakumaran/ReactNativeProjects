import React from "react";
import {View,StyleSheet,Text,TouchableOpacity,AsyncStorage,FlatList} from "react-native";
import CustomHeader from "../src/components/CustomHeader";
import {Entypo} from "@expo/vector-icons";
import {Card, CardItem, Body} from "native-base";


export default class HomeScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data : null
        }
    }

    static navigationOptions = {
        header:(<CustomHeader name="ContactManager"></CustomHeader>)
    }

   
    componentWillMount(){

        this.props.navigation.addListener("willFocus",()=>{this.getAllData()})
    }
    getAllData=async ()=>{

        await AsyncStorage.getAllKeys()
        .then((keys)=>{  AsyncStorage.multiGet(keys)
            .then((data)=>{
                this.setState({
                    data:data
                })
            })
            .catch(e=>{console.log("multiget"+e);
            })
        })
        .catch((e)=>{console.log("gettin keys" + e);
        })

    }

    render(){
        console.log("render");
        
        return(
            <View style={styles.container}>
            <FlatList
            data={this.state.data}
            keyExtractor={(item,index)=> {return item[0].toString()}}
            renderItem={({item})=>{
                

                return(
                   // <Text>{JSON.parse(item[1])["fName"]}</Text> can be done this way tooo
                   <TouchableOpacity>
                   <Card>  
                    <CardItem>     
                    <View style={styles.iconStyle}>
                    <Text style={styles.infoStyle2}>{JSON.parse(item[1]).fName[0].toUpperCase()}</Text>
                    </View> 
                    <Body>
   
                      <Text style={styles.infoStyle}>{JSON.parse(item[1]).fName} 
                      
                      </Text>
               <Text style={styles.pnStyle}>{JSON.parse(item[1])["phoneNumber"]} 
                      
                      </Text>
                      </Body>
                      

                      </CardItem>

                      </Card>
                      </TouchableOpacity>
 
                );

            }}
            ></FlatList>



            <TouchableOpacity
            onPress={()=>{this.props.navigation.navigate("Add")}}
             style={styles.btn}>
            <Entypo
            name="plus"
            size={40}
            color="#FFF"></Entypo>
            </TouchableOpacity>

            </View>
        );
    }


}

const styles = StyleSheet.create({

    container:{

        flex:1,

    },
    btn:{
        position:"absolute",
        width:50,
        height:50,
        borderRadius:25,
        backgroundColor:"#53E0BC",
        bottom:30,
        right:30,
        alignItems:"center",
        justifyContent:"center"

    },
    iconStyle:{
        height:50,
        width:50,
        borderRadius:25,
        backgroundColor:"#53E0BC",
        justifyContent:"center",
        alignItems:"center"
        

    },
    infoStyle:{
        fontSize:20,
        marginLeft:30

    },
    infoStyle2:{
        color:"#FFF",
        fontSize:30,
    
    },
    pnStyle:{
        fontSize:15,
        marginLeft:30


    }
    

})