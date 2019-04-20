import React from 'react';
import { StyleSheet, Text, View ,Dimensions,Animated,ScrollView} from 'react-native';
import {Svg} from "expo";
import * as shape from 'd3-shape';//yarn add d3
import {scaleLinear,scaleTime} from "d3-scale";
import * as pathProps from "svg-path-properties"

const {Path,Defs,LinearGradient,Stop} = Svg;

const d3 ={shape};

const topPadding = 15;





const height=300;
const width = Dimensions.get("window").width;


const data = [
  { x: new Date(2018, 9, 1), y: 0 },
  { x: new Date(2018, 9, 16), y: 0 },
  { x: new Date(2018, 9, 17), y: 200 },
  { x: new Date(2018, 10, 1), y: 200 },
  { x: new Date(2018, 10, 2), y: 300 },
  { x: new Date(2018, 10, 5), y: 300 },
];

var scaleX = scaleTime().domain([new Date(2018, 9, 1), new Date(2018, 10, 5)]).range([0,width]);
var scaleY = scaleLinear().domain([0,300]).range([height-topPadding,topPadding]);

const lineMethod = d3.shape.line().x((d)=>scaleX(d.x)).y((d)=>scaleY(d.y)).curve(d3.shape.curveBasis);

const line = lineMethod(data);

const properties = pathProps.svgPathProperties(line);
var lineLength = properties.getTotalLength();



export default class App extends React.Component {

  constructor(props){
    super(props);
    this.xScroll = new Animated.Value(0);
    this.cursor = React.createRef();

  }

  componentWillMount(){
    
    this.xScroll.addListener(({value})=>{ this.moveCursor(value) })
  }

  moveCursor=(value)=>{

    var {x,y} = properties.getPointAtLength(lineLength-value);    

    this.cursor.current.setNativeProps({top:y-15,left:x-15})

  }


  render() {
    return (
      <View style={styles.container}>
      <Svg style={{height:height,width:width}}>
      
    <LinearGradient id="gradient" gradientUnits="userSpaceOnUse"
    x1="314.89" y1="111.08" x2="316.32" y2="280.13">
        <Stop offset="0%" stopColor="#15fffd" />
        <Stop offset="100%" stopColor="#fff" />
    </LinearGradient>
      <Path d={line} strokeWidth={4} fill="transparent" stroke="#53E0BC"></Path>
      <Path d={`${line} L ${width} ${height} L ${0} ${height}`}  fill="url(#gradient)" ></Path>

      </Svg>
      <Animated.View
      ref={this.cursor}
       style={{position:"absolute",height:30,width:30,borderRadius:20,borderWidth:4,borderColor:"#53E0BC",backgroundColor:"#FFF"}}></Animated.View>
    
       <Animated.ScrollView
            style={StyleSheet.absoluteFill}
            contentContainerStyle={{ width: lineLength * 2 }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x:this.xScroll },
                  },
                },
              ],
              { useNativeDriver: true },
            )}
            horizontal
          />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:25,
   flex:1,
  
  },
});
