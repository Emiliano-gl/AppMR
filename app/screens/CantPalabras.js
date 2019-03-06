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

export default class CantPalabras extends Component {
  state = {
    oration: "",
    counter: 0
  };

  countWords = () => {
    let palabras = this.state.oration;
    let cantPalabras = palabras.split(" ");
    let espacios = 0;

    for (let i in cantPalabras) {
      if (cantPalabras[i] == "") {
        espacios += 1;
      }
    }

    let res = cantPalabras.length - espacios;
    this.setState({ counter: res });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Contar palabras</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Palabras</Label>
                <Input
                  keyboardType="default"
                  onChangeText={word => this.setState({ oration: word })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button info androidRippleColor onPress={() => this.countWords()}>
                <Text>Contar</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Palabras: {this.state.counter}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
