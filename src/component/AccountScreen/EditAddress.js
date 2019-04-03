import React, {Component} from "react";
import {Dimensions, TouchableOpacity, StyleSheet, Image} from "react-native";
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
    Label, Toast,
    Spinner
} from "native-base";
// import {MapView} from "expo";
import {fetch, GET, POST} from "../../apis";
import Setting from "../common/Setting";

let {height} = Dimensions.get("window");


export default class EditAddress extends Component {

    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
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
        this.setState({
            loading: true,
        });
        const self = this;
        fetch(GET, "json.php", {
            kitchen: Setting.kit_id,
        }).then(response => {
            self.setState({
                loading: false,
            });
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
            self.setState({
                loading: false,
            });
        });
    }

    updateData() {
        this.setState({loading: true});
        const self = this;
        fetch(GET, "json_update.php", {
            kit: Setting.kit_id,
            address: this.state.address,
            area: this.state.area,
            city: '',
            street: this.state.street,
            building: this.state.building,
            Apt_no: this.state.aptNo,
            landmarks: this.state.landmarks,
            owner_contact: this.state.mobile,
            phone: this.state.contact,
        }).then(response => {
            self.setState({loading: false});
            const result = response[0];
            console.log(result);
            if (result.error == false) {
                self.setState({loading: false});
                Toast.show({
                    text: 'Success!',
                    textStyle: {textAlign: "center"},
                    type: "success",
                    duration: 3000
                });
                this.props.navigation.navigate("Account");
            } else {
                self.setState({loading: false});
                Toast.show({
                    text: response.user[0].error_msg,
                    textStyle: {textAlign: "center"},
                    type: "danger",
                    duration: 3000
                });
                // alert(result.error_msg, "Error");
            }
        }).catch(err => {
            console.log(err);
            self.setState({loading: false});
            // Toast.show({
            //     text: 'Server error!',
            //     textStyle: {textAlign: "center"},
            //     type: "danger",
            //     duration: 3000
            // });
        });
    }

    render() {
        return (
            <Container style={{backgroundColor: "#F8F8F8"}}>
                {/*<Spinner visible={this.state.loading}/>*/}
                <Header style={{backgroundColor: "white"}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("ManageAddress")}
                        >
                            <Image source={require('../../../assets/Images/back.png')}
                                   style={{height: 20, width: 20, resizeMode: 'contain'}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={{color: "black"}}>Edit Address</Title>
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
                            marginTop: 10
                        }}>
                            <CardItem bordered>
                                <Content style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 250}}>Delivery Address</Text>
                                </Content>
                            </CardItem>
                            <CardItem bordered>

                            </CardItem>
                        </Card>

                        <Card style={{
                            elevation: 3,
                            marginBottom: 15,
                            marginTop: 10
                        }}>
                            <CardItem bordered>
                                <Content style={{flexDirection: 'row'}}>
                                    <Text style={{marginRight: 250}}>Edit Address</Text>
                                </Content>
                            </CardItem>
                            <CardItem style={{width: '100%'}} bordered>
                                <Content style={{flexDirection: 'row', width: '100%'}} scrollEnabled={false}
                                         enableAutomaticScroll={false} enableResetScrollToCoords={false}>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{color: '#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Address
                                            Title</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Title'
                                            value={this.state.address}
                                            onChangeText={text => {this.setState({address: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{
                                            color: '#000',
                                            fontFamily: 'Poppins_medium',
                                            fontSize: 14
                                        }}>Area</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Area'
                                            value={this.state.area}
                                            onChangeText={text => {this.setState({area: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{
                                            color: '#000',
                                            fontFamily: 'Poppins_medium',
                                            fontSize: 14
                                        }}>Street</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Street'
                                            value={this.state.street}
                                            onChangeText={text => {this.setState({street: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{
                                            color: '#000',
                                            fontFamily: 'Poppins_medium',
                                            fontSize: 14
                                        }}>Building</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Building'
                                            value={this.state.building}
                                            onChangeText={text => {this.setState({building: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{color: '#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Apartment
                                            or Villa No</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Apartment or Villa No'
                                            value={this.state.aptNo}
                                            onChangeText={text => {this.setState({aptNo: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{
                                            color: '#000',
                                            fontFamily: 'Poppins_medium',
                                            fontSize: 14
                                        }}>Landmarks</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Landmarks'
                                            value={this.state.landmarks}
                                            onChangeText={text => {this.setState({landmarks: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{color: '#000', fontFamily: 'Poppins_medium', fontSize: 14}}>Mobile
                                            No</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Mobile No'
                                            value={this.state.mobile}
                                            onChangeText={text => {this.setState({mobile: text});}}
                                        />
                                    </Item>
                                    <Item style={{width: '100%'}}>
                                        <Label style={{
                                            color: '#000',
                                            fontFamily: 'Poppins_medium',
                                            fontSize: 14
                                        }}>Landline</Label>
                                        <Input
                                            style={{fontSize: 13}}
                                            placeholder='Building'
                                            value={this.state.contact}
                                            onChangeText={text => {this.setState({contact: text});}}
                                        />
                                    </Item>
                                </Content>
                            </CardItem>
                            <CardItem bordered>

                            </CardItem>
                        </Card>
                        <Content style={{marginBottom: 40}}>
                            <Button onPress={() => this.updateData()}
                                    style={{marginTop: 10, width: '100%'}} success><Text style={{marginLeft: 120}}>Save
                                Address</Text></Button>
                        </Content>


                    </Content>
                </View>

            </Container>
        );
    }
}
