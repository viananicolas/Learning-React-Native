/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import Home from "./app/components/Home/Home";
import About from "./app/components/About/About";
import Contact from "./app/components/Contact/Contact";
export default class App extends Component {
  render() {
    return (
      <View>
        <View style={Style.imageWrap}>
          <Image style={Style.image} source={require("./logo.png")} />
        </View>
        <Home />
        <About />
        <Contact />
      </View>
    );
  }
}
