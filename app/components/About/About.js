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

export default class About extends Component {
  render() {
    return (
      <View>
      <Text style={Style.heading}>About Us</Text>
      <Text style={Style.sectionText}>loremrwrwerewrwe</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent("About", ()=> About);