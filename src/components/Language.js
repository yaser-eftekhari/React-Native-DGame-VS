import React from 'react';
import { Text, View } from 'react-native';

const Language = (props) => {
  const { textStyle } = styles;
  return (
    <View style={props.look}>
      <Text style={textStyle}> Languages </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 15
  }
};

export default Language;
