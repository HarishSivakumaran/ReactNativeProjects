import React ,{Component} from "react";
import {View,TouchableOpacity,Image} from "react-native";
import {Permissions,Camera} from "expo"
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default class CameraScreen extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hasCameraPermission : false,
            isFlashOn:Camera.Constants.FlashMode.off,
            cameraType:Camera.Constants.Type.back,
        }
    }

    flipCamera=()=>{
 this.setState({
     cameraType : this.state.cameraType === Camera.Constants.Type.back ?  Camera.Constants.Type.front :Camera.Constants.Type.back
 })        
    }

    flipFlash=()=>{
        this.setState({
            isFlashOn: this.state.isFlashOn === Camera.Constants.FlashMode.on ? Camera.Constants.FlashMode.off : Camera.Constants.FlashMode.on 
        })
    }
    takePic=async ()=>{
        if(this.camera){
            let pic = await this.camera.takePictureAsync();
            this.props.navigation.navigate("HomeScreen",{pic:pic});
        }

    }


   async componentDidMount(){

    const result = Permissions.askAsync(Permissions.CAMERA)

    this.setState({
        hasCameraPermission: result === "granted"
    })


    }

    render(){

        if(this.state.hasCameraPermission){
            return(<Image source={{uri:"https://images.pexels.com/photos/1290376/pexels-photo-1290376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} 
            style={{flex:1,resizeMode:"cover"}}></Image>);
        }else {
            return (<View style={{flex:1}}>
                <Camera
                type={this.state.cameraType}
                flashMode={this.state.isFlashOn}
                style={{flex:1,flexDirection:"row",alignItems:"flex-end",justifyContent:"space-around",paddingBottom:10}}
                ref={(ref)=>{this.camera=ref}}
                >
                <TouchableOpacity 
                onPress={this.flipFlash}>
                <MaterialCommunityIcons
                name="flash"
                size={30}
                color="white"></MaterialCommunityIcons>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={this.takePic}>
                <MaterialCommunityIcons
                name="camera-iris"
                size={50}
                color="red"></MaterialCommunityIcons>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.flipCamera}>
                <MaterialCommunityIcons
                name="camera-switch"
                size={30}
                color="white"></MaterialCommunityIcons>
                </TouchableOpacity>

                </Camera>

                </View>);
        }
       
    }
}