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

const data = ["this"];

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
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
    return (
      <View style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{
            borderBottomWidth: 0,
            backgroundColor: "#F6AE2D"
          }}
        />
        <SearchBar placeholder="Type Here..." />
        <ScrollView>
          <FlatList
            style={{ paddingBottom: 20 }}
            data={[
              {
                itemId: "1",
                url:
                  "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
                name: "White Mug",
                price: "5",
                timestamp: "2018-01-30 01:20:30"
              },
              {
                itemId: "2",
                url:
                  "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
                name: "Dices",
                price: "2",
                timestamp: "2018-01-31 01:20:30"
              },
              {
                itemId: "3",
                url:
                  "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
                name: "Dices",
                price: "2",
                timestamp: "2018-02-01 01:20:30"
              },
              {
                itemId: "4",
                url:
                  "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
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

// class Box extends React.Component{
//   render(){
//     return(

//     );
//   }
// }
