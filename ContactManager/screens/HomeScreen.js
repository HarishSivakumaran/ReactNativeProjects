import React from "react";
import {View,StyleSheet,Text,TouchableOpacity,AsyncStorage} from "react-native";
import CustomHeader from "../src/components/CustomHeader";
import {Entypo} from "@expo/vector-icons";


export default class HomeScreen extends React.Component{

    static navigationOptions = {
        header:(<CustomHeader name="ContactManager"></CustomHeader>)
    }

    componentWillMount(){
        this.getAllData();
    }
    getAllData=async ()=>{

        await AsyncStorage.getAllKeys()
        .then((keys)=>{  AsyncStorage.multiGet(keys)
            .then((data)=>{console.log(data);
            })
            .catch(e=>{console.log("multiget"+e);
            })
        })
        .catch((e)=>{console.log("gettin keys" + e);
        })

    }

    render(){
        return(
            <View style={styles.container}>
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

    }

})