/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Languages from './src/components/Language';
import Theme from './src/components/Theme';
import Rule from './src/components/Rule';
import Pictures from './src/components/Pictures';
import Button from './src/components/Button';

const dgame_vs = () => (
  <View style={styles.container}>
    <Languages look={styles.border}/>
    <Theme look={styles.border}/>
    <Rule look={styles.border}/>
    <Button look={styles.border}/>
    <Pictures style={styles.pictures}/>
  </View>
);

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

AppRegistry.registerComponent('dgame_vs', () => dgame_vs);
