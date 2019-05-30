// @flow
import * as React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { CURSOR_WIDTH } from './Model';

type CursorProps = {
};

const { width } = Dimensions.get('window');

export default class Cursor extends React.PureComponent<CursorProps> {
  render() {
    return (
        <View style={styles.cursor} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursor: {
    width: 20,
    backgroundColor: 'white',
    height:2
  },
});
