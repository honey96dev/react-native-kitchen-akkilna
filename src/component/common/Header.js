import React, { Component } from "react";
import { Image } from "react-native";
import {
  Header,
  Button,
  Icon,
  Text,
  Badge,
  Left,
  Body,
  Right,
  Title
} from "native-base";
import { localize } from "../../internationalization";

export class Headers extends Component {
  render() {
    console.log("HEADER", this.props);
    return (
      <Header style={{ backgroundColor: "#fff", borderBottomColor: '#fff', }}>
        <Left>

        </Left>
        <Body>
          <Title style={{ color: "black", fontFamily: 'Poppins_bold', }}>{localize("company")}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.routes.navigate("Notify")}
          >
            <Badge style={{ position: "relative", height: 22, width: 22, alignContent:'center' }}>
              <Text style={{fontSize: 12, textAlign:'center'}}>2</Text>
            </Badge>
            <Image source={require('../../../assets/Images/notification.png')} style={{ height: 24, width: 24, resizeMode:'contain' }} />
          </Button>
        </Right>
      </Header>
    );
  }
}

