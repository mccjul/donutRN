import React from "react";
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
        curTime: new Date().toLocaleString()
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
                timestamp: "14/02/2018"
              },
              {
                itemId: "2",
                url:
                  "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
                name: "Dices",
                price: "2",
                timestamp: "14/02/2018"
              },
              {
                itemId: "3",
                url:
                  "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
                name: "Dices",
                price: "2",
                timestamp: "14/02/2018"
              },
              {
                itemId: "4",
                url:
                  "https://images-na.ssl-images-amazon.com/images/I/81tlnWRchdL._SL1500_.jpg",
                name: "Dices",
                price: "2",
                timestamp: "14/02/2018"
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
                  this.props.navigation.navigate("MyDonut");
                }}
              >
                <View
                  style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                  }}
                >
                  <Text style={{ marginLeft: 10 }}>
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
                    <Text style={{ marginLeft: 10, marginTop: 2 }}>
                      {this.state.curTime}
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
