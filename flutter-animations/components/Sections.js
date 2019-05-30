// @flow
import * as React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';

import Headers from './Headers';
import Pages from './Pages';
import { SMALL_HEADER_HEIGHT } from './Model';

const { width, height } = Dimensions.get('window');

type SectionsProps = {
  sections: Section[],
};

export default class Sections extends React.PureComponent<SectionsProps> {
  render() {
    const { sections } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Headers {...{ sections }} />
          <Pages {...{ sections }} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
