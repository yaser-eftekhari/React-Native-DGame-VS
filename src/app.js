import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Languages from './components/Language';
import Value from './components/Value';
import Rule from './components/Rule';
import Pictures from './components/Pictures';

class App  extends Component {

  constructor(props) {
    super(props);
    this.state = {
      companyValue: 'accountability',
      language: 'EN',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Rule look={styles.border}/>
        <Languages callback={this.languageCallback} />
        <Value callback={this.valueCallback} language={this.state.language}/>
        <Pictures companyValue={this.state.companyValue} style={styles.pictures}/>
      </View>
    );
  }

  valueCallback = (data) => {
    this.state = {
      companyValue: data,
      language: this.state.language
    };
    this.forceUpdate();
  }

  languageCallback = (data) => {
    this.state = {
      companyValue: this.state.companyValue,
      language: data
    };
    this.forceUpdate();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  border: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
});

export default App;
