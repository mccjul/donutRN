import React from "react";
import moment from "moment";
import {
  Text,
  View,
  Image,
  FlatList,
  renderItem,
  Dimensions,
  TextInput,
  ScrollView
} from "react-native";
import {
  SearchBar,
  Card,
  Button,
  Header,
  Badge,
  Tile,
  Divider,
  Icon
} from "react-native-elements";

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
