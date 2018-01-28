import React from "react";
import {
  Text,
  View,
  Image,
  FlatList,
  renderItem,
  Dimensions,
  TextInput,
  StyleSheet
} from "react-native";
import { Header, Searchbar, SearchBar } from "react-native-elements";
import { StackNavigator } from 'react-navigation'; 
import { Constants } from 'expo';

const searchStyle = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e1e8ee',
  },
});

const data = ["this"];

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    header: null
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <FlatList
          data={[
            {
              itemId: "1",
              url:
                "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
              name: "White Mug",
              price: "5",
              timestamp: "14/02/2018"
            },
            {
              itemId: "2",
              url:
                "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
              name: "Dices",
              price: "2",
              timestamp: "14/02/2018"
            }
          ]}
          keyExtractor={item => item.itemId}
          renderItem={({ item }) => (
            <View style={{ alignItems: "center" }}>
              <Image
                style={{ width: 250, height: 250 }}
                source={{ uri: item.url }}
              />
              <Text>{item.name}</Text>
              <Text>{item.price}</Text>
            </View>
          )}
        />
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}

HomeScreen.navigationOptions = {
  header: <View style={searchStyle.header}>
    <SearchBar lightTheme/>
  </View>
}
