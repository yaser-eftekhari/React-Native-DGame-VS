import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Languages from './components/Language';
import Theme from './components/Theme';
import Rule from './components/Rule';
import Pictures from './components/Pictures';

const App = () => (
  <View style={styles.container}>
    <Languages look={styles.border}/>
    <Theme look={styles.border}/>
    <Rule look={styles.border}/>
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

export default App;
