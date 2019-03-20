import React, {Component} from "react";
import {Headers} from "../common";
import {Body, Button, Container, Content, Left, ListItem, Right, Text, Thumbnail} from "native-base";
import Color from '../AsosColors';
import {Dimensions, ScrollView, TouchableOpacity, View} from "react-native";
import {fetch, GET} from "../../apis";
import Setting from '../../component/common/Setting';

const {width,} = Dimensions.get('window');
export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.props.fetchCurrentUser();
        this.state = {
            selectedIndex: 0,
            orders: [],
        };
    }
    static navigationOptions = {
        header: {
            visible: false
        }
    };

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
            let orders = [],
                order;
            let item;
            let i, j;
            for (i = 0; i < cnt1; i++) {
                item = response[i];
                order = {
                    id: item.order_id,
                    // price: '',
                    title: item.full_name,
                    orderdate: item.added_date,
                    deliverydate: item.expected_date + ', ' + item.expected_time,
                };
                order.total = 0;
                cnt2 = item.products.length;
                for (j = 0; j < cnt2; j++) {
                    try {
                        order.total += parseFloat(item.products[j].totprice);
                    } catch (e) {

                    }
                }
                orders.push(order);
            }
            console.log('orders', orders);
            this.setState({
                orders: orders
            });
        }).catch(err => {

        });
    }

    gotoKitchen() {
        // this.props.navigation.navigate('Kitchen');
    }

    render() {

        return (
            <Container style={{backgroundColor: "white"}}>
                <Headers routes={this.props.navigation}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontFamily: 'Poppins_bold', marginLeft: 10, marginTop: 10, fontSize: 28}}>Open
                        Orders</Text>
                </View>
                <ScrollView>
                    <Content style={{margin: 15}}>
                        {/*<List>*/}
                        {this.state.orders.map((item) => this.createListItem(item))}
                        {/*</List>*/}
                    </Content>
                </ScrollView>
            </Container>
        );
    }

    createListItem(item) {
        return (
            <TouchableOpacity
                key = {item.id}
                style={{
                    backgroundColor: 'white',
                    borderWidth: 0.5,
                    borderColor: 'rgba(0,0,0,0.1)',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 3},
                    shadowRadius: 4,
                    shadowOpacity: 0.1,
                    elevation: 3,
                    marginVertical: 10,
                }}
                activeOpacity={0.5}
                underlayColor={Color.extraLightBackground}
                onPress={this.gotoKitchen}>
                {/*<Text>item.title</Text>*/}
                <ListItem
                    thumbnail
                    // key={item.id}
                    onPress={() => {
                        this.gotoKitchen();
                    }}>
                    <Left>
                        <Thumbnail square source={item.image}/>
                    </Left>
                    <Body>
                    <Text>{item.title}</Text>
                    <Text note numberOfLines={1}>Order:{item.orderdate}</Text>
                    <Text note numberOfLines={1}>Delivery:{item.deliverydate}</Text>
                    <Text>Total:{item.total}</Text>
                    </Body>
                    <Right>
                        <Button onPress={() => this.props.navigation.navigate("OrdersPlaced")} transparent>
                            <Text>View</Text>
                        </Button>
                    </Right>
                </ListItem>
            </TouchableOpacity>
        )
    }

}
