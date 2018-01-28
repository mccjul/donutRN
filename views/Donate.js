import React from "react";
import { Text, View } from "react-native";

export default class DonateScreen extends React.Component {
  static navigationOptions = {
    title: "Details"
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text onPress={this._handlePress}>DetailsScreen!</Text>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}
