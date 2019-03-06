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
  H3,
  Card,
  CardItem
} from "native-base";
import NavBar from "../components/NavBar";

export default class DiasMinutos extends Component {
  state = {
    days: 0,
    res: 0
  };

  convertDays = () => {
    let days = this.state.days;
    let minutes = days * 1440;
    this.setState({ res: minutes });
  };

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Días a minutos</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Días a convertir</Label>
                <Input
                  keyboardType="phone-pad"
                  onChangeText={val => this.setState({ days: val })}
                />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button
                light
                androidRippleColor
                onPress={() => this.convertDays()}
              >
                <Text>Convertir</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <H3>Minutos: {this.state.res}</H3>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
