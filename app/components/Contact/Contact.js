/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Style from "../../style";

export default class Contact extends Component {
  render() {
    return (
      <View>
      <Text style={Style.heading}>Contact Us</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent("Contact", ()=> Contact);