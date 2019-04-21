import React,{Component} from "react";
import {View,StyleSheet,Dimensions,Animated,ScrollView} from "react-native";
import {Svg} from "expo";
import * as Shape from "d3-shape";
import * as SvgPathProps from "svg-path-properties";
import {scaleTime,scaleLinear,scaleQuantile} from "d3-scale";
import {} from "../../App";


const chartData =[
    { x: new Date(2018, 9, 1), y: 0 },
    { x: new Date(2018, 9, 16), y: 0 },
    { x: new Date(2018, 9, 17), y: 200 },
    { x: new Date(2018, 10, 1), y: 200 },
    { x: new Date(2018, 10, 2), y: 300 },
    { x: new Date(2018, 10, 5), y: 300 },

  ];

export const chartHeight = 200;
export const width = Dimensions.get("window").width;

const {Path,LinearGradient,Stop} = Svg;
const d3 = {Shape};



var scaleX = scaleTime().domain([chartData[0].x,chartData[chartData.length-1].x])
                        .range([0,width]);

var scaleY = scaleLinear().domain([chartData[0].y,chartData[chartData.length-1].y])
                          .range([chartHeight,0])                         

var lineMethod = d3.Shape.line()
                         .x(d=>scaleX(d.x))
                         .y(d=>scaleY(d.y))
                         .curve(d3.Shape.curveBasis) ;  

 const line = lineMethod(chartData) ;                        

 var properties = SvgPathProps.svgPathProperties(line);

 var lineLength = properties.getTotalLength()

 console.log(lineLength +"f" + width);
 



export default class Chart extends Component{

    constructor(props){
        super(props);

        this.cursor = React.createRef();

        this.scrollX = new Animated.Value(0);
    }

    componentWillMount(){
        // u can only add a listener only for some like navigation , animated value etc... not for any variable
        this.scrollX.addListener(({value})=>{this.movecusor(value)})
    }

    movecusor=(value)=>{

        var {x,y} = properties.getPointAtLength(lineLength-value);


        this.cursor.current.setNativeProps({top:y-10,left:x-10});



    }

    render(){

        return(
            <View style={styles.container}>
            <Svg
            style={{height:chartHeight,width:width,}}
            >
            <LinearGradient id="lgrad" x1="0%" y1="100%" y2="0%">
            <Stop offset="30%" stopColor="#fff" />
            <Stop offset="100%" stopColor="#ff0" />
        </LinearGradient>
            <Path d={`${line} L ${width} ${chartHeight}  L ${0} ${chartHeight}`} fill="url(#lgrad)"></Path>
            <Path d={line} fill="transparent" stroke="#DFAF2B" strokeWidth={4}></Path>
            </Svg>

            <Animated.ScrollView
            horizontal
            contentContainerStyle={{width:2*lineLength}}
            showsHorizontalScrollIndicator={false}
          style={StyleSheet.absoluteFill}
            scrollEventThrottle={16}
            onScroll={Animated.event([
                {
                    nativeEvent:{
                        contentOffset:{
                            x:this.scrollX
                        }
                    }
                }
            ],{
                useNativeDriver:true,
            })}
            ></Animated.ScrollView>
            <Animated.View 
            ref={this.cursor}
            style={{position:"absolute",height:20,width:20,borderRadius:25,borderWidth:4,borderColor:"#DFAF2B",backgroundColor:"#FFF",}}></Animated.View>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container:{
flex:1,
        marginTop:20,


        
    }

})