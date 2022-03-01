import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CONSTANTS} from '../Utils/Constants';

const TextOne = ({header, subHeader}) => {
  return (
    <View>
      <Text style={[styles.header, {}]}>{header}</Text>
      <Text style={[styles.subHeader]}>{subHeader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: '500',
    fontSize: CONSTANTS.fontSizeDeafault,
    color: '#999197',
    lineHeight: 19,
    marginTop: 5,
  },
  header: {
    fontFamily: 'MontserratAlternates-Medium',
    fontSize: CONSTANTS.fontSizePrimary,
    letterSpacing: 2,
    lineHeight: 30,
    color: 'black',
  },
});

export default TextOne;
