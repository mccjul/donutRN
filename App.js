import React from "react";
import { Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

import HomeScreen from "./views/Home";
import MyDonutScreen from "./views/MyDonut";

export default StackNavigator({
  Home: { screen: HomeScreen },
  MyDonut: { screen: MyDonutScreen }
});
