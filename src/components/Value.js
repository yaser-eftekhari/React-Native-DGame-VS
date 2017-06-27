import React from 'react';
import { Text, View } from 'react-native';

const Value = (props) => {
  const { textStyle } = styles;
  return (
    <View style={props.look}>
      <Text style={textStyle}> Value </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

export default Value;
