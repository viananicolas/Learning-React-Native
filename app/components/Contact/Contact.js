/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, Text, Button, View, TextInput } from "react-native";
import Style from "../../style";

export default class Contact extends Component {
  buttonClick(){
    console.log("oi");
  }
  render() {
    return (
      <View>
        <Text style={Style.heading}>Contact Us</Text>
        <View>
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter name"
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Enter email"
            textContentType="emailAddress"
          />
          <TextInput
            style={{ height: 40 }}
            placeholder="Optional text"
          />
          <Button title="Enviar" 
          accessibilityLabel="Enviar o formulário"
          color="black"
          onPress={this.buttonClick}></Button>
        </View>
      </View>
    );
  }
}
AppRegistry.registerComponent("Contact", () => Contact);
