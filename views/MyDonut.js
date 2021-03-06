import React from "react";
import { Text, View } from "react-native";

export default class MyDonutScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text onPress={this._handlePress}>DonutScreen!</Text>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}
