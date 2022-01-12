import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Icon } from 'native-base';
import HeaderAPP from '../Components/Header';

export default class Roadster extends Component {

    static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor}) => (
            <Icon name="ios-car" style={{fontSize: 24, color: 'blue'}}></Icon>
        )
    }

  render() {
    return (
      <Container>
        <HeaderAPP {...this.props} title="Roadster"></HeaderAPP>
        <View>
            <Text>Oi Roadster</Text>
        </View>
      </Container>
    )
  }
}
