import React, {Component} from "react";
import {Dimensions, StyleSheet, Image, ScrollView,} from "react-native";
import {
    Container,
    Content,
    Title,
    Text,
    Body,
    Separator,
    ListItem,
    Left,
    Right,
    View,
    Header,
} from "native-base";

let {height} = Dimensions.get("window");

const earnings = [
    {
        date: "30 Jan",
        order_no: "3421931",
        sale_value: "AED 900",
        earned_value: "AED 800",

    },
    {
        date: "30 Jan",
        order_no: "3421931",
        sale_value: "AED 900",
        earned_value: "AED 800",

    },
    {
        date: "30 Jan",
        order_no: "3421931",
        sale_value: "AED 900",
        earned_value: "AED 800",

    },
    {
        date: "30 Jan",
        order_no: "3421931",
        sale_value: "AED 900",
        earned_value: "AED 800",

    },
    {
        date: "30 Jan",
        order_no: "3421931",
        sale_value: "AED 900",
        earned_value: "AED 800",

    },
    {
        date: "22 Jan",
        order_no: "3421932",
        sale_value: "AED 900",
        earned_value: "AED 800",
    }
];
export default class Earnings extends Component {

    render() {
        return (
            <Container style={{backgroundColor: "white"}}>
                <Header style={{backgroundColor: "white"}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Account")}
                        >
                            <Image source={require('../../../assets/Images/back.png')}
                                   style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: "black"}}>Earnings</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <View
                        style={{
                            height: height,
                            marginBottom: 5,
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 5
                        }}
                    >
                        <Content padder>
                            {earnings.map((item) => this.createReview(item))}
                        </Content>
                    </View>
                </ScrollView>
            </Container>

        );
    }

    createReview(item) {
        return (
            <Content>
                <Separator bordered>
                    <Text>JANUARY - EARNINGS - AED 4000</Text>
                </Separator>
                <ListItem>
                    <Body>
                    <Text style={{fontSize: 12, color: 'grey'}}>{item.order_no}</Text>
                    <Text style={{fontSize: 14, textAlign: "left"}}>Sale Amount: {item.sale_value}</Text>
                    <Text style={{fontSize: 14, textAlign: "left", fontWeight: 'bold'}}>Earned
                        Amount: {item.earned_value}</Text>
                    </Body>
                    <Right>
                        <Text style={{fontSize: 12, color: 'grey'}}>{item.date}</Text>
                    </Right>
                </ListItem>
            </Content>
        );
    }

}

