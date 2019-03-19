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
class ManageAddress extends Component {
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
              onPress={() => this.props.navigation.navigate("Checkout")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Manage Address</Title>
          </Body>
          <Right>
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
                        <View style={{flexDirection:'row'}}>
                            <Text style={{ marginRight: 250 }}>Home</Text>
                            <Button onPress={() => this.props.navigation.navigate("EditAddress")} style={{backgroundColor:'none'}}><Text style={{ fontFamily: 'Poppins',color:'#71C75C'}}>Edit</Text></Button>
                        </View>
                    </CardItem>
                    <CardItem bordered>
                        <View >
                            <Text style={{ fontSize:12}}>Home Address</Text>
                            <Text style={{ fontSize:12}}>508, Foxhill 5, Dubai Motor City Dubai, UAE</Text>
                            <Text style={{ fontSize:12}}>Mobile Number: +971 52 357 9893</Text>
                        </View>
                    </CardItem>
              </Card>
          </Content>
        </View>
      </Container>
    );
  }
}



export default ManageAddress;