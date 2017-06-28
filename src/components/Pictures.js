import React, { Component } from 'react';
import { Image, View } from 'react-native';
import Button from './common/Button';

class Pictures extends Component {
  state = {companyValue: ''};

  constructor(props) {
    super(props);
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
    return (
      <View style={styles.border}>
        {this.getImageName(this.state.companyValue, true)}
        {this.getImageName(this.state.companyValue, false)}
      </View>
    );
  }

  getImageName(value, force) {
    var Sound = require('react-native-sound');
    Sound.setCategory('Playback');
    var clap = new Sound('clap.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });

    var boo = new Sound('boo.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });

    const { imageStyle, picContainer } = styles;
    if(force) {
      previousSelection = Math.random() > 0.5 ? 0 : 1;
    }

    previousSelection = (previousSelection + 1) % 2;

    // Get random number either 1 or 2 (as we only have two pictures now)
    var picIndex = '' + (Math.floor(Math.random() * 2) + 1);

    if(previousSelection == 0) {
      return (
        <Button onPress={() => {clap.play(); this.forceUpdate();}} style={picContainer}>
          <Image style={imageStyle} source={Images[value].true[picIndex]}/>
        </Button>
      );
    } else {
      return (
        <Button onPress={() => {boo.play(); this.forceUpdate();}} style={picContainer}>
          <Image style={imageStyle} source={Images[value].false[picIndex]}/>
        </Button>
      );
    }
  }
}

var previousSelection = 0;

const Images = {
  accountability: {
    true: {
      1: require('../images/accountability/true/1.jpeg'),
      2: require('../images/accountability/true/2.jpeg'),
    },
    false: {
      1: require('../images/accountability/false/1.jpeg'),
      2: require('../images/accountability/false/2.jpeg'),
    },
  },
  trust: {
    true: {
      1: require('../images/trust/true/1.jpeg'),
      2: require('../images/trust/true/2.jpeg'),
    },
    false: {
      1: require('../images/trust/false/1.jpeg'),
      2: require('../images/trust/false/2.jpeg'),
    },
  },
  agility: {
    true: {
      1: require('../images/agility/true/1.jpeg'),
      2: require('../images/agility/true/2.jpeg'),
    },
    false: {
      1: require('../images/agility/false/1.jpeg'),
      2: require('../images/agility/false/2.jpeg'),
    },
  },
  innovation: {
    true: {
      1: require('../images/innovation/true/1.jpeg'),
      2: require('../images/innovation/true/2.jpeg'),
    },
    false: {
      1: require('../images/innovation/false/1.jpeg'),
      2: require('../images/innovation/false/2.jpeg'),
    },
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
