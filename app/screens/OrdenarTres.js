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

export default class OrdenarTres extends Component {
  state = {
    number1: 0,
    number2: 0,
    number3: 0,
    result: ""
  };

  ordenarAscendente = () => {
    let num1 = parseFloat(this.state.number1);
    let num2 = parseFloat(this.state.number2);
    let num3 = parseFloat(this.state.number3);
    let numeros = [];
    Keyboard.dismiss();

    if (num1 > num2 && num1 > num3) {
      numeros.push(num1);

      if (num2 > num3) {
        numeros.push(num2);
        numeros.push(num3);
      } else {
        numeros.push(num3);
        numeros.push(num2);
      }
    }

    if (num2 > num1 && num2 > num3) {
      numeros.push(num2);

      if (num1 > num3) {
        numeros.push(num1);
        numeros.push(num3);
      } else {
        numeros.push(num3);
        numeros.push(num1);
      }
    }

    if (num3 > num1 && num3 > num2) {
      numeros.push(num3);

      if (num2 > num1) {
        numeros.push(num2);
        numeros.push(num1);
      } else {
        numeros.push(num1);
        numeros.push(num2);
      }
    }

    let res = numeros.reverse().join(" ")
    this.setState({ result: res })
  }

  ordenarDescendente = () => {
    let num1 = parseFloat(this.state.number1);
    let num2 = parseFloat(this.state.number2);
    let num3 = parseFloat(this.state.number3);
    let numeros = [];
    Keyboard.dismiss();

    if (num1 > num2 && num1 > num3) {
      numeros.push(num1);

      if (num2 > num3) {
        numeros.push(num2);
        numeros.push(num3);
      } else {
        numeros.push(num3);
        numeros.push(num2);
      }
    }

    if (num2 > num1 && num2 > num3) {
      numeros.push(num2);

      if (num1 > num3) {
        numeros.push(num1);
        numeros.push(num3);
      } else {
        numeros.push(num3);
        numeros.push(num1);
      }
    }

    if (num3 > num1 && num3 > num2) {
      numeros.push(num3);

      if (num2 > num1) {
        numeros.push(num2);
        numeros.push(num1);
      } else {
        numeros.push(num1);
        numeros.push(num2);
      }
    }

    let res = numeros.join(" ")
    this.setState({result: res})
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Ordenar 3 números</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número 1</Label>
                <Input keyboardType="phone-pad" onChangeText={num => this.setState({number1: num})}/>
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número 2</Label>
                <Input keyboardType="phone-pad" onChangeText={num => this.setState({ number2: num })} />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número 3</Label>
                <Input keyboardType="phone-pad" onChangeText={num => this.setState({ number3: num })} />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button info androidRippleColor onPress={() => this.ordenarAscendente()}>
                <Text>Ascendente</Text>
              </Button>
              <Button info androidRippleColor onPress={() => this.ordenarDescendente()} style={{marginLeft:10}}>
                <Text>Decendente</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>{this.state.result}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
