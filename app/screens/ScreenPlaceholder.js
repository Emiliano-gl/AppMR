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

export default class ScreenPlaceholder extends Component {
  state = {};

  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <NavBar navigation={navigation} />

        <Content padder>
          <Card>
            <CardItem header>
              <H1>Title</H1>
            </CardItem>

            <CardItem>
              <Item floatingLabel>
                <Label>Input label</Label>
                <Input keyboardType="phone-pad" />
              </Item>
            </CardItem>

            <CardItem footer>
              <Button light androidRippleColor>
                <Text>Button</Text>
              </Button>
            </CardItem>
          </Card>

          <Card>
            <CardItem header>
              <H3>Res</H3>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
