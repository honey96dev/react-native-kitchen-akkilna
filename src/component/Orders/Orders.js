import React, {Component} from "react";
import {Headers, Footers} from "../common";
import {Dimensions, Image} from "react-native";
import {
    Container,
    Content,
    Text,
    List,
    Left,
    Right,
    Icon,
    ListItem,
    View
} from "native-base";

let {height} = Dimensions.get("window");


export default class Orders extends Component {
    render() {
        return (
            <Container style={{backgroundColor: "white"}}>
                <Headers routes={this.props.navigation}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontFamily: 'Poppins_bold', marginLeft: 10, marginTop: 10, fontSize: 28}}>All
                        Orders</Text>
                </View>
                <View style={{marginTop: 20, height: height - 150}}>
                    <Content>
                        <List>
                            <ListItem key={'Accepted'} style={{height: 70}}
                                      onPress={() => this.props.navigation.navigate("Accepted")}>
                                <Left>
                                    <Text>Accepted</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../../../assets/Images/front.png')}
                                           style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                                </Right>
                            </ListItem>
                            <ListItem key={'Rejected'} style={{height: 70}} onPress={() => this.props.navigation.navigate("Rejected")}>
                                <Left>
                                    <Text>Rejected</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../../../assets/Images/front.png')}
                                           style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                                </Right>
                            </ListItem>
                            <ListItem key={'Delivered'} style={{height: 70}} onPress={() => this.props.navigation.navigate("Delivered")}>
                                <Left>
                                    <Text>Delivered</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../../../assets/Images/front.png')}
                                           style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                                </Right>
                            </ListItem>
                            <ListItem key={'Cancelled'} style={{height: 70}} onPress={() => this.props.navigation.navigate("Cancelled")}>
                                <Left>
                                    <Text>Cancelled</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../../../assets/Images/front.png')}
                                           style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                                </Right>
                            </ListItem>
                            <ListItem key={'Disputed'} style={{height: 70}} onPress={() => this.props.navigation.navigate("Disputed")}>
                                <Left>
                                    <Text>Disputed</Text>
                                </Left>
                                <Right>
                                    <Image source={require('../../../assets/Images/front.png')}
                                           style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </Container>
        );
    }

}
