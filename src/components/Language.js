import React from 'react';
import { Text, View } from 'react-native';
import Button from './common/Button';

const Language = (props) => {
  const { textStyle } = styles;
  return (
    
    <View style={styles.border}>
      <View style={styles.langContainer}>
        <Text style={textStyle}> Languages </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={{backgroundColor: 'powderblue'}}>
           <Text style={textStyle}> EN </Text>
        </Button>
        <Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
           <Text style={textStyle}> FR </Text>
        </Button>
        <Button style={{backgroundColor: 'powderblue'}}>
           <Text style={textStyle}> NL </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 12,
    alignSelf: 'center'
  },
  langContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  border:{
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center'
  }



};

export default Language;
