import React, { Component } from "react";
import { Header, Left, Right, Icon, Button, Body, Title } from "native-base";

export default class NavBar extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Header
        androidStatusBarColor="#0f0f0f"
        style={{ backgroundColor: "#212121" }}
      >
        <Left>
          <Button transparent onPress={() => navigation.openDrawer()}>
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
