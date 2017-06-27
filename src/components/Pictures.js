import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './common/Button';
import clapSoubd from '../sounds/clap.mp3';
import booSoubd from '../sounds/boo.mp3';
class Pictures extends Component {
  state = {companyValue: ''};

  constructor(props) {
    super(props);
    console.log("constructor of Pictures called.");
    console.log("parameter passed in is: " + props.companyValue);
    this.state = {
      companyValue: props.companyValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      companyValue: nextProps.companyValue,
    });
  }

  render() {
    console.log("inside render in Pictures, state is " + this.props.companyValue);
    return (
      <View style={styles.border}>
        {getImageName(this.state.companyValue, true)}
        {getImageName(this.state.companyValue, false)}
      </View>
    );
  }
}

function getImageName(value, force) {
  var Sound = require('react-native-sound');
  Sound.setCategory('Playback');
  var clap = new Sound(clapSoubd, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  var boo = new Sound(booSoubd, Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });
  console.log("getImageName accessed " + value);
  const { imageStyle, picContainer } = styles;
  if(force) {
    previousSelection = Math.random() > 0.5 ? 0 : 1;
  }

  previousSelection = (previousSelection + 1) % 2;

  if(previousSelection == 0) {
    return (
      <Button onPress={() => clap.play()} style={picContainer}>
        <Image style={imageStyle} source={Images[value].true}/>
      </Button>
    );
  } else {
    return (
      <Button onPress={() => boo.play()} style={picContainer}>
        <Image style={imageStyle} source={Images[value].false}/>
      </Button>
    );
  }
}

var previousSelection = 0;
const correctSelection = 'Pressed the correct button';
const wrongSelection = 'Pressed the wrong button';

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
  },
  imageStyle: {
    width: null,
    resizeMode: 'contain'
  }
};

export default Pictures;
