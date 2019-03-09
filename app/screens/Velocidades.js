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

export default class Velocity extends Component {
  state = {
    seconds: 0,
    velocity: 0
  };

  calculateVelocity = () => {
    let Vo = 0;
    let t = parseFloat(this.state.seconds);
    let a = 8;
    let Vf = Vo + a * t;
    let Vm = (Vo + Vf) / 2;
    Keyboard.dismiss();

    this.setState({ velocity: Vm });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Calcular velocidad</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Segundos Transcurridos</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ seconds: num })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                info
                androidRippleColor
                onPress={() => this.calculateVelocity()}
              >
                <Text>Calcular</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Velocidad: {this.state.velocity} m/s</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
