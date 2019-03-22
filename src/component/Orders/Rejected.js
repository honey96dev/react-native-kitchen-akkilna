import React, {Component} from "react";
import {Dimensions, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity} from "react-native";
import {
    Container,
    Content,
    Card,
    CardItem,
    Title,
    Text,
    Body,
    Left,
    Right,
    List,
    ListItem,
    View,
    Header,
    Thumbnail
} from "native-base";
import StepIndicator from 'react-native-step-indicator';
import {fetch, GET} from "../../apis";
import Setting from "../common/Setting";

let {height} = Dimensions.get("window");

export default class Rejected extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            selected: 1,
            listKey: 12,
        };
    }

    onValueChange(orderIndex, orderId, value) {
        let cards = this.state.cards;
        cards[orderIndex].orderStatus = value;
        this.setState({
            cards: cards,
            selected: value,
            listKey: Math.random() * 100,
        });

        fetch(GET, "json.php", {//kit=5&close=1
            kit: Setting.kit_id,
            oid: orderId,
            ready: value,
        });
    }


    componentDidMount(): void {
        this.loadData();
    }

    loadData() {
        fetch(GET, "json.php", {
            kit: Setting.kit_id,
            pen: 1,
        }).then(response => {
            let cnt1 = response.length,
                cnt2;
            let cards = [],
                card;
            let item;
            let i, j;
            for (i = 0; i < cnt1; i++) {
                item = response[i];
                card = {
                    orderIndex: i,
                    orderDate: item.added_date,
                    orderNo: item.order_id,
                    expectedDate: item.expected_date + ', ' + item.expected_time,
                    items: [],
                    total: 0,
                    orderStatus: item.order_status,
                };
                cnt2 = item.products.length;
                for (j = 0; j < cnt2; j++) {
                    try {
                        card.items.push({
                            productName: item.products[j].pname,
                            quantity: item.products[j].quantity,
                            price: item.products[j].totprice,
                        });
                        card.total += parseFloat(item.products[j].totprice);
                    } catch (e) {

                    }
                }
                cards.push(card);
            }
            console.log('cards', cards);
            this.setState({
                cards: cards
            });
        }).catch(err => {

        });
    }

    render() {
        return (
            <Container style={{backgroundColor: "white"}}>
                <Header style={{backgroundColor: "white"}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Orders")}
                        >
                            <Image source={require('../../../assets/Images/back.png')}
                                   style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: "black"}}>Rejected</Title>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <View
                        style={{
                            // height: height,
                            marginBottom: 5,
                            marginLeft: 5,
                            marginRight: 5,
                            marginTop: 5
                        }}
                    >

                        <Content padder>
                            <FlatList
                                key={this.state.listKey}
                                data={this.state.cards}
                                showsVerticalScrollIndicator={false}
                                renderItem={({item}) => (
                                    <Card
                                        key={item.id}
                                        style={{
                                            elevation: 3,
                                            marginBottom: 15,
                                            marginTop: 10
                                        }}
                                    >
                                        <CardItem key={'item1'} header bordered>
                                            <Left>
                                                <Thumbnail circular large source={item.logo}/>
                                            </Left>
                                            <Body style={{alignItems: "flex-start", paddingTop: 10, marginRight: -50,}}>
                                            <Text style={styles.listtext}>OrderDate :</Text>
                                            <Text style={styles.listtext}>OrderNo :</Text>
                                            <Text style={styles.listtext}>ExpectedDate :</Text>
                                            <Text style={styles.listtext}>Items :</Text>
                                            <Text style={styles.listtext}>Total :</Text>
                                            </Body>
                                            <Right>
                                                <Body
                                                    style={{alignItems: "flex-start", paddingTop: 10}}
                                                >
                                                <Text style={styles.listprice}>{item.orderDate}</Text>
                                                <Text style={styles.listprice}>{item.orderNo}</Text>
                                                <Text style={styles.listprice}>{item.expectedDate}</Text>
                                                <Text style={styles.listprice}>{item.items.length}</Text>
                                                <Text style={styles.listprice}>{item.total}</Text>
                                                </Body>
                                            </Right>
                                        </CardItem>
                                        <CardItem bordered>
                                            <Container style={{height: 180}}>
                                                <StepIndicator
                                                    customStyles={customStyles}
                                                    currentPosition={this.state.currentPosition}
                                                    labels={labels}/>
                                                <Content style={{margin: 10}}>
                                                    <Text style={{
                                                        paddingTop: 10,
                                                        textAlign: 'center',
                                                        fontSize: 20,
                                                        color: 'red',
                                                        fontWeight: 'bold'
                                                    }}> Rejected </Text>
                                                </Content>
                                                <TouchableOpacity
                                                    onPress={() => this.props.navigation.navigate("OrderDetailed")}>
                                                    <Text style={{textAlign: 'center', color: 'blue'}}>View Detailed
                                                        Order</Text>
                                                </TouchableOpacity>
                                            </Container>
                                        </CardItem>
                                        <CardItem key={'item3'}>
                                            <Content>
                                                <List>
                                                    {item.items.map((i) => this.createListable(i))}
                                                </List>
                                            </Content>
                                        </CardItem>
                                    </Card>
                                )}
                                keyExtractor={item => item.item}
                            />
                        </Content>
                    </View>
                </ScrollView>
            </Container>

        );
    }


    createListable(item) {
        return (
            <ListItem
                key={item.id}
                style={{marginTop: 10}}>
                <View style={{flexDirection: 'row'}}>
                    <Left>
                        <Text style={styles.listtext}>{item.productName}</Text>
                        <Text style={styles.listprice}>{item.price}</Text>
                    </Left>
                    <Right>
                        <Text style={styles.listtext}>X {item.quantity}</Text>
                    </Right>
                </View>
            </ListItem>
        );
    }
}

const styles = StyleSheet.create({
    listtext: {
        fontFamily: 'Poppins',
        fontSize: 14,
    },
    listprice: {
        fontFamily: 'Poppins_bold',
        fontSize: 14,
    },
});

const labels = ["Order Placed", "Order Accepted", "Cooking Order", "On Route", "Delivered"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
}
/* 
import data from "./temp.json";
let dataObj = data[0];
let dataArray = Object.keys(dataObj).map(key => {
  let obj = dataObj[key];
  obj.keyName = key;
  return obj;
});
<List
dataArray={dataArray[0]}
renderRow={item => (
  <ListItem>
    <Text>{item}</Text>
  </ListItem>
)}
/>
*/
