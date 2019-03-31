import React, {Component} from "react";
import {Dimensions, FlatList, Image, StyleSheet} from "react-native";
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Input,
    Item,
    Left,
    List,
    ListItem,
    Right,
    Text,
    Thumbnail,
    Title,
    View,
} from "native-base";
import {fetch, GET} from "../../apis";
import Setting from "../common/Setting";

let {height} = Dimensions.get("window");

class OrderDetailed extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            sunTotal: 0,
            deliveryFees: 0,
        };
    }

    static navigationOptions = {
        header: {
            visible: false
        },
    };

    componentDidMount(): void {
        this.loadData();
    }

    loadData() {
        fetch(GET, "json.php", {
            kit: Setting.kit_id,
        }).then(response => {
            let cnt1 = response.length,
                cnt2;
            let cards = [],
                card;
            let item;
            let i, j;
            let subTotal = 0;
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
                subTotal += parseFloat(card.total);
            }
            console.log('cards', response);
            this.setState({
                cards: cards,
                subTotal: subTotal,
                deliveryFees: Number(subTotal * 0.06).toFixed(2),
            });
        }).catch(err => {

        });
    }

    render() {
        return (
            <Container style={{backgroundColor: "#F8F8F8"}}>

                <Header style={{backgroundColor: "white"}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("OrdersStack")}
                        >
                            <Image source={require('../../../assets/Images/back.png')}
                                   style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: "black"}}>Order</Title>
                    </Body>
                    <Right/>
                </Header>

                <View style={{height: height - 60, marginBottom: 5, marginLeft: 5, marginRight: 5, marginTop: 5}}>
                    <Content>

                        <Card style={{
                            elevation: 3,
                            marginBottom: 15,
                            marginTop: 10
                        }}>
                            <CardItem bordered>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 120, marginTop: 10}}>Customer Information</Text>
                                </View>
                            </CardItem>


                            <CardItem bordered>
                                <Body style={{alignItems: "flex-start", paddingTop: 10, marginRight: -50,}}>
                                <Text style={styles.listtext}>Customer Name :</Text>
                                <Text style={styles.listprice}>John Doe</Text>
                                <Text style={styles.listtext}>Address :</Text>
                                <Text style={styles.listprice}>Dubai Motor City, Dubai</Text>
                                <Text style={styles.listtext}>Expected Delivery :</Text>
                                <Text style={styles.listprice}>Tuesday, 31st Dec, 9:00pm</Text>
                                <Text style={styles.listtext}>Pickup Time:</Text>
                                <Text style={styles.listprice}>Tuesday, 31st Dec, 7:30pm</Text>
                                <Text style={styles.listtext}>Est Delivery Time:</Text>
                                <Text style={styles.listprice}>1 hour</Text>
                                </Body>
                                <Right>
                                    <Body style={{alignItems: "flex-start", paddingTop: 10}}>
                                    </Body>
                                </Right>
                            </CardItem>
                        </Card>

                        {/* End Customer information card */}

                        {/* Complete Order */}

                        <FlatList
                            data={this.state.cards}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item}) => (
                                <Card
                                    style={{
                                        elevation: 3,
                                        marginBottom: 15,
                                        marginTop: 10
                                    }}
                                >

                                    <CardItem header bordered>
                                        <Left>
                                            <Thumbnail circular large source={item.logo}/>
                                        </Left>
                                        <Body style={{alignItems: "flex-start", paddingTop: 10, marginRight: -50,}}>
                                        <Text style={styles.listtext}>ExpectedDate :</Text>
                                        <Text style={styles.listtext}>Items :</Text>
                                        <Text style={styles.listtext}>Total :</Text>
                                        <Text style={styles.listtext}>Payment :</Text>
                                        <Text style={styles.listtext}>Status :</Text>
                                        </Body>
                                        <Right>
                                            <Body
                                                style={{alignItems: "flex-start", paddingTop: 10}}
                                            >
                                            <Text style={styles.listprice}>{item.expectedDate}</Text>
                                            <Text style={styles.listprice}>{item.items.length}</Text>
                                            <Text style={styles.listprice}>{item.total}</Text>
                                            <Text style={styles.listprice}>Cash</Text>
                                            <Text style={styles.listprice}>Accepted</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>

                                    <CardItem bordered>
                                        <Left/>
                                        <Text style={{fontFamily: 'Poppins_bold'}}>
                                            Items
                                        </Text>

                                        <Right/>
                                    </CardItem>

                                    <CardItem
                                        // style={{height: height - 290}}
                                    >
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
                        {/* End Complete Order */}


                        {/* Special Comments on Orders */}
                        <Card style={{
                            elevation: 3,
                            marginBottom: 15,
                            marginTop: 10
                        }}>
                            <CardItem bordered>
                                <Content style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 120}}>Special Requests</Text>
                                </Content>
                            </CardItem>
                            <CardItem bordered>
                                <Content style={{flexDirection: 'row'}}>
                                    <Item style={{marginTop: 20}}>
                                        <Input style={{color: "#000",}}
                                               placeholder='Type your special request here...'/>
                                    </Item>
                                </Content>
                            </CardItem>
                        </Card>

                        {/* End Special Comments on Orders */}

                        {/* Price Card */}

                        <Card style={{
                            elevation: 3,
                            marginBottom: 15,
                            marginTop: 10
                        }}>
                            <CardItem bordered>
                                <Content>
                                    <List>
                                        <ListItem style={{marginTop: 20, flexDirection: 'row'}}>
                                            <Text style={{marginLeft: 5}}>Sub Total</Text>
                                            <Text style={{marginLeft: 30}}>AED {this.state.subTotal}</Text>
                                        </ListItem>
                                        <ListItem style={{marginTop: 20, flexDirection: 'row'}}>
                                            <Text style={{marginLeft: 5}}>Delivery Fees</Text>
                                            <Text style={{marginLeft: 30}}>AED {this.state.deliveryFees}</Text>
                                        </ListItem>
                                        <ListItem style={{marginTop: 20, flexDirection: 'row'}}>
                                            <Text style={{marginLeft: 5, fontFamily: 'Poppins_bold'}}>Total
                                                Amount</Text>
                                            <Text style={{marginLeft: 30, fontFamily: 'Poppins_bold'}}>AED {Number(this.state.subTotal) + Number(this.state.deliveryFees)}</Text>
                                        </ListItem>
                                    </List>
                                </Content>
                            </CardItem>
                        </Card>

                        {/* End Price Card */}

                        {/* Action Block */}
                        <Content>
                            <Button onPress={() => this.props.navigation.navigate("Cancelled")} style={{
                                marginTop: 10,
                                width: '100%',
                                alignContent: 'center',
                                justifyContent: 'center'
                            }} danger><Text>Cancel</Text></Button>
                            <Button onPress={() => this.props.navigation.navigate("Message")} style={{
                                marginTop: 10,
                                width: '100%',
                                alignContent: 'center',
                                justifyContent: 'center'
                            }} info><Text>Message</Text></Button>
                        </Content>
                        {/* End Action Block */}

                    </Content>
                </View>
            </Container>
        );
    }


    createListable(item) {
        return (
            <ListItem style={{marginTop: 10}}>
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
export default OrderDetailed;
