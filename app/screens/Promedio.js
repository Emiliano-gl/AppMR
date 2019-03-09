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
  CardItem,
  Icon
} from "native-base";
import NavBar from "../components/NavBar";
import { Keyboard } from "react-native";

export default class Promedio extends Component {
  state = {
    numbersList: [],
    number: 0,
    prom: 0
  };

  promediar = () => {
    let arreglo = this.state.numbersList;
    let sumatoria = arreglo.reduce((acc, sigval) => {
      return acc + sigval;
    }, 0);
    let promedio = sumatoria / arreglo.length;
    this.setState({ prom: promedio });
  };

  addNumber = () => {
    let num = this.state.number;
    let arreglo = this.state.numbersList;
    arreglo.push(num);
    this.setState({ numbersList: arreglo });
    this.promediar();
    Keyboard.dismiss();
  };

  removeNumber = () => {
    let arreglo = this.state.numbersList;
    arreglo.pop();
    this.setState({ numbersList: arreglo });
    this.promediar();
    Keyboard.dismiss();
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Promediar</H1>
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
                success
                androidRippleColor
                onPress={() => this.addNumber()}
              >
                <Icon name="add" />
              </Button>
              <Button
                danger
                androidRippleColor
                onPress={() => this.removeNumber()}
                style={{ marginLeft: 10 }}
              >
                <Icon name="remove" />
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Números: {this.state.numbersList.join(" ")}</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Promedio: {this.state.prom}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
