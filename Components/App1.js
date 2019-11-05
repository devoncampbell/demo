import React from "react";
import { View, Text } from "react-native";
import firebase from "firebase";
import { db } from "./config";


class App extends React.Component {
  componentWillMount() {
    // To Configure react native app with cloud of Google Firebase database !

    // To select data from firebase every time data has changed !

    db.ref("users").on("value", data => {
      console.log(data.toJSON());
    });

    // To Await 5 seconds to insert a new user
    setTimeout(() => {
      db.ref("users/004")
        .set({
          name: "Daven",
          age: 20
        })
        .then(() => {
          console.log("INSERTED !");
        })
        .catch(error => {
          console.log(error);
        });
    }, 5000);

    // To Update a user
    firebase;
    db.ref("users/004").update({
      name: "Daven"
    });

    // To Remove a user
    firebase;
    db.ref("users/004").remove();
  }

  render() {
    return (
      <View
        style={{
          alignItems: "center",
          height: "100%",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          CRUD Operations Succeded
        </Text>
      </View>
    );
  }
}

export default App;
