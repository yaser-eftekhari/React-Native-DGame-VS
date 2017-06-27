import React from 'react';
import { Image, View } from 'react-native';
import Button from './common/Button';

const Pictures = () => {
  const { textStyle } = styles;
  return (
    <View style={styles.border}>
      <Button onPress={() => console.log("button 1 pressed.")} style={styles.picContainer}>
        <Image source={require('../images/trust/true/1.jpeg')} />
      </Button>
      <Button onPress={() => console.log("button 2 pressed.")} style={styles.picContainer}>
        <Image source={require('../images/trust/false/1.jpeg')} />
      </Button>
    </View>
  );
};

const styles = {
  border: {
    flex: 4,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  picture: {
    textAlign: 'center',
  },
  picContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
  }
};

export default Pictures;
