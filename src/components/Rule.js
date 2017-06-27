import React from 'react';
import { Text, View } from 'react-native';

const Rule = (props) => {
  const { textStyle } = styles;
  return (
    <View style={props.look}>
      <Text style={textStyle}> Rule: Select the picture that best describes the value in a positive way. </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 15
  }
};

export default Rule;
