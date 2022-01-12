import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Routes from "./Routes";
import { ApolloProvider } from "react-apollo";
import Client from "./Client";

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={Client}>
        <Routes />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
