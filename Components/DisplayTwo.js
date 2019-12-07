import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity
} from "react-native";
import firebase from "firebase";
import { Button, Card, Title, Paragraph } from "react-native-paper";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayy: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../audi.jpg")} />
        <Text>Audi A4</Text>

        <Card style={{ width: "40%", height: "10%" }}>
          <Text>Milage</Text>
          <Text>40,000kms</Text>

          <Card style={{ width: "100%", height: "80%", marginLeft: "120%" }}>
            <Text>Gas</Text>
            <Text>54%</Text>
          </Card>
        </Card>

        <Card style={{ width: "40%", height: "10%" }}>
          <Text>Next Service</Text>
          <Text>3000kms</Text>

          <Card style={{ width: "100%", height: "80%", marginLeft: "120%" }}>
            <Text>Price:$85,000</Text>
          </Card>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default Display;
