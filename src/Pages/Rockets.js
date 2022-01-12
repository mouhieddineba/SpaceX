import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Icon } from 'native-base';
import HeaderAPP from '../Components/Header';

export default class Rockets extends Component {

    static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor}) => (
            <Text name="Rockets" style={{fontSize: 24, color: tintColor}}>🚀</Text>
        )
    }

  render() {
    return (
      <Container>
        <HeaderAPP {...this.props} title="Rockets"></HeaderAPP>
        <View>
            <Text>Oi</Text>
        </View>
      </Container>
    )
  }
}
