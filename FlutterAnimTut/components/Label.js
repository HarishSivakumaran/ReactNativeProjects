// @flow
import * as React from 'react';
import {
  StyleSheet, Platform, Dimensions, View, Text,
} from 'react-native';

import {
  SMALL_HEADER_HEIGHT, MEDIUM_HEADER_HEIGHT, PADDING, type Section,
} from './Model';


type LabelProps = {
  section: Section,
  index: number,
};

const { width, height } = Dimensions.get('window');
// Character width is 19.3 on iOS and 19 on Android
const charWidth = Platform.OS === 'ios' ? 19.3 : 19;
const fontSize = 32;
const fontFamily = Platform.OS === 'ios' ? 'Menlo' : 'monospace';

export default class Label extends React.PureComponent<LabelProps> {
  render() {
    const {
      index, section,
    } = this.props;
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{section.title.toUpperCase()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: PADDING,
    justifyContent: 'center',
  },
  label: {
    color: 'white',
    textAlign: 'center',
    fontSize,
    fontFamily,
  },
});
