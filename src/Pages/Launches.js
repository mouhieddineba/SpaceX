import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Container, List } from 'native-base';
import HeaderAPP from '../Components/Header';
import ItemList from '../Components/ItemList';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Launches extends Component {

    static navigationOptions = {
        header: null,
        drawerIcon: ({tintColor}) => (
          <Text name="home" style={{fontSize: 24, color: tintColor}}>👨‍🚀</Text>
        )
    }

  render() {
    console.log(this.props.Launches)
    alert(this.props.Launches.error)
    return (
      <Container>
        <HeaderAPP {...this.props} title="Launches"></HeaderAPP>
        <ScrollView>
          <List>
            <ItemList /> 
            <ItemList /> 
          </List>
        </ScrollView>
      </Container>
    )
  }
}

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
       launches {
        flight_number,
        mission_name,
        details,
        launch_date_local,
        launch_success,
        rocket {
            rocket_id
            rocket_name
            rocket_type
        },
        details,
        links {
            mission_patch
            mission_patch_small
        }
       }
    }    
`;

export default graphql(LAUNCHES_QUERY, {
  name: "Launches",
})(Launches);
