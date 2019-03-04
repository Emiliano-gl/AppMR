import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Text } from "native-base";
import NavBar from "../components/NavBar";

export default class HomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />
        <View style={styles.container}>
          <Text> Home screen </Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
