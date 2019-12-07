import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image style={styles.image}
          source={require('../demo/assets/images/audirs3.jpg')}
        />
        <Text style={styles.title}>Audi RS3</Text>
        <Image style={styles.image}
          source={require('../demo/assets/images/audirs4.jpeg')}
        />
        <Text style={styles.title}>Audi RS4</Text>
        <Image style={styles.image}
          source={require('../demo/assets/images/audirs5.jpg')}
        />
        <Text style={styles.title}>Audi RS5</Text>
        <Image style={styles.image}
          source={require('../demo/assets/images/audirs6.jpg')}
        />
        <Text style={styles.title}>Audi RS6</Text>
        <Image style={styles.image}
          source={require('../demo/assets/images/audirs7.jpg')}
        />
        <Text style={styles.title}>Audi RS7</Text><
          Image style={styles.image}
          source={require('../demo/assets/images/audittrs.jpg')}
        />
        <Text style={styles.title}>Audi TTRS</Text>
        <Image style={styles.image}
          source={require('../demo/assets/images/audir8.jpg')}
        />
        <Text style={styles.title}>Audi R8</Text>
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
    height: 200,
  },
  ScrollView: {
    marginHorizontal: 20,
  },
});