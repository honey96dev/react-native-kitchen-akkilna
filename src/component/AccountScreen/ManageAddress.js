import React, {Component} from "react";
import {Dimensions, FlatList, StyleSheet, Image} from "react-native";
import {
    Container,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Title,
    Text,
    Body,
    Left,
    Right,
    List,
    ListItem,
    Item,
    Label,
    Input,
    View,
    Form,

    Thumbnail,
    Header,
    CheckBox
} from "native-base";
import Spinner from 'react-native-number-spinner';
import {fetch, GET} from "../../apis";
import Setting from "../common/Setting";

let {height} = Dimensions.get("window");

class ManageAddress extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            address: '',
            area: '',
            street: '',
            building: '',
            aptNo: '',
            landmarks: '',
            mobile: '',
            contact: '',
        };
    }

    componentDidMount() {
        this.loadData();
    }

    loadData(): void {
        fetch(GET, "json.php", {
            kitchen: Setting.kit_id,
        }).then(response => {
            const cnt = response.length;
            if (cnt > 0) {
                const data = response[0];
                this.setState({
                    address: data.address,
                    area: data.area,
                    street: data.street,
                    building: data.building,
                    aptNo: data.villa,
                    landmarks: data.landmarks,
                    mobile: data.owner_contact,
                    contact: data.phone,
                })
            }
            console.log(this.state.account);
        }).catch(err => {

        });
    }

    render() {
        let addArr = [];
        if (this.state.landmarks && this.state.landmarks.length != 0) {
            addArr.push(this.state.landmarks);
        }
        if (this.state.aptNo && this.state.aptNo.length != 0) {
            addArr.push(this.state.aptNo);
        }
        if (this.state.building && this.state.building.length != 0) {
            addArr.push(this.state.building);
        }
        if (this.state.street && this.state.street.length != 0) {
            addArr.push(this.state.street);
        }
        if (this.state.area && this.state.area.length != 0) {
            addArr.push(this.state.area);
        }
        const address = addArr.join(',');
        return (
            <Container style={{backgroundColor: "#F8F8F8"}}>
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
                    <Title style={{color: "black"}}>Manage Address</Title>
                    </Body>
                    <Right>
                    </Right>
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
                            marginTop: 10
                        }}>
                            <CardItem bordered>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 250}}>Home</Text>
                                    <Button onPress={() => this.props.navigation.navigate("EditAddress")}
                                            style={{backgroundColor: 'none'}}><Text
                                        style={{fontFamily: 'Poppins', color: '#71C75C'}}>Edit</Text></Button>
                                </View>
                            </CardItem>
                            <CardItem bordered>
                                <View>
                                    <Text >{this.state.address}</Text>
                                    <Text >{address}</Text>
                                    <Text >Mobile Number: {this.state.mobile}</Text>
                                    <Text >Landline: {this.state.contact}</Text>
                                </View>
                            </CardItem>
                        </Card>
                    </Content>
                </View>
            </Container>
        );
    }
}


export default ManageAddress;
