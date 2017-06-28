import React from 'react';
import { Text, View } from 'react-native';
import Button from './common/Button';

const Language = (props) => {
  const { textStyle } = styles;
  return (
    <View style={styles.border}>
      <View style={styles.langContainer}>
        <Text style={styles.textStyle2}> Languages </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={{backgroundColor: 'powderblue'}} onPress={() => props.callback('EN')}>
           <Text style={textStyle}> EN </Text>
        </Button>
        <Button style={{backgroundColor: 'powderblue'}} onPress={() => props.callback('FR')}>
           <Text style={textStyle}> FR </Text>
        </Button>
        <Button style={{backgroundColor: 'powderblue'}} onPress={() => props.callback('NL')}>
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
  textStyle2: {
    fontSize: 15,
    alignSelf: 'center'
  },
  langContainer: {
    flex: 2,
    alignItems: 'center',
    elevation: 2,
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonContainer:{
    flex: 5,
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
