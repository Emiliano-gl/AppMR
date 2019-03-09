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

export default class CambioDivisas extends Component {
  state = {
    cant: 0,
    divisa: "",
    conversion: 0
  };

  convertPesoDolar = () => {
    let pesos = parseFloat(this.state.cant);
    let dolares = pesos / 20;
    Keyboard.dismiss();

    this.setState({conversion: dolares, divisa: "dolares"})
  }

  convertDolarPesos = () => {
    let dolares = parseFloat(this.state.cant);
    let pesos = dolares * 20;
    Keyboard.dismiss();

    this.setState({ conversion: pesos, divisa: "pesos" })
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Cambio de divisas</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Cantidad a convertir</Label>
                <Input keyboardType="phone-pad" onChangeText={num => this.setState({cant: num})} />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button info androidRippleColor onPress={() => this.convertPesoDolar()}>
                <Text>Peso a Dolar</Text>
              </Button>
              <Button info androidRippleColor onPress={() => this.convertDolarPesos()} style={{ marginLeft: 10 }}>
                <Text>Dolar a Peso</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>${this.state.conversion} {this.state.divisa}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
