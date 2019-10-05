import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { withOrientation } from 'react-navigation';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Audi RS3</Text>
                <Image style={styles.image}
                    source={require('./assets/images/audirs3.jpg')}
                />
                <Text style={styles.text}>With a 400-hp turbocharged 2.5-liter five-cylinder under the hood, this small sports sedan has the muscle to back up its menacing appearance. It boasts a redline of 6900 rpm, and the rip of its distinctive exhaust note sounds amazing the whole way there. A seven-speed dual-clutch automatic transmission routes torque to all four wheels; in our testing, the RS3 hit 60 mph in 3.5 seconds. The Audi's most direct competitor is the Mercedes-AMG CLA45—a similarly nimble four-door with almost the same footprint—but managed a slightly slower 3.8-second run to 60 mph. The BMW M2, although only offered as a two-door coupe, is also a decent analogue to the RS3, but it needed 4.0 seconds to reach 60 mph in our testing. The RS3 feels razor-sharp, with responsive steering and an agile suspension. Its ride can be rough over pockmarked pavement—especially with the optional sport suspension—but if you're looking to maximize the RS3's fun potential, it tightens things up so you can really throw down.</Text>
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