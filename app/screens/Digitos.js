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

export default class Digitos extends Component {
  state = {
    number: 0,
    digits: 0
  };

  countDigits = () => {
    let num = this.state.number;
    let dig = num.length;

    this.setState({ digits: dig });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Contar dígitos</H1>
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
                onPress={() => this.countDigits()}
              >
                <Text>Contar</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Dígitos: {this.state.digits}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
