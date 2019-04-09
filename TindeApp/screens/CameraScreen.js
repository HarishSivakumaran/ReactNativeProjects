import React,{Component} from "react";
import {ImageBackground,Text,StyleSheet,TouchableOpacity} from "react-native";
import {Permissions,Camera} from "expo";
import {FontAwesome} from "@expo/vector-icons";
import { View } from "native-base";


export default class CameraScreen extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            hasPermissions: null,
            type:Camera.Constants.Type.back,
            isFlashLightOn:Camera.Constants.FlashMode.off
        }
    }

    async componentDidMount(){
        const {result} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasPermissions:result === "allow",
        });
    }

    flipCamera=()=>{
        this.setState(
            {
                type: (Camera.Constants.Type.front == this.state.type) ? Camera.Constants.Type.back  :Camera.Constants.Type.front
            }
        );
    }

    toggleFlashLight=()=>{
        this.setState(
            {
                isFlashLightOn: (this.state.isFlashLightOn == Camera.Constants.FlashMode.off)? Camera.Constants.FlashMode.on :Camera.Constants.FlashMode.off
            }
        );
    }

    takePicture= async()=>{
        

        if(this.camera){
            let photo= await this.camera.takePictureAsync();
            
            this.props.navigation.navigate("HomeScreen",{
                photo:photo
            })
        }
    }

    render(){
        if(this.state.hasPermissions == null){
        return(
            <ImageBackground style={styles.image} source={{uri:"https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}>
            </ImageBackground>
        );
        }else if(this.state.hasPermissions == true){
            return(<ImageBackground style={styles.image} source={{uri:"https://images.pexels.com/photos/122400/pexels-photo-122400.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}>
            <Text style={styles.text}>Camera Permission Denied</Text>
            </ImageBackground>);
        }else {
            return(
                <View style={styles.container}>
                <Camera
                style={styles.cameraStyle}
                type={this.state.type}
                flashMode={this.state.isFlashLightOn}
                ref={(ref)=>{
                    this.camera=ref;
                }}
                >
                <View style={styles.actionBars}>
                <TouchableOpacity onPress={()=>{this.toggleFlashLight()}}>
                <FontAwesome
                name="flash"
                color="#FFF"
                size={25}/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    this.takePicture();
                }}>
                <FontAwesome
                name="circle"
                color="red"
                size={50}/>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{
                    this.flipCamera();
                }}>
                <FontAwesome
                name="camera"
                color="#FFF"
                size={25}/>
                </TouchableOpacity>
                </View>
                </Camera>
                
                </View>
            );
        }

    }

}
const styles=StyleSheet.create({
    image:{
        height:"100%",
        width:"100%",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontWeight:"bold",
        fontSize:20,
        color:"#FFF",
        
    },
    container:{
        flex:1,
    },
    actionBars:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end",
        marginBottom:20,
        backgroundColor:"transparent"
        

    },
    cameraStyle:{
        flex:1,
        justifyContent:"flex-end"

    }
    
});