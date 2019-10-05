import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class AboutScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Audi TTRS</Text>
                <Image style={styles.image}
                    source={require('./assets/images/audittrs.jpg')}
                />
                <Text style={styles.text}>The TT RS's 400-hp 2.5-liter five-cylinder engine is unusual and alluring, and it makes a happy triumvirate with the standard Quattro all-wheel drive and snappy seven-speed dual-clutch automatic transmission. Passing power is astonishing: The seven-speed is more than willing to downshift as soon as you demand extra power, and the TT RS surges forward with such immediacy and force that you may think you've been sucked into a wormhole. Careful modulation of the throttle pedal transforms this athlete into a comfortable cruiser.</Text>
            </View>
        );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 200,
      },

    text: {
        color: 'white',
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
    },

    h1: {
        color: 'white',
        fontSize: 50,
    },
});