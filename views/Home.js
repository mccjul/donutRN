import React, { Component } from "react";
import moment from "moment";
import {
  AppRegistry,
  Text,
  View,
  Image,
  FlatList,
  renderItem,
  Dimensions,
  TextInput,
  StyleSheet,
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
  Tab,
  Icon
} from "react-native-elements";
import { StackNavigator } from "react-navigation";
import { Constants } from "expo";
import Tabs from "react-native-tabs";
import { TabViewAnimated, TabBar, SceneMap } from "react-native-tab-view";

const searchStyle = StyleSheet.create({
  header: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#e1e8ee"
  }
});

const data = ["this"];

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    };
  }

  changeTab(selectedTab) {
    this.setState({ selectedTab });
    this.state = {
      curTime: null
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: moment(new Date()).format("YYYY-MM-DD hh:mm:ss")
      });
    }, 1000);
  }

  render() {
    const { selectedTab } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            style={{ paddingBottom: 20 }}
            data={[
              {
                itemId: "1",
                url:
                  "https://images.crateandbarrel.com/is/image/Crate/EverdayMugsCHF15",
                name: "White Mug",
                price: "5",
                timestamp: "2018-01-30 01:20:30"
              },
              {
                itemId: "2",
                url:
                  "https://ae01.alicdn.com/kf/HTB10_CEMVXXXXXCXFXXq6xXFXXX8/40PCS-4-Colors-Digital-Dice-Top-Quality-Acrylic-Drinking-Dice-Entertainment-Toy-Gambling-Dice-6-Sides.jpg",
                name: "Dices",
                price: "2",
                timestamp: "2018-01-31 01:20:30"
              },
              {
                itemId: "3",
                url:
                  "https://ae01.alicdn.com/kf/HTB1wexJOXXXXXamaXXXq6xXFXXX0/7Pcs-set-Glitter-Shine-TRPG-Game-Dices-For-Dungeons-Dragons-D4-D20-Multi-Sides-Dice-4.jpg",
                name: "Dices",
                price: "2",
                timestamp: "2018-02-01 01:20:30"
              },
              {
                itemId: "4",
                url:
                  "https://ae01.alicdn.com/kf/HTB1irhLQpXXXXbJXVXXq6xXFXXXc/6pcs-Set-16mm-Square-Dice-Gaming-Dices-Playing-Single-Side-Number-1-6-Dot-Cool-For.jpg_640x640.jpg",
                name: "Dices",
                price: "2",
                timestamp: "2018-02-02 01:20:30"
              }
            ]}
            keyExtractor={item => item.itemId}
            renderItem={({ item }) => (
              <Tile
                imageSrc={{ uri: item.url }}
                title={item.name}
                contentContainerStyle={{
                  height: 100,
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10
                }}
                onPress={() => {
                  this.props.navigation.navigate("Details", {
                    id: item.itemId
                  });
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                  }}
                >
                  <Text style={{ marginLeft: 8, marginBottom: 3 }}>
                    $ {this.format(item.price)}
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "flex-start"
                    }}
                  >
                    <Icon name="schedule" />
                    <Text
                      style={{ marginLeft: 10, marginTop: 2, color: "red" }}
                    >
                      {this.calculateTimeLeft(item.timestamp)}
                    </Text>
                  </View>
                </View>
              </Tile>
            )}
          />
        </ScrollView>
        <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }} onSelect={el=>this.props.navigation.navigate(el.props.name)}>
          <View>
            <Icon name="home" type="font-awesome" containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color={'#ff880a'} />
            <Text name='Home' style={{ color: '#ff880a', fontSize: 11 }}>Home</Text>
          </View>
          <View name="Donate">
            <Image
              style={{ width: 26, height: 26, alignItems: 'center', justifyContent: 'center'}}
              source={require('../img/black.png')}
            />
            <Text name='Donate' style={{ fontSize: 11, alignItems: 'center' }}>Donate</Text>
          </View>
          <View name="Bids">
            <Icon name="ticket" type="font-awesome" containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color={'#5e6977'} />
            <Text name='Bids' style={{ fontSize: 11 }}>Bids</Text>
          </View>
          <View name="Notifications">
            <Icon name="comments" type="font-awesome" containerStyle={{ justifyContent: 'center', alignItems: 'center', marginBottom: 2 }} color={'#5e6977'} />
            <Text name='Notifications' style={{ fontSize: 11 }}>Notifications</Text>
          </View>
        </Tabs>
      </View>
    );
  }

  format = price => {
    return parseFloat(price).toFixed(2);
  };

  calculateTimeLeft = deadline => {
    let diff = moment(deadline, "YYYY-MM-DD hh:mm:ss").diff(
      moment(this.state.curTime, "YYYY-MM-DD hh:mm:ss"),
      "days"
    );
    if (diff < 1) {
      diff = moment(deadline, "YYYY-MM-DD hh:mm:ss").diff(
        moment(this.state.curTime, "YYYY-MM-DD hh:mm:ss"),
        "hours"
      );

      return diff <= 1 ? diff + " hour left" : diff + " hours left";
    } else {
      return diff == 1 ? diff + " day left" : diff + " days left";
    }
  };

  _handlePress = () => {
    this.props.navigation.navigate("MyDonut");
  };
}

HomeScreen.navigationOptions = {
  header: (
    <View style={searchStyle.header}>
      <View>
        <SearchBar lightTheme placeholder="Search bids" />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingTop: 5
  }
});
