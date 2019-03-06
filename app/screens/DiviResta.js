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

export default class DiviResta extends Component {
  state = {
    number1: 0,
    number2: 0,
    result: 0
  };

  division = () => {
    let total = 0;
    let ndividir = parseFloat(this.state.number1);
    let nveces = parseFloat(this.state.number2);

    while (ndividir > 0) {
      ndividir = ndividir - nveces;
      total = total + 1;
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
              <H1>División por resta</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Dividendo</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ number1: num })}
                />
              </Item>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Divisor</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={num => this.setState({ number2: num })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button info androidRippleColor onPress={() => this.division()}>
                <Text>Dividir</Text>
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
