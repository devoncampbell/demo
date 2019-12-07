import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image}
          source={require('../demo/assets/images/audihome.jpg')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    margin: 4,
  },
  image: {
    width: '100%',
    height: 850,
  },
  ScrollView: {
    marginHorizontal: 20,
  },
});