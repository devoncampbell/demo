import React from "react";
import { View, Text, TextInput } from "react-native";
import firebase from "firebase";
import { Button } from "react-native";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";

import Display from "./Components/Display";
import { db } from "./Components/config";

import VisualAudioScreen from "./Components/Display";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", vehiclenumber: "", type: "" };

    this.onPressLearnMore.bind(this);
    this.onPressLearnUpdate.bind(this);
  }

   componentWillMount() {
     // To Configure react native app with cloud of Google Firebase database !

     // To select data from firebase every time data has changed !
     firebase
       .database()
       .ref("users")
       .on("value", data => {
         console.log(data.toJSON());
       });

     // To Await 5 seconds to insert a new user
     setTimeout(() => {
       db.ref("users/004")
         .set({
           name: "Dev Camp 004",
           age: 20
         })
         .then(() => {
           console.log("INSERTED !");
         })
         .catch(error => {
           console.log(error);
         });
     }, 5000);

     // To Update a user in Database
     db.ref("users/004").update({
       name: "Dev Camp"
     });

     // To Remove a user in Database
     db.ref("users/004").remove();
   }

  onPressLearnMore = () => {
    // console.log("omi" + this.state.name);
    db.ref("users/004")
      .set({
        // Log info to database in certain field
        name: this.state.name,
        vehiclenumber: this.state.vehiclenumber,
        Service: this.state.type
      })
      // show in console
      .then(() => {
        console.log("INSERTED !");
      })
      // if not, show error
      .catch(error => {
        console.log(error);
      });
  };

  onPressLearnUpdate = () => {
    db.ref("users/004")
      .update({
        name: this.state.name,
        vehiclenumber: this.state.vehiclenumber,
        Service: this.state.type
      })
      .then(() => {
        console.log("Updated !");
      })
      .catch(error => {
        console.log(error);
      });
  };

  onPressLearnRemove() {
    console.log("remove");
    db.ref("users/004").remove();
  }
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >

        {/* Specify Your Name */}
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Enter Your Name
        </Text>
        <TextInput
          style={{
            height: 30,
            width: 150,
            borderColor: "white",
            borderWidth: 1,
          }}
          placeholder="Enter Here"
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
        />

        {/* Specify License Plate */}
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Enter License Plate Number
        </Text>
        <TextInput
          style={{
            height: 30,
            width: 150,
            borderColor: "white",
            borderWidth: 1
          }}
          placeholder="Enter Here"
          onChangeText={vehiclenumber => this.setState({ vehiclenumber })}
          value={this.state.vehiclenumber}
        />

        {/* Specify What Service */}
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Type of Service
        </Text>
        <TextInput
          style={{
            height: 30,
            width: 150,
            borderColor: "white",
            borderWidth: 1
          }}
          placeholder="Enter Here"
          onChangeText={type => this.setState({ type })}
          value={this.state.type}
        />
        <View>
          <Button
            onPress={this.onPressLearnMore(this)}
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View>
          <Button onPress={this.onPressLearnUpdate(this)} title="Update" />
        </View>
      </View>
    );
  }
}

// Nav Bar For Booking Screen
const TabNavigator = createBottomTabNavigator({
  Service: { screen: App },

  Home: { screen: Display }
});

export default createAppContainer(TabNavigator);