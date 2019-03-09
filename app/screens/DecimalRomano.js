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

export default class DecimalRomano extends Component {
  state = {
    number: 0,
    roman: ""
  };

  convertDecRoman = () => {
    let num = parseInt(this.state.number);
    Keyboard.dismiss();

    if (!+num) return false;
    let digits = String(+num).split(""),
      key = [
        "",
        "C",
        "CC",
        "CCC",
        "CD",
        "D",
        "DC",
        "DCC",
        "DCCC",
        "CM",
        "",
        "X",
        "XX",
        "XXX",
        "XL",
        "L",
        "LX",
        "LXX",
        "LXXX",
        "XC",
        "",
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX"
      ],
      roman = "",
      i = 3;
    while (i--) roman = (key[+digits.pop() + i * 10] || "") + roman;

    let romanos = Array(+digits.join("") + 1).join("M") + roman;

    this.setState({ roman: romanos });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Decimal a Romano</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ number: num })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                info
                androidRippleColor
                onPress={() => this.convertDecRoman()}
              >
                <Text>Convertir</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Romano: {this.state.roman}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
