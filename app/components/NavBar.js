import React, { Component } from "react";
import { Keyboard } from "react-native";
import { Header, Left, Right, Icon, Button, Body, Title } from "native-base";

export default class NavBar extends Component {
  navigationBar = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
    Keyboard.dismiss();
  };

  render() {
    return (
      <Header
        androidStatusBarColor="#0f0f0f"
        style={{ backgroundColor: "#212121" }}
      >
        <Left>
          <Button
            transparent
            androidRippleColor
            onPress={() => this.navigationBar()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>AppMR</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
