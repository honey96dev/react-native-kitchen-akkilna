import React, { Component } from "react";
import { Dimensions, FlatList, StyleSheet,Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Title,
  Text,
  Body,
  Left,
  Right,
  List,
  ListItem,
  Item,
  Label,
  Input,
  View,
  Form,

  Thumbnail,
  Header,
  CheckBox
} from "native-base";
import Spinner from 'react-native-number-spinner';
let { height } = Dimensions.get("window");
const cards = [
  {
    kitchen: "Zena Kitchen",
    total: "AED 900",
    items: "6",
    logo: require("../../../assets/Images/food1.png")
  },
];
class SavedCards extends Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  };
  render() {
    return (
      <Container style={{ backgroundColor: "#F8F8F8" }}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Account")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Manage Cards</Title>
          </Body>
          <Right>
          <Button
              transparent
              onPress={() => this.props.navigation.navigate("Checkout")}
            >
              <Text style={{fontFamily:'Poppins', fontSize: 16, color:'indigo'}}>Add</Text>
            </Button>
          </Right>
        </Header>
        <View
          style={{
            height: height - 60,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5
          }}
        >
          <Content >
              <Card style={{ 
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10}}>
                    <CardItem bordered>
                    <Left>
                        <View >
                            <Text style={{ fontSize:12}}>Master Card</Text>
                            <Text style={{ fontSize:12}}>0931</Text>
                            <Text style={{ fontSize:12}}>11/21</Text>
                        </View>
                        </Left>
                        <Right>
                        <Button iconLeft transparent danger>
                        <Icon type='FontAwesome' name='trash' />
                        <Text>Remove</Text>
                      </Button>
                      </Right>
                    </CardItem>
              </Card>
          </Content>
        </View>
      </Container>
    );
  }
}



export default SavedCards;