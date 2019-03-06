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

export default class MultiSuma extends Component {
  state = {
    number1: 0,
    number2: 0,
    result: 0
  };

  multiplication = () => {
    let num1 = parseFloat(this.state.number1);
    let num2 = parseFloat(this.state.number2);
    let aux = 0;
    let total = 0;

    while (aux < num2) {
      aux += 1;
      total += num1;
    }

    this.setState({ result: total });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Multiplicación por sumas</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número 1</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ number1: num })}
                />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número 2</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ number2: num })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                info
                androidRippleColor
                onPress={() => this.multiplication()}
              >
                <Text>Multiplicar</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Resultado: {this.state.result}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
