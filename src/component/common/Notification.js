import React, { Component } from "react";
import { FlatList, Dimensions, Image, ListView } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Left,
  Right,
  Button,
  Icon,
  Body,
  List,
  Thumbnail,
  ListItem,
  View,
  Header,
  Title
} from "native-base";

let { height } = Dimensions.get("window");
const datas = [
  {
    title: "Desktop",
    note: "20% off all Desktop",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Laptop",
    note: "30% off all Laptop",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Tablet",
    note: "10% off all Tablet",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  },
  {
    title: "Mobile",
    note: "40% off all Mobile",
    logo: require("../../../assets/Images/desktop-logo.jpg")
  }
];
export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas
    };
  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    return (
      <Container style={{ backgroundColor: "white" }}>
        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Notifications</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require( '../../../assets/Images/notification-icon.png')}  />
              </Left>
              <Body>
                <Text>Your Order is now Enroute</Text>
                <Text note>Order from Bakehome is on its way</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Thumbnail source={require( '../../../assets/Images/notification-icon.png')}  />
              </Left>
              <Body>
                <Text>Your Order has been Accepted</Text>
                <Text note>Zena's Bakers accepted your order</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
              <Thumbnail source={require( '../../../assets/Images/notification-icon.png')}  />
              </Left>
              <Body>
                <Text>Your Order needs information</Text>
                <Text note>Dean's Kichen needs more information</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
