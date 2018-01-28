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

const { width, height } = Dimensions.get("window");

export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details"
  };

  constructor(props) {
    super(props);

    this.state = {
      curTime: moment(new Date()).format("YYYY-MM-DD hh:mm:ss"),
      data: []
    };
  }

  componentDidMount() {
    const itemId = this.props.navigation.state.params.id;

    //getItem(itemId) - return data
    var data = {
      itemId: itemId,
      url:
      "https://images.crateandbarrel.com/is/image/Crate/EverdayMugsCHF15",
      name: "White Mug",
      price: "5",
      timestamp: "2018-01-30 01:20:30",
      currentBidder: "John",
      charity: "UNICEF"
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
          <Text> Current Bidder: {this.state.data.currentBidder}</Text>
          <Text style={{ marginTop: 2, color: "red" }}>
            Closing date:
            {moment(this.state.data.timestamp, "YYYY-MM-DD hh:mm:ss").format(
              "MMMM Do YYYY, h:mm:ss a"
            )}
          </Text>
          <Text>Charity : {this.state.data.charity}</Text>
        </Card>
        <Button
          buttonStyle={{ backgroundColor: "#297373", width: width }}
          title="BID NOW!"
          onPress={() => {
            this.props.navigation.navigate("Bid", {
              id: this.state.data.itemId
            });
          }}
        />
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
