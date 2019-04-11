import React,{Component} from "react";
import {StyleSheet,View ,TouchableOpacity,Easing,Text} from "react-native";
import {Foundation} from "@expo/vector-icons";
import Animated from "react-native-reanimated";



export default class ClapButton extends Component{

    constructor(props){
        super(props)
        this.state = {
            count: 0,
            claps :[],
        }
    }
    renderClaps=()=>{
        return this.state.claps.map((nos,index)=>{ return <ClapBubble key={index} count={nos } bubbleDisappear={this.bubbleDisappear.bind(this)}></ClapBubble>})
    }
    clapPressed=()=>{
        let count = this.state.count;
        count++;
        this.setState({count:count})
        let claps=this.state.claps
        claps.push(count)
        this.setState({claps:claps})
        
    }
    keepClapping=()=>{
       this.clapTimer= setInterval(()=>{this.clapPressed()},150)
    }

    stopClappping=()=>{
        if(this.clapTimer){
            clearInterval(this.clapTimer)
        }
    }
    colorChange=()=>{
        return this.state.count>0 ? "blue" : "grey"
    }

    bubbleDisappear=(num)=>{
       let claps =this.state.claps
       claps.splice(claps.indexOf(num),1)
       this.setState({claps:claps})
    }
    render(){
        return(
            <View style={[styles.container]}>
            {this.renderClaps()}

            <TouchableOpacity 
            onPress={()=>{ this.clapPressed()
                
                }}
                onPressIn={()=>{ this.keepClapping();}}
                onPressOut={this.stopClappping}
            style={styles.clapButton}
            activeOpacity={0.95}>
            <Foundation
            name="like"
            size={50}
            color={this.colorChange()}></Foundation>
            </TouchableOpacity>
            </View>
        );
    }

}

class ClapBubble extends Component{

    constructor(props){
        super(props);
        this.state = {
            yPos : new Animated.Value(0),
            opacity:new Animated.Value(0)

        }
    }

    componentDidMount(){
       Animated.timing(this.state.yPos,{
           toValue:-120,
           duration:500,
           easing:Easing.linear,
       }).start();

       Animated.timing(this.state.opacity,{
           toValue:1,
           duration:500,
           easing:Easing.linear
       }).start(()=>{
           setTimeout(()=>{this.props.bubbleDisappear(this.props.count)},150)
       });
    }
    render(){
        let animationStyle={
            transform:[ {
                translateY:this.state.yPos,
            }],
            opacity:this.state.opacity,

                
            
        }
        return(
            <Animated.View 
            
            style={[styles.clapBubble,animationStyle]}>
           
            <Text style={{color:"#FFF",
        fontSize:16}}> +{this.props.count}</Text>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

    },
    clapButton:{
        position:"absolute",
        bottom:20,
        right:20,
        height:60,
        width:60,
        borderRadius:30,
        borderWidth:3,
        borderColor:"#FFF",
        backgroundColor:"#FFF",
        justifyContent:"center",
        alignItems:"center",
        elevation:5,


    },
    clapBubble:{
        position:"absolute",
        bottom:20,
        right:20,
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:"#1BCA9B",
        justifyContent:"center",
        alignItems:"center",

    },
   
});