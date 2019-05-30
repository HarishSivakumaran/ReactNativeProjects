// @flow
import * as React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import Headers from './Headers';
import Pages from './Pages';
import { SMALL_HEADER_HEIGHT } from './Model';
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

type SectionsProps = {
  sections: Section[],
};

export default class Sections extends React.PureComponent<SectionsProps> {


  constructor(props){
    super(props);

    this.scrollX=new Animated.Value(0);
    this.scrollY=new Animated.Value(0);

   
  }

  render() {
    const { sections } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Headers {...{ sections }}  x={this.scrollX} y={this.scrollY} />
          <Pages {...{ sections} } x={this.scrollX} y={this.scrollY} />
        </View>
        <Animated.ScrollView
        horizontal
        style={StyleSheet.absoluteFill}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={width}
        contentContainerStyle={{width:width*(sections.length)}}
        onScroll={Animated.event([
          {nativeEvent:{
            contentOffset:{
              x:this.scrollX,

            }
          }}
        ],{useNativeDriver:true,})}
        >
        <Animated.ScrollView
        style={StyleSheet.absoluteFill}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        contentContainerStyle={{height:height+height-SMALL_HEADER_HEIGHT,}}
        onScroll={Animated.event([
          {nativeEvent:{
            contentOffset:{
              y:this.scrollY,

            }
          }}
        ],{useNativeDriver:true,})}/>
        </Animated.ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
