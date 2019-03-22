import React, {Component} from "react";
import {Headers} from "../common";
import {Dimensions, FlatList, StyleSheet, TouchableOpacity} from "react-native";
import {
    Container,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Form,
    Picker,
    Label,
    Body,
    Left,
    Right,
    List,
    ListItem,
    View,
    Thumbnail
} from "native-base";
import StepIndicator from 'react-native-step-indicator';

let {height} = Dimensions.get("window");
const cards = [
    {
        date: "21/12/2018",
        order_no: "30301931",
        kitchen: "Zena Kitchen",
        total: "AED 900",
        items: "6",
        logo: require("../../../assets/Images/food1.png")
    },
    {
        date: "22/01/2019",
        order_no: "30344221",
        kitchen: "Dave Pizza",
        total: "AED 450",
        items: "4",
        logo: require("../../../assets/Images/food2.png")
    }
];
export default class CartScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPosition: 0,
            selected: "key1"
        };
    }

    onValueChange(value: string) {
        this.setState({
            selected: value
        });
    }


    render() {
        return (
            <Container style={{backgroundColor: "white"}}>
                <Headers routes={this.props.navigation}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontFamily: 'Poppins_bold', mariginLeft: 10, marginTop: 10, fontSize: 28}}>Active
                        Orders</Text>
                </View>
                <View
                    style={{
                        height: height - 150,
                        marginBottom: 5,
                        marginLeft: 5,
                        marginRight: 5,
                        marginTop: 5
                    }}
                >
                    <Content padder>
                        <FlatList
                            data={cards}
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
                                        <Text style={styles.listtext}>Date :</Text>
                                        <Text style={styles.listtext}>OrderNo :</Text>
                                        <Text style={styles.listtext}>Kitchen :</Text>
                                        <Text style={styles.listtext}>Items :</Text>
                                        <Text style={styles.listtext}>Total :</Text>
                                        </Body>
                                        <Right>
                                            <Body
                                                style={{alignItems: "flex-start", paddingTop: 10}}
                                            >
                                            <Text style={styles.listprice}>{item.date}</Text>
                                            <Text style={styles.listprice}>{item.order_no}</Text>
                                            <Text style={styles.listprice}>{item.kitchen}</Text>
                                            <Text style={styles.listprice}>{item.items}</Text>
                                            <Text style={styles.listprice}>{item.total}</Text>
                                            </Body>
                                        </Right>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Container
                                            style={{height: 180}}
                                        >
                                            <StepIndicator
                                                customStyles={customStyles}
                                                currentPosition={this.state.currentPosition}
                                                labels={labels}/>
                                            <Content style={{margin: 10}}>
                                                <Form style={{flexDirection: 'row'}}>
                                                    <Label style={{paddingTop: 10, fontSize: 20, fontWeight: 'bold'}}>Update
                                                        Status: </Label>
                                                    <Picker
                                                        mode="dropdown"
                                                        iosHeader="Update Status"
                                                        style={{
                                                            width: undefined,
                                                            backgroundColor: "#EDEDED",
                                                            borderWidth: 2,
                                                            borderColor: 'greenhttp://localhost:8888/new/akkilna/adminaddkitchen'
                                                        }}
                                                        selectedValue={this.state.selected}
                                                        onValueChange={this.onValueChange.bind(this)}
                                                    >
                                                        <Picker.Item label="Accepted" value="key0"/>
                                                        <Picker.Item label="Preparing" value="key1"/>
                                                        <Picker.Item label="Ready for Pickup" value="key2"/>
                                                    </Picker>
                                                </Form>
                                            </Content>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate("OrderDetailed")}>
                                                <Text style={{textAlign: 'center', color: 'blue'}}>View Detailed
                                                    Order</Text>
                                            </TouchableOpacity>
                                        </Container>
                                    </CardItem>
                                    <CardItem
                                        // style={{height: height - 450}}
                                    >
                                        <Content>
                                            <List>
                                                {cartitems.map((item) => this.createListable(item))}
                                            </List>
                                        </Content>
                                    </CardItem>
                                </Card>
                            )}
                            keyExtractor={item => item.item}
                        />
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
                        <Text style={styles.listtext}>{item.title}</Text>
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

const cartitems = [
    {
        id: 0,
        price: 'AED 40',
        title: 'Chicken Platter',
        subtitle: 'Indian',
        quantity: '1',
        image: require('../../../assets/Images/food1.png',)
    },
    {
        id: 1,
        price: 'AED 30',
        title: 'Kebab Grills',
        subtitle: 'Arabic',
        quantity: '1',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 20',
        title: 'Chicken Tikka',
        subtitle: 'Desserts',
        quantity: '1',
        image: require('../../../assets/Images/food3.png',)
    },
    {
        id: 3,
        price: 'AED 10',
        title: 'Lamb Chops',
        subtitle: 'Sweets',
        quantity: '1',
        image: require('../../../assets/Images/food4.png',)
    },
    {
        id: 4,
        price: 'AED 50',
        title: 'Baby Back Ribs',
        subtitle: 'Beverages',
        quantity: '1',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 60',
        title: 'Spicy Chicken',
        subtitle: 'Indian',
        quantity: '1',
        image: require('../../../assets/Images/food1.png',)
    },
    {
        id: 0,
        price: 'AED 40',
        title: 'Chicken Platter',
        subtitle: 'Indian',
        quantity: '1',
        image: require('../../../assets/Images/food1.png',)
    },
    {
        id: 1,
        price: 'AED 30',
        title: 'Kebab Grills',
        subtitle: 'Arabic',
        quantity: '1',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 20',
        title: 'Chicken Tikka',
        subtitle: 'Desserts',
        quantity: '1',
        image: require('../../../assets/Images/food3.png',)
    },
    {
        id: 3,
        price: 'AED 10',
        title: 'Lamb Chops',
        subtitle: 'Sweets',
        quantity: '1',
        image: require('../../../assets/Images/food4.png',)
    },
    {
        id: 4,
        price: 'AED 50',
        title: 'Baby Back Ribs',
        subtitle: 'Beverages',
        quantity: '1',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 60',
        title: 'Spicy Chicken',
        subtitle: 'Indian',
        quantity: '1',
        image: require('../../../assets/Images/food1.png',)
    },
];

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
