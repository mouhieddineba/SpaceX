import React, { Fragment, Component } from 'react';
import { Header, Left, Body, Icon, Text, Button, Thumbnail, Title, Right, } from 'native-base';
import { Image, StyleSheet, View } from 'react-native';

const logo_url = 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4';

export default class HeaderAPP extends Component {
    render(){
        console.log(this.props)
        // androidStatusBarColor="#573ea8"
        return (
            <View>

        <Header androidStatusBarColor="#28286d" style={styles.header} hasTabs>
        <Left style={{flex:1}}>
            <Icon name="menu" style={{color: 'white'}} onPress={() => this.props.navigation.openDrawer()} />
        </Left>
        <Body>
            <Title style={{marginLeft: 15}}> {this.props.title} </Title>
        </Body>
        <Right>

        </Right>

        </Header>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header: { 
        backgroundColor: '#28286d'
    },
   
  });