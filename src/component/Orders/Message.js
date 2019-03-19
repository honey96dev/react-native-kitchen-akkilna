import React, { Component } from "react";
import {  Image, ScrollView,  } from "react-native";
import {
  Container,
  Title,
  Body,
  Left,
  Right,
  Header,
} from "native-base";
import ChatIO from "react-native-chatio";

export default class Disputed extends Component {

  constructor(props) {
    super(props);
  

    
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
         <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Orders")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Message</Title>
          </Body>
          <Right />
        </Header>
        <Container>
        <ChatIO
   clientId="d2efa53868de430ba27b3088d8737804"
   redirectUri="https://app.chat.io/"
   license={10458157}
   onChatLoaded={this.chatio.open_chat_window }
 />
        </Container>
      </Container>

    );
  }


}
