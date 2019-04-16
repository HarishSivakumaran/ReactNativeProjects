import React,{Component} from "react";
import {View,PanResponder,Text,Animated,Image,Dimensions,StyleSheet} from "react-native";
const screenHeight  = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;


export default class TinderCards extends Component{

    constructor(props){
        super(props);

        this.state = {
            currentIndex : 0,
        }

        this.position = new Animated.ValueXY();

        this.nextCardScale= this.position.x.interpolate({
            inputRange:[-screenWidth/2,0,screenWidth/2],
            outputRange:[1,0.8,1],
            extrapolate:"clamp"
        })

        this.nextCardOpacity= this.position.x.interpolate({
            inputRange:[-screenWidth/2,0,screenWidth/2],
            outputRange:[1,0.7,1],
            extrapolate:"clamp"
        })

        this.rotateCard = this.position.x.interpolate({
            inputRange:[-screenWidth/2,0,screenWidth/2],
            outputRange:["-20deg","0deg","20deg"],
            extrapolate:"clamp"
        })

        this.textOpacityNope=this.position.x.interpolate({
            inputRange:[-screenWidth/2,0],
            outputRange:[1,0],
            extrapolate:"clamp",
        })

        this.textOpacityLike=this.position.x.interpolate({
            inputRange:[0,screenWidth/2],
            outputRange:[0,1],
            extrapolate:"clamp",
        })

    }

    componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder:(evt,gestureState)=>true,
            onPanResponderMove:(evt,gestureState)=>{
               let yVal= gestureState.dy >0?gestureState.dy :0 ;
                this.position.setValue({
                    x:gestureState.dx,
                    y: yVal,
                })
                

            },
            onPanResponderRelease:(evt,gestureState)=>{
                if(gestureState.dx>screenWidth/2){

                    Animated.spring(this.position,{
                        toValue:{
                            x:screenWidth+1000,
                        
                            y:gestureState.dy,

                        },
                        friction:20,
                        // useNativeDriver:true, threw an error like value as value cannot be cast as double to a string

                    }).start(()=>{
                        let z =this.state.currentIndex;
                        this.setState({currentIndex:this.state.currentIndex+1});
                    this.position.setValue({x:0,y:0});
                    setTimeout(this.props.swipRight,10);
                    }
                    );
                   
                }else if(gestureState.dx < -screenWidth/2){
                    Animated.spring(this.position,{
                        toValue:{x:-screenWidth-1000,y:gestureState.dy},
                        friction:20,
                        // useNativeDriver:true,

                    }).start(()=>{this.setState({currentIndex:this.state.currentIndex+1});
                    this.position.setValue({x:0,y:0})});


                }
                else{
                    Animated.spring(this.position,{
                        toValue:{x:0,y:0},
                        friction:5,
                        // useNativeDriver:true,
                    }).start();
                }

            }
        })
    }
    renderCards=()=>{

        users=this.props.users

        return users.map(
            (user,index)=>{
                if(this.state.currentIndex>index){
                    return null;
                }

                 
                else if(this.state.currentIndex==index){

               return(
                <Animated.View
                {...this.PanResponder.panHandlers}
                key={index}
                 style={{height:screenHeight-100,width:screenWidth,padding:7,overflow:"hidden",position:"absolute",
                transform:[{translateX:this.position.x},{translateY:this.position.y},{rotate:this.rotateCard}]}}>
                <Image
                source={user.uri}
                style={{flex:1,borderRadius:10,resizeMode:"cover",overflow:"hidden",width:null,height:null}}></Image>
                <Animated.Text style={{position:"absolute",top:50,right:40,padding:5,borderWidth:2,color:"red",borderColor:"red",fontSize:20,fontWeight:"bold",opacity:this.textOpacityNope,transform:[{rotate:"30deg"}]}}>NOPE</Animated.Text>
                <Animated.Text style={{position:"absolute",top:50,left:40,padding:5,borderWidth:2,color:"green",borderColor:"green",fontSize:20,fontWeight:"bold",opacity:this.textOpacityLike,transform:[{rotate:"-30deg"}]}}>LIKE</Animated.Text>

                </Animated.View>

               );
                }
                else{
                    return(
                        <Animated.View
                        key={index}
                         style={{height:screenHeight-100,width:screenWidth,padding:7,overflow:"hidden",position:"absolute",
                         transform:[{scale:this.nextCardScale}],opacity:this.nextCardOpacity,
                        }}>
                        <Image
                        source={user.uri}
                        style={{flex:1,borderRadius:10,resizeMode:"cover",overflow:"hidden",width:null,height:null}}></Image>
                        </Animated.View>
                    );
                }
            }
        ).reverse();

    }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.cardPart}>
            {this.renderCards()}

            </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        zIndex:0,
    },
    topPart:{
        position:"absolute",
        top:0,
        height:30,
        width:"100%",
        zIndex:0,

    },
    bottomPart:{
        position:"absolute",
        bottom:0,
        height:30,
        width:"100%",
        zIndex:0,



    },
    cardPart:{
        flex:1,
        marginTop:13,
        zIndex:0,

    }
})