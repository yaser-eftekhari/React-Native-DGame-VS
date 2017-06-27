import React, { Component } from 'react';
import { Text, View, Picker, StyleSheet} from 'react-native';

class Value extends Component {

  state = { language: [] };

  render(){
    return (
            <Picker
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => {
                  this.props.callback(itemValue);
                  this.setState({language: itemValue})
                }
              }>
              <Picker.Item label="Accountability" value="accountability" />
              <Picker.Item label="Agility" value="agility" />
              <Picker.Item label="Innovation" value="innovation" />
              <Picker.Item label="Trust" value="trust" />
            </Picker>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
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
  border:{
    flex: 1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center'
  },
  pickerContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})

export default Value;
