import React, { Component } from 'react';
import { Container, Header, Content, Badge, Text, Icon } from 'native-base';



export default class BadgeExample extends Component {
  render() {
    return (
      <Container>
          <Content>
          <Badge success>
            <Text>0</Text>
          </Badge>
          </Content>
      </Container>
    )
  }
}