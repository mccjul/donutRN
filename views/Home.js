import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Image,
  FlatList,
  renderItem,
  Dimensions,
  TextInput,
  StyleSheet
} from "react-native";
import {
  Header,
  SearchBar,
  Tab,
  Icon
} from "react-native-elements";
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Tabs from 'react-native-tabs';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

const searchStyle = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#e1e8ee'
  },
});

const data = ["this"];

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  constructor(props) {
    super(props);
    this.state =
      {
        selectedTab: 'home'
      }
  }

  changeTab(selectedTab) {
    this.setState({ selectedTab })
  }


  render() {
    const { selectedTab } = this.state
    return (
      <View style={styles.container}>
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

        <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}>
          <View>
            <Icon name="gift" type="font-awesome" containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color={'#ff880a'} />
            <Text name='Donations' style={{color: '#ff880a', fontSize: 11}}>Donations</Text>
          </View>
          <View>
            <Icon name="ticket" type="font-awesome" containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color={'#5e6977'} />
            <Text name='Bids' style={{fontSize: 11}}>Bids</Text>
          </View>
          <View>
            <Icon name="comments" type="font-awesome" containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color={'#5e6977'} />
            <Text name='Notifications' style={{fontSize: 11}}>Notifications</Text>
          </View>
        </Tabs>
      </View>

    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Home");
  };
}

HomeScreen.navigationOptions = {
  header: <View style={searchStyle.header}>
    <View>
      <SearchBar lightTheme
        placeholder='Search bids' />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 5
  }
});
