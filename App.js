/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  ScrollView,
  View,
  Image,
  Switch,
  Text,
  ToolbarAndroid
} from "react-native";
import Home from "./app/components/Home/Home";
import About from "./app/components/About/About";
import Contact from "./app/components/Contact/Contact";
import Style from "./app/style";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      logoHidden: false
    };
  }
  render() {
    let logoHidden = this.state.logoHidden;
    let img = <Text />;
    if (logoHidden) img = <Text />;
    else {
      img = <Image style={Style.image} source={require("./logo.png")} />;
    }
    return (
      <View>
        <ToolbarAndroid
          style={Style.toolbar}
          logo={require("./ic_launcher.png")}
          title= "The company"
          subtitle= "Welcome"
        />
        <View style={Style.imageWrap}>
          {img}
          <Switch
            onValueChange={value => this.setState({ logoHidden: value })}
            value={this.state.logoHidden}
          />
        </View>
        <ScrollView style={Style.scrollView}>
          <Home />
          <About />
          <Contact />
        </ScrollView>
      </View>
    );
  }
}
