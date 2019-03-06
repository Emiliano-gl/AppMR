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

export default class Factorial extends Component {
  state = {
    num: 0,
    res: 0
  };

  getFactorial = () => {
    let num = this.state.num;
    let total = 1;

    if (num <= 0) {
      this.setState({ res: 0 });
      return;
    }

    for (i = 1; i <= num; i++) {
      total *= i;
    }

    this.setState({ res: total });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Factorial</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Número</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={number => this.setState({ num: number })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button info androidRippleColor onPress={this.getFactorial()}>
                <Text>Calcular</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <Text>Factorial: {this.state.res}</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
