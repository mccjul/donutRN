import React from "react";
import { Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

import HomeScreen from "./views/Home";
import MyDonutScreen from "./views/MyDonut";
import DetailsScreen from "./views/Details";
import BidScreen from "./views/Bid";
import DonateScreen from "./views/Donate";

export default StackNavigator({
  Home: { screen: HomeScreen },
  MyDonut: { screen: MyDonutScreen },
  Details: { screen: DetailsScreen },
  Bid: { screen: BidScreen },
  Donate: { screen: DonateScreen }
});
