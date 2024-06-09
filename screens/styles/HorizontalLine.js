import React from 'react';
import { View, StyleSheet } from 'react-native';
import { w } from './responsive';

const HorizontalLine = ({ width = '90%', color = 'gray', thickness = .5, marginVertical = w(10) }) => {
  return <View style={[styles.line, { width, backgroundColor: color, height: thickness, marginVertical }]} />;
};

const styles = StyleSheet.create({
  line: {
    alignSelf: 'center',
    flex:1,
    flexDirection:'column'
  }

});

export default HorizontalLine;