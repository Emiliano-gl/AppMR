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

export default class DecimalBinario extends Component {
  state = {
    number: 0,
    bin: "0"
  };

  convertDecBin = () => {
    let num = parseInt(this.state.number);
    let binary = num.toString(2);
    Keyboard.dismiss();
    this.setState({ bin: binary });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Decimal a Binario</H1>
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
                onPress={() => this.convertDecBin()}
              >
                <Text>Convertir</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Binario: {this.state.bin}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
