// @flow
import * as React from 'react';
import { View, Dimensions } from 'react-native';

import {
  type Section, SMALL_HEADER_HEIGHT, MEDIUM_HEADER_HEIGHT, PADDING, CURSOR_WIDTH,
} from './Model';
import Header from './Header';
import Label from './Label';
import Cursor from './Cursor';

type HeadersProps = {
  sections: Section[],
};

const backgroundColor = '#343761';
const { width, height } = Dimensions.get('window');

export default class Headers extends React.PureComponent<HeadersProps> {
  render() {
    const { sections } = this.props;
    const FULL_HEADER_HEIGHT = height / sections.length;
    return (
      <View style={{ height, width: sections.length * width, backgroundColor }}>
        {
          sections.map((section, key) => (
            <View
              style={{
                position: 'absolute', top: key * FULL_HEADER_HEIGHT, left: 0, height: FULL_HEADER_HEIGHT,
              }}
              {...{ key }}
            >
              <Header index={key} {...{ section }} />
            </View>
          ))
        }
      </View>
    );
  }
}
