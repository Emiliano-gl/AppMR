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

export default class Temperaturas extends Component {
  state = {
    cant: 0,
    grados: "",
    conversion: 0
  };

  convertCelsiusFaren = () => {
    let celsius = parseFloat(this.state.cant);
    let fahrenheit = celsius * 1.8 + 32;
    this.setState({conversion: fahrenheit, grados: "F"})
  }

  convertFarenCelsius = () => {
    let fahrenheit = parseFloat(this.state.cant);
    let celsius = (fahrenheit - 32) / 1.8;
    this.setState({ conversion: celsius, grados: "C" })
  }

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Conversor de Temperaturas</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>grados a convertir</Label>
                <Input keyboardType="phone-pad" onChangeText={num => this.setState({ cant: num })} />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button info androidRippleColor onPress={() => this.convertCelsiusFaren()}>
                <Text>°C a °F</Text>
              </Button>
              <Button info androidRippleColor onPress={() => this.convertFarenCelsius()} style={{ marginLeft: 10 }}>
                <Text>°F a °C</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>{this.state.conversion}° {this.state.grados}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
