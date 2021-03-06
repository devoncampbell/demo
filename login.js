import React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import firebase from 'firebase';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Audi'
  };

  toLogin = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => console.log(error));
  };

  state = { email: '', password: '' };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.audiLoginImage}
          source={require('../demo/assets/images/audi-login.png')}
        />
        <TextInput
          style={styles.inputPlacement}
          placeholder='Enter Email'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.inputPlacement}
          autoCorrect={false}
          placeholder='Enter Password'
          autoCapitalize='none'
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <View
          style={[
            {
              width: '50%',
              marginLeft: 90,
              marginTop: 20
            }
          ]}
        >
          <Button onPress={this.toLogin} title='Login' color='blue' />
        </View>

        <Text style={styles.signUpText}>Don't have an account? Sign up!</Text>

        <View
          style={[
            {
              width: '50%',
              marginLeft: 90
            }
          ]}
        >
          <Button
            onPress={() => this.props.navigation.navigate('Home')}
            title='Sign Up'
            color='blue'
          />
        </View>
      </View>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    color: 'white',
    flex: 1,
    backgroundColor: 'black'
  },
  inputPlacement: {
    marginLeft: 30,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    padding: 15,
    borderColor: 'white',
    borderBottomWidth: 1,
    width: '80%',
    color: 'white'
  },
  signUpText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 16
  },
  audiLoginImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 330,
    height: 170
  }
});
