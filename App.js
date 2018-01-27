import React from "react";
import { Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

import HomeScreen from "./views/Home";

export default StackNavigator({
  Home: {
    screen: HomeScreen
  }
});
