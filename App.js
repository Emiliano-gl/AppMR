import React, { Component } from "react";
import { Font, AppLoading } from "expo";
import { Ionicons } from "@expo/vector-icons";
import AppContainer from "./Router";

export default class App extends Component {
  state = { loading: true };

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return <AppContainer />;
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ loading: false });
  }
}
