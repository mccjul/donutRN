import React from "react";
import { Text, View, Dimensions } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

const { width, height } = Dimensions.get("window");

export default class BidScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  static navigationOptions = {
    title: "Details"
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <FormLabel>Bid Amount</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ text })}
          placeholder="Enter amount"
        />
        <Button
          buttonStyle={{ backgroundColor: "#297373", width: width }}
          title="Bid !"
          onPress={() => {
            this.props.navigation.navigate("Home");
          }}
        />
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}
