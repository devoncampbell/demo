import React from 'react';
import { Text, View, Button, Image, Animated, StyleSheet } from 'react-native';

class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  account = new Animated.Value(0);
  experience = new Animated.Value(0);
  notifications = new Animated.Value(0);
  sync = new Animated.Value(0);
  feedback = new Animated.Value(0);
  help = new Animated.Value(0);

  componentDidMount() {
    Animated.timing(this.account, {
      duration: 500,
      toValue: 1
    }).start();

    Animated.timing(this.experience, {
      duration: 500,
      toValue: 1,
      delay: 500
    }).start();

    Animated.timing(this.notifications, {
      duration: 500,
      toValue: 1,
      delay: 800
    }).start();

    Animated.timing(this.sync, {
      duration: 500,
      toValue: 1,
      delay: 1100
    }).start();

    Animated.timing(this.feedback, {
      duration: 500,
      toValue: 1,
      delay: 1400
    }).start();

    Animated.timing(this.help, {
      duration: 500,
      toValue: 1,
      delay: 1700
    }).start();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Account Animation */}
        <Animated.Text
          style={{
            ...styles.settingName,
            transform: [
              {
                translateX: this.account.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.account
          }}
        >
          
          Account
        </Animated.Text>

        <Animated.Text
          style={{
            ...styles.borderStyle,
            transform: [
              {
                translateX: this.account.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.account
          }}
        >
          Tell us about yourself.
        </Animated.Text>
        {/* Account Animation End */}

        {/* Experience Animation */}
        <Animated.Text
          style={{
            ...styles.settingName,
            transform: [
              {
                translateX: this.experience.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.experience
          }}
        >
          
          Experience
        </Animated.Text>

        <Animated.Text
          style={{
            ...styles.borderStyle,
            transform: [
              {
                translateX: this.experience.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.experience
          }}
        >
          What's your knowledge?
        </Animated.Text>
        {/* Experience Animation End */}

        {/* Notification Animation */}
        <Animated.Text
          style={{
            ...styles.settingName,
            transform: [
              {
                translateX: this.notifications.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.notifications
          }}
        >
          
          Notifications
        </Animated.Text>

        <Animated.Text
          style={{
            ...styles.borderStyle,
            transform: [
              {
                translateX: this.notifications.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.notifications
          }}
        >
          Customize it to your liking.
        </Animated.Text>
        {/* Notification Animation End */}

        {/* Sync Animation */}
        <Animated.Text
          style={{
            ...styles.settingName,
            transform: [
              {
                translateX: this.sync.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.sync
          }}
        >
          
          Sync
        </Animated.Text>
        <Animated.Text
          style={{
            ...styles.borderStyle,
            transform: [
              {
                translateX: this.sync.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.sync
          }}
        >
          Constant syncing. Less worries.
        </Animated.Text>
        {/* Sync Animation End */}

        {/* Feedback Animation */}
        <Animated.Text
          style={{
            ...styles.settingName,
            transform: [
              {
                translateX: this.feedback.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.feedback
          }}
        >
          
          Feedback
        </Animated.Text>

        <Animated.Text
          style={{
            ...styles.borderStyle,
            transform: [
              {
                translateX: this.feedback.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.feedback
          }}
        >
          You can make our services improve.
        </Animated.Text>
        {/* Feedback Animation End */}

        {/* Help Animation */}
        <Animated.Text
          style={{
            ...styles.settingName,
            transform: [
              {
                translateX: this.help.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.help
          }}
        >
          
          Help &amp; Support
        </Animated.Text>

        <Animated.Text
          style={{
            ...styles.borderStyle,
            transform: [
              {
                translateX: this.help.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-80, 0]
                })
              }
            ],
            opacity: this.help
          }}
        >
          We're here to assist you in any way.
        </Animated.Text>
        {/* Help Animation End */}

        <Button
            onPress={() => this.props.navigation.navigate('SignUp')}
            title='Logout'
            color='blue'
          />
      </View>

    );
  }
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 40
  },
  borderStyle: {
    paddingLeft: 15,
    color: 'white',
    fontSize: 19,
    borderColor: 'white',
    borderBottomWidth: 0.2,
    marginBottom: 20,
    marginTop: 10
  },
  imageSizing: {
    width: 25,
    height: 25
  },
  settingName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 27,
    paddingLeft: 15
  }
});
