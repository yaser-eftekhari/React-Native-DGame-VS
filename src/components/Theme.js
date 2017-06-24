import React from 'react';
import { Text, View } from 'react-native';

const Theme = (props) => {
  const { textStyle } = styles;
  return (
    <View style={props.look}>
      <Text style={textStyle}> Theme </Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};

export default Theme;
