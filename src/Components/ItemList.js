import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class ItemList extends Component {
  render() {
    return (
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ uri: 'https://images2.imgbox.com/3d/55/kbVulokl_o.png' }} />
          </Left>
          <Body>
            <Text>Sankhadeep</Text>
            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
          </Body>
          <Right>
            <Button transparent>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
    );
  }
}
