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

export default class Circulo extends Component {
  state = {
    radio: 0,
    perimeter: 0,
    area: 0
  };

  calculateCircle = () => {
    let radio = parseFloat(this.state.radio);
    const PI = 3.1416;

    let area = PI * (radio * radio);
    let perimetro = 2 * PI * radio;

    Keyboard.dismiss();
    this.setState({ area: area, perimeter: perimetro });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Calcular círculo</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Radio en cm</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ radio: num })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                info
                androidRippleColor
                onPress={() => this.calculateCircle()}
              >
                <Text>Calcular</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Perímetro: {this.state.perimeter} cm</Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem header>
              <Text>Área: {this.state.area} cm²</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
