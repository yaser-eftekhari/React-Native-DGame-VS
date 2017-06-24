import React from 'react';
import { Text, View } from 'react-native';

const Rule = (props) => {
  const { textStyle } = styles;
  return (
    <View style={props.look}>
      <Text style={textStyle}> Rules: </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 15
  }
};

export default Rule;
