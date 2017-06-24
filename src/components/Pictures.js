import React from 'react';
import { Text, View } from 'react-native';

const Pictures = () => {
  const { textStyle } = styles;
  return (
    <View style={styles.border}>
      <View style={styles.picContainer}>
        <Text style={styles.picture}> Picture 1 </Text>
      </View>
      <View style={styles.picContainer}>
        <Text style={styles.picture}> Picture 2 </Text>
      </View>
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
