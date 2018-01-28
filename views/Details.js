import React from "react";
import { Text, View } from "react-native";

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor(props) {
    super(props);
    const itemId = this.props.navigation.state.params.id;
    this.state = {
      itemId: itemId,
      data: []
    };
  }

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text onPress={this._handlePress}>{this.state.itemId}</Text>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}
