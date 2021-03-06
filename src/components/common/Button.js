import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress, children }) => {
  // const { buttonStyle, textStyle } = styles;
  const { buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
        {children}
    </TouchableOpacity>
  );
};

const styles = {
  // textStyle: {
  //   alignSelf: 'center',
  //   color: '#007aff',
  //   fontSize: 16,
  //   fontWeight: '600',
  //   paddingTop: 10,
  //   paddingBottom: 10
  // },
  buttonStyle: {
    flex: 1,
    alignSelf: 'center',
    backgroundColor: 'powderblue',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default Button;
