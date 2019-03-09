import React, { Component } from "react";
import {
  Container,
  Text,
  Content,
  Item,
  Input,
  Button,
  Label,
  H1,
  Card,
  CardItem
} from "native-base";
import NavBar from "../components/NavBar";
import { Keyboard } from "react-native";

export default class AnioBisiesto extends Component {
  state = {
    year: 0,
    bisiest: false
  };

  calculateYear = () => {
    let year = parseInt(this.state.year);
    Keyboard.dismiss();

    if (year % 4 == 0 && year % 100 > 0 && year % 400 > 0) {
      this.setState({ bisiest: true });
      return;
    } else {
      this.setState({ bisiest: false });
      return;
    }
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Año bisiesto</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Año</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ year: num })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                info
                androidRippleColor
                onPress={() => this.calculateYear()}
              >
                <Text>Berificar</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>{this.state.bisiest ? "Bisiesto" : "No Bisiesto"}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
