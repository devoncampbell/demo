import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Audi R8</Text>
                <Image style={styles.image}
                    source={require('./assets/images/audir8.jpg')}
                />
                <Text style={styles.text}>The R8's V-10 engine is offered in two strengths, both potent enough to knock the wind out of unsuspecting passengers and both capable of searing your eardrums with their otherworldly exhalations. The R8's seven-speed dual-clutch automatic isn't exactly the smoothest gearbox and occasionally it downshifts too abruptly and perhaps too deeply, causing neck-snapping acceleration followed by an almost immediate upshift to a higher gear. The base R8 comes standard with an adaptive suspension, while Performance models are fitted with a more aggressive, fixed-damper setup. Both soak up bumps admirably and provide a comfortable ride that you could tolerate without fatigue on long trips. The R8's supple nature comes with a drawback, however: In full-attack mode, it simply doesn't handle corners as confidently as its rivals, and sometimes it feels more unsettled than you'd expect from a supercar. The standard steering setup is direct and relays information from the road to the driver's hands with only a mild filter.</Text>
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