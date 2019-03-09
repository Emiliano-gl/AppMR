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

export default class DiasMinutos extends Component {
  state = {
    days: 0,
    res: 0
  };

  convertDays = () => {
    let days = this.state.days;
    let minutes = days * 1440;
    Keyboard.dismiss();
    this.setState({ res: minutes });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Días a minutos</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Días a convertir</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={val => this.setState({ days: val })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                info
                androidRippleColor
                onPress={() => this.convertDays()}
              >
                <Text>Convertir</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Minutos: {this.state.res}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
