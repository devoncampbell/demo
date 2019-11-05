import React from "react";
import { View, Text, TextInput } from "react-native";
import firebase from "firebase";
import { db } from "./config";
import { Button, Card, Title, Paragraph } from "react-native-paper";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayy: "" };
  }
  componentWillMount() {
    db.ref("users/004").on("value", data => {
      var data = JSON.stringify(data);
      var myArr = JSON.parse(data);

      this.setState({ displayy: myArr });
    });
  }

  render() {
    return (
      <View
        style={{
          
        }}
      >
        <Card>
          <Card.Cover source={{ uri: "https://picsum.photos/800" }} />

          <Card.Content>
            <Title>
              Service: {this.state.displayy["Service"]}{"\n"}
              Name: {this.state.displayy["name"]}{"\n"}
              VehicleNumber: {this.state.displayy["vehiclenumber"]}{"\n"}
            </Title>
          </Card.Content>
        </Card>
      </View>
    );
  }
}
export default Display;
