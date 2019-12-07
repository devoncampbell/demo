import React from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import firebase from 'firebase';

class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up'
  };

  toSignUp = () => {
    if (this.state.password.length < 6) {
      alert('Please enter more than 6 characters.');
    } else {
      const { email, password } = this.state;
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Home'))
        .catch(error => console.log(error));
    }
  };

  state = {
    email: '',
    password: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.audiSignUpImage}
          source={require('../demo/assets/images/audi-signup.png')}
        />
        <TextInput
          style={styles.inputPlacement}
          placeholder='Enter Email'
          placeholderTextColor="white"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCapitalize='none'
        />

        <TextInput
          style={styles.inputPlacement}
          autoCorrect={false}
          placeholder='Enter Password'
          placeholderTextColor="white"
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
              marginTop: 20,
              color: "white",
            }
          ]}
        >
          <Button onPress={this.toSignUp} title='Sign Up' color='blue' />
        </View>

        <Text style={styles.loginText}>Already have an account? Login</Text>

        <View
          style={[
            {
              width: '50%',
              marginLeft: 90,
              color: "white",
            }
          ]}
        >
          <Button
            onPress={() => this.props.navigation.navigate('Login')}
            title='Login'
            color='blue'
          />
        </View>
      </View>
    );
  }
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    color: 'white',
    flex: 1,
    backgroundColor: 'black',
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
  loginText: {
    color: 'white',
    textAlign: 'center',
    paddingTop: 20,
    paddingBottom: 5,
    fontSize: 16
  },
  audiSignUpImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 330,
    height: 160
  }
});
