import React from 'react';
import { Image, View } from 'react-native';
import Button from './common/Button';

const Pictures = () => {
  const { textStyle } = styles;
  return (
    <View style={styles.border}>
      <Button onPress={() => console.log("button 1 pressed.")} style={styles.picContainer}>
        {getImageName(0, companyValue)}
      </Button>
      <Button onPress={() => console.log("button 2 pressed.")} style={styles.picContainer}>
        {getImageName(1, companyValue)}
      </Button>
    </View>
  );
};

function getImageName(flag, value) {
  if(value == 'trust') {
    if(flag == 0) {
      return <Image resizeMode='stretch' source={Images.trust.true}/>
    } else {
      return <Image resizeMode='stretch' source={Images.trust.false}/>
    }
  } else if(value == 'accountability') {
    if(flag == 0) {
      return <Image source={Images.accountability.true}/>
    } else {
      return <Image source={Images.accountability.false}/>
    }
  } else if(value == 'agility') {
    if(flag == 0) {
      return <Image source={Images.agility.true}/>
    } else {
      return <Image source={Images.agility.false}/>
    }
  } else if(value == 'innovation') {
    if(flag == 0) {
      return <Image source={Images.innovation.true}/>
    } else {
      return <Image source={Images.innovation.false}/>
    }
  }
}
const companyValue = 'trust';
const Images = {
  accountability: {
    true: require('../images/accountability/true/1.jpeg'),
    false: require('../images/accountability/false/1.jpeg'),
  },
  trust: {
    true: require('../images/trust/true/1.jpeg'),
    false: require('../images/trust/false/1.jpeg'),
  },
  agility: {
    true: require('../images/agility/true/1.jpeg'),
    false: require('../images/agility/false/1.jpeg'),
  },
  innovation: {
    true: require('../images/innovation/true/1.jpeg'),
    false: require('../images/innovation/false/1.jpeg'),
  },
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
