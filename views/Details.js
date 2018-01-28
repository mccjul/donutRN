import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { Card, ListItem, Button } from "react-native-elements";

const { width, height } = Dimensions.get("window");

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    const itemId = this.props.navigation.state.params.id;

    //getItem(itemId) - return data
    var data = {
      itemId: itemId,
      url:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
      name: "White Mug",
      price: "5",
      timestamp: "2018-01-30 01:20:30"
    };

    this.setState({ data: data });
  }

  render() {
    return (
      <View
        style={{ alignItems: "center", justifyContent: "flex-start", flex: 1 }}
      >
        <Image
          style={{ width: width, height: height * 0.5 }}
          source={{ uri: this.state.data.url }}
        />
        <Card containerStyle={{ width: width }} title={this.state.data.name}>
          <Text> $ {this.format(this.state.data.price)}</Text>
        </Card>
      </View>
    );
  }

  format = price => {
    return parseFloat(price).toFixed(2);
  };

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}
