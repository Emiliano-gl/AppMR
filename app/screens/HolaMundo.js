import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, H1 } from "native-base";
import NavBar from "../components/NavBar";

export default class HolaMundo extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />
        <View style={styles.container}>
          <H1 style={{textAlign: "center"}}>Hola mundo</H1>
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
