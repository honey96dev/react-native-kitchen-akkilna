import React, { Component } from "react";
import { TouchableWithoutFeedback, Dimensions, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { logout } from "../../action";
import {
  Container,
  Thumbnail,
  Content,
  List,
  ListItem,
  Separator,
  Button,
  Text,
  Left,
  Icon,
  Body,
  Right,
  View
} from "native-base";
let { height } = Dimensions.get("window");
class SideBar extends Component {
  componentWillReceiveProps(newProps) {
    if (!this.props.token && newProps.token) {
      this.props.navigation.navigate("Login");
    }
  }

  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
        <View
          style={{
            backgroundColor: "#8707FF",
            height: 120,
            alignItems: "center"
          }}
        >
         <Image source={require('../../../assets/Images/drawer-logo.png')} style={{ height: 90, width: 151, resizeMode:'contain', marginRight: 15, marginTop: 29, marginBottom: 10 }} />

        </View>
        <View
          style={{
            height: height - 150
          }}
        >
          <Content>
          <View style={{ backgroundColor: '#BC74FF' , alignItems: "left", flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10,}}>
         <Thumbnail
            style={{ marginLeft: 10, marginRight: 10 }}
            source={{
              uri:
                "https://randomuser.me/api/portraits/men/46.jpg"
            }}
          />
          <View >
          <Text style={{ marginTop: 5, color: "white" }}>
           khalid@akkilna.com {this.props.name}
          </Text>
          <Text style={{ marginTop: 5, color: "white" }}>
          Khalid Hashim{this.props.email}
          </Text>
          </View>
          </View>
            <List
              style={{ backgroundColor: "#FFF", marginTop: 10,}}>
              
             
             <ListItem style={{ marginTop:10}} onPress={() => {this.props.navigation.navigate("Home");}} icon>
                <Left>
                <Image source={require('../../../assets/Images/home.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Home</Text>
                </Body>
              </ListItem>
              
              <ListItem onPress={() => {this.props.navigation.navigate("Orders");}} icon>
                <Left>
                <Image source={require('../../../assets/Images/list.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Orders</Text>
                </Body>
              </ListItem>
              <ListItem icon >
                <Left>
                <Image source={require('../../../assets/Images/calendar.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Planner</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                <Image source={require('../../../assets/Images/paper-plane.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Inbox</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                <Image source={require('../../../assets/Images/headphones.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Support</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                <Image source={require('../../../assets/Images/gears.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Settings</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                <Image source={require('../../../assets/Images/akilna-white.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Abouts Us</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                <Image source={require('../../../assets/Images/file.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <Text style={{fontFamily: 'Poppins' ,fontSize: 14, color: '#8707FF'}}>Terms</Text>
                </Body>
              </ListItem>
              <ListItem style={{ color: 'white'}} icon>
                <Left>
                <Image source={require('../../../assets/Images/logout.png')} style={{ height: 24, width: 24, resizeMode:'contain', marginRight: 15}} />
                </Left>
                <Body style={{borderColor: "white",}}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.props.logout();
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'Poppins' ,
                        fontSize: 14, 
                        color: '#8707FF'
                      }}
                    >
                      Sign Out
                    </Text>
                  </TouchableWithoutFeedback>
                </Body>
                <Left />
              </ListItem>
            </List>
          </Content>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { email, name, token } = user;
  return { email, name, token };
};

export default connect(
  mapStateToProps,
  { logout }
)(SideBar);
