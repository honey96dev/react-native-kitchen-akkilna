import React, { Component } from "react";
import { Dimensions, TouchableOpacity, StyleSheet,Image } from "react-native";
import {
  Container,
  Content,
  Button,
  Card,
  CardItem,
  Title,
  Text,
  Body,
  Left,
  Item,
  Right,
  View,
  Header,
  Input,
  Label,
} from "native-base";
import { MapView } from "expo";
let { height } = Dimensions.get("window");


export default class EditAddress extends Component {

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
            <Title style={{ color: "black" }}>Edit Address</Title>
          </Body>
          <Right/>
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
          <Content>
              <Card style={{ 
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10}}>
                    <CardItem bordered>
                        <Content style={{flexDirection:'row'}}>
                            <Text style={{ marginRight: 250 }}>Delivery Address</Text>
                        </Content>
                    </CardItem>
                    <CardItem bordered>
                    
                    </CardItem>
              </Card>

              <Card style={{ 
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10}}>
                    <CardItem bordered>
                        <Content style={{flexDirection:'row'}}  >
                            <Text style={{ marginRight: 250 }}>Edit Address</Text>
                        </Content>
                    </CardItem>
                    <CardItem style={{width:'100%'}} bordered >
                        <Content style={{flexDirection:'row', width:'100%'}} scrollEnabled={false} enableAutomaticScroll={false} enableResetScrollToCoords={false}>
                        <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14 }}>Address Title</Label>
                            <Input style={{ fontSize: 13 }} placeholder='address title'/>
                          </Item>
                          <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Area</Label>
                            <Input style={{ fontSize: 13 }} placeholder='area'/>
                            </Item>
                            <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Street</Label>
                            <Input style={{ fontSize: 13 }} placeholder='street name'/>
                            </Item>
                            <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Building</Label>
                            <Input style={{ fontSize: 13 }} placeholder='building or community'/>
                            </Item>
                            <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Apartment or Villa No</Label>
                            <Input style={{ fontSize: 13 }} placeholder='type unit no'/>
                            </Item>
                            <Item style={{width:'100%'}}> 
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Landmarks</Label>
                            <Input style={{ fontSize: 13 }} placeholder='optional'/>
                            </Item>
                            <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Mobile No</Label>
                            <Input style={{ fontSize: 13 }} placeholder='your contact number'/>
                            </Item>
                            <Item style={{width:'100%'}}>
                          <Label style={{ color:'#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Landline</Label>
                            <Input style={{ fontSize: 13 }} placeholder='optional alternate contact number'/>
                            </Item>
                        </Content>
                    </CardItem>
                    <CardItem bordered>
                    
                    </CardItem>
              </Card>
              <Content style={{marginBottom: 40}}>
                <Button onPress={() => this.props.navigation.navigate("Checkout")} style={{marginTop:10, width:'100%'}} success><Text style={{marginLeft:120}}>Save Address</Text></Button>
                </Content>

              
          </Content>
        </View>
        
      </Container>
    );
  }
}
