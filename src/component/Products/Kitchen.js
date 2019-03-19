import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image,
    Text,
    TouchableHighlight,
    TouchableOpacity,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import {ScrollableTabView, collapsableComponent, ScrollableTabBar,} from '@valdio/react-native-scrollable-tabview'

const {width} = Dimensions.get('window')
const kWidth = (width / 2) - 4;
import {extraLightBackground} from '../AsosColors';
import {Container, Button, Footer, Left, Right,} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const kHorizontalMargin = 5
const kVerticalMargin = 10

class Kitchen extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            starCount: 3.5
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <Container>
                <ParallaxScrollView
                    windowHeight={hp('40%')}
                    backgroundSource={require('../../../assets/Images/detail-food.jpg')}
                    navBarTitle='Zenas Kitchen'
                    userName='Zenas Kitchen'
                    userTitle='Arabic'
                    userImage='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6'
                    leftIcon={{name: 'angle-left', color: '#fff', size: 30, type: 'font-awesome'}}
                    leftIconOnPress={() => this.props.navigation.navigate("Result")}
                    rightIcon={{name: 'info-circle', color: '#fff', size: 20, type: 'font-awesome'}}
                    rightIconOnPress={() => this.props.navigation.navigate("KitchenProfile")}>
                    <ScrollableTabView
                        tabBarUnderlineStyle={'indigo'}
                        tabBarActiveTextColor={'indigo'}
                        renderTabBar={() => <ScrollableTabBar/>}
                        ref={(tabView) => {
                            this.tabView = tabView;
                        }}
                        collapsableBar={collapsableComponent}>
                        <ScrollView style={{marginLeft: 2, marginRight: 2, marginTop: 10,}} tabLabel="Top Sellers"
                                    contentContainerStyle={styles.gridView}>
                            {products.map((item) => this.createProductItem(item))}
                        </ScrollView>
                        <ScrollView tabLabel="Starters">
                            <View>
                                <ScrollView style={{marginLeft: 2, marginRight: 2, marginTop: 10,}}
                                            tabLabel="Top Sellers" contentContainerStyle={styles.gridView}>
                                    {products.map((item) => this.createProductItem(item))}
                                </ScrollView>
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel="Main Course">
                            <View>
                                <Text>Main Course</Text>
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel="Beverages">
                            <View>
                                <Text>Beverages</Text>
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel="Sides">
                            <View>
                                <Text>Sides</Text>
                            </View>
                        </ScrollView>
                        <ScrollView tabLabel="Promotion">
                            <View>
                                <Text>Promotion</Text>
                            </View>
                        </ScrollView>

                    </ScrollableTabView>

                </ParallaxScrollView>

                <Footer style={{backgroundColor: '#71C75C'}}>
                    <Button onPress={() => this.props.navigation.navigate("Bag")}
                            style={{backgroundColor: 'none', justifyContent: 'flex-start'}}>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{fontFamily: 'Poppins_bold', fontSize: 20, color: '#fff'}}>SEE CART</Text>
                            <Text style={{fontFamily: 'Poppins', fontSize: 20, color: '#fff', marginLeft: 10}}>Total:
                                AED 200</Text>
                        </View>
                    </Button>
                </Footer>
            </Container>
        );
    }

    presentSales() {

    }


    createProductItem(item) {
        return (
            <TouchableHighlight
                style={{
                    backgroundColor: 'white',
                    borderWidth: 0.5,
                    borderColor: 'rgba(0,0,0,0.1)',
                    shadowColor: 'black',
                    shadowOffset: {width: 0, height: 3},
                    shadowRadius: 4,
                    shadowOpacity: 0.1,
                }}
                activeOpacity={0.8}
                underlayColor={extraLightBackground}
                onPress={this.props.onCardPress}>

                <View style={[styles.gridItem]}>
                    <Image style={[{width: kWidth, height: null, flex: 3, resizeMode: 'cover', alignSelf: 'center',}]}
                           source={item.image}/>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        marginLeft: 5,
                        marginTop: 5,
                        marginBottom: 5,
                    }}>
                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginTop: 5,
                            marginRight: 5
                        }}>
                            <Text style={styles.price}>{item.title}</Text>
                            <Text style={styles.subTitlePrice}>{item.price}</Text>
                        </View>
                        <View style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginTop: 5,
                            marginRight: 5
                        }}>
                            <Button style={{backgroundColor: 'none'}} onPress={() => {
                                this.props.navigation.navigate("Product");
                            }}>
                                <Text style={{
                                    color: '#24EB80',
                                    fontFamily: 'Poppins_bold',
                                    fontSize: 12,
                                    fontWeight: "bold",
                                    marginTop: 10,
                                    justifyContent: 'flex-end',
                                    textAlign: 'right'
                                }}>Add to Cart</Text>
                            </Button>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

}

const products = [
    {
        id: 0,
        price: 'AED 40',
        title: 'Chicken Platter',
        subtitle: 'Indian',
        status: 'Open',
        image: require('../../../assets/Images/food1.png',)
    },
    {
        id: 1,
        price: 'AED 30',
        title: 'Kebab Grills',
        subtitle: 'Arabic',
        status: 'Closed',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 20',
        title: 'Chicken Tikka',
        subtitle: 'Desserts',
        status: 'Open',
        image: require('../../../assets/Images/food3.png',)
    },
    {
        id: 3,
        price: 'AED 10',
        title: 'Lamb Chops',
        subtitle: 'Sweets',
        status: 'Open',
        image: require('../../../assets/Images/food4.png',)
    },
    {
        id: 4,
        price: 'AED 50',
        title: 'Baby Back Ribs',
        subtitle: 'Beverages',
        status: 'Open',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 60',
        title: 'Spicy Chicken',
        subtitle: 'Indian',
        status: 'Closed',
        image: require('../../../assets/Images/food1.png',)
    },
    {
        id: 0,
        price: 'AED 40',
        title: 'Chicken Platter',
        subtitle: 'Indian',
        status: 'Open',
        image: require('../../../assets/Images/food1.png',)
    },
    {
        id: 1,
        price: 'AED 30',
        title: 'Kebab Grills',
        subtitle: 'Arabic',
        status: 'Closed',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 20',
        title: 'Chicken Tikka',
        subtitle: 'Desserts',
        status: 'Open',
        image: require('../../../assets/Images/food3.png',)
    },
    {
        id: 3,
        price: 'AED 10',
        title: 'Lamb Chops',
        subtitle: 'Sweets',
        status: 'Open',
        image: require('../../../assets/Images/food4.png',)
    },
    {
        id: 4,
        price: 'AED 50',
        title: 'Baby Back Ribs',
        subtitle: 'Beverages',
        status: 'Open',
        image: require('../../../assets/Images/food2.png',)
    },
    {
        id: 2,
        price: 'AED 60',
        title: 'Spicy Chicken',
        subtitle: 'Indian',
        status: 'Closed',
        image: require('../../../assets/Images/food1.png',)
    },
];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
    },
    gridView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    gridItem: {
        overflow: 'hidden',
        height: 150,
        backgroundColor: 'white',
        marginTop: 10,
        width: kWidth,

    },
});

export default Kitchen;
