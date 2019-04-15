import React,{Component} from "react";
import {View,Animated,StyleSheet,TouchableWithoutFeedback,Easing} from "react-native";
import {FontAwesome} from "@expo/vector-icons";

export default class MediumClap extends Component{
    constructor(props){
        super(props);
        this.state = {
            clapsCount : 0,
        }

        this.pos = new Animated.Value(0);

        this.opacity = this.pos.interpolate({
            inputRange:[-100,-70],
            outputRange:[0,1],
            extrapolate:"clamp"
        })
    }

    moveUp=()=>{
        
        Animated.timing(this.pos,{
            toValue:-100,
            duration:1000,
            easing:Easing.linear,
        }).start(()=>{
            this.pos.setValue(0);
        });
    }

    render(){
        return(
            <View >
            <Animated.View style={[styles.circleInside,{
                transform:[{translateY:this.pos}],opacity:this.opacity,
            }]}>
            <TouchableWithoutFeedback>
            <FontAwesome
            name="heart"
            size={40}
            color="pink"></FontAwesome>
            </TouchableWithoutFeedback>

            </Animated.View>
            <View style={styles.circle}>
            <TouchableWithoutFeedback

            onPress={this.moveUp}
            >
            <FontAwesome
            name="thumbs-up"
            size={40}
            color="lightblue"></FontAwesome>
            </TouchableWithoutFeedback>

            </View>
            </View>
        );

    }
}

const styles =StyleSheet.create({
    circle:{
        height:60,
        width:60,
        borderRadius:30,
        position:"absolute",
        bottom:20,
        right:20,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",

        
    },
    circleInside:{
        height:60,
        width:60,
        borderRadius:30,
        position:"absolute",
        bottom:20,
        right:20,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",

        
    }
})