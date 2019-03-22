import React, {Component} from "react";
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Label,
    Button,
    Text,
    Icon,
    Card,
    CardItem,
    Body,
    Right,
    Left,
    View,
    Toast
} from "native-base";

import {TouchableWithoutFeedback, Modal, StyleSheet} from "react-native";
import {cancelRequest, setCustomHeaders} from "../../apis";
import Spinner from "react-native-loading-spinner-overlay";

export default class Logins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "developer@bezingo.com",
            password: "123456",
            modalVisible: false,
            checkToken: false,
            loading: false,
        };
        // console.log(props);
    }

    componentWillReceiveProps(newProps) {
        if (
            !this.props.token &&
            newProps.token &&
            this.props.token !== newProps.token
        ) {
            setCustomHeaders([
                {
                    name: "Authorization",
                    value: newProps.token
                }
            ]);
            // this.props.navigation.navigate("Home");
        } else if (newProps.message) {
            Toast.show({
                text: "Please input valid credentials!!!",
                textStyle: {textAlign: "center"},
                type: "danger",
                duration: 3000
            });
        }
    }

    componentWillUnmount() {
        cancelRequest();
    }

    forgetpwd() {
        return (
            <Modal
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}
                visible={this.state.modalVisible}
                transparent={true}
                onRequestClose={() => this._onCloseModal()}
            >
                <TouchableWithoutFeedback
                    style={{flex: 1}}
                    onPress={() => {
                        this._onCloseModal();
                    }}
                >
                    <View style={{flex: 1, backgroundColor: "#fff"}}>
                        <View
                            style={{height: 350, backgroundColor: "#fff"}}
                            onStartShouldSetResponder={() => {
                                return true;
                            }}
                        >
                            <Card
                                style={{
                                    marginTop: 100,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    backgroundColor: "#fff"
                                }}
                            >
                                <CardItem header style={{backgroundColor: "#fff"}}>
                                    <Body>
                                    <Text
                                        style={{
                                            fontWeight: "500",
                                            fontSize: 16,
                                            fontFamily: "Poppins",
                                            alignSelf: "center",
                                            paddingBottom: 10,
                                        }}
                                    >
                                        Forget Password
                                    </Text>
                                    <Text style={{fontFamily: "Poppins", fontSize: 14}}>
                                        Check your email. After you enter your email, an email
                                        will be sent to your Issuu-associated email address. Click
                                        Set a new password, and you will be redirected to a page
                                        where you can enter a new password.
                                    </Text>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                    <Item floatingLabel>
                                        <Label>Email Id</Label>
                                        <Input
                                            text={this.state.email}
                                            onChangeText={text => {
                                                this.setState({
                                                    email: text
                                                });
                                            }}
                                        />
                                    </Item>
                                    </Body>
                                </CardItem>
                                <CardItem footer>
                                    <Left>
                                        <Button style={{borderColor: "#17D9D1", backgroundColor: "#17D9D1"}} small
                                                bordered onPress={() => this._onCloseModal()}>
                                            <Text style={{color: "#fff"}}>Cancel</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Button style={{borderColor: "#17D9D1", backgroundColor: "#17D9D1"}} small
                                                bordered onPress={() => {
                                        }}>
                                            <Text style={{color: "#fff"}}>Confirm</Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }

    _onCloseModal() {
        this.setState({
            modalVisible: false
        });
    }

    render() {
        return (
            <Container style={{marginTop: 100, borderColor: '#fff', backgroundColor: '#fff'}}>
                <Spinner visible={this.state.loading}/>
                <Content>
                    <Content padder>
                        <Card transparent>
                            <CardItem style={{borderColor: '#fff',}}>
                                <Content contentContainerStyle={{}}>
                                    <CardItem style={{borderColor: '#fff',}}>
                                        <Text style={{fontSize: 40, fontFamily: 'Poppins_bold', color: '#000',}}>Sign
                                            In</Text>
                                    </CardItem>
                                </Content>
                            </CardItem>
                            <Form>
                                <CardItem>
                                    <Body>
                                    <Item floatingLabel>
                                        <Label>Email Id / Mobile Number</Label>
                                        <Input
                                            autoCapitalize="none"
                                            value={this.state.email}
                                            onChangeText={text => {
                                                this.setState({
                                                    email: text
                                                });
                                            }}
                                        />
                                    </Item>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Body>
                                    <Item floatingLabel style={{paddingBottom: 20,}}>
                                        <Label>Password</Label>
                                        <Input
                                            secureTextEntry={true}
                                            value={this.state.password}
                                            onChangeText={text => {
                                                this.setState({
                                                    password: text
                                                });
                                            }}
                                        />
                                    </Item>
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            this.setState({
                                                modalVisible: true
                                            });
                                        }}
                                    >
                                        <Text
                                            numberOfLines={1}
                                            style={{
                                                fontFamily: "Poppins",
                                                fontSize: 14,
                                                paddingTop: 5,
                                                marginLeft: 190,
                                                color: '#17D9D1'
                                            }}
                                        >
                                            Forgot password?
                                        </Text>
                                    </TouchableWithoutFeedback>
                                    </Body>
                                </CardItem>
                                <CardItem>
                                    <Content>
                                        <Button style={styles.primarybtn}
                                                block
                                                onPress={() => {
                                                    this.props.loginUser({
                                                        obj: this,
                                                        email: this.state.email,
                                                        pass: this.state.password
                                                    });
                                                    // this.props.navigation.navigate("Home");
                                                }}
                                        >
                                            <Text
                                                style={{fontFamily: 'Poppins_bold', fontSize: 16, fontWeight: "bold"}}>Sign
                                                In</Text>
                                        </Button>


                                    </Content>
                                </CardItem>
                            </Form>
                        </Card>
                    </Content>
                </Content>
                <View>{this.forgetpwd()}</View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    primarybtn: {
        backgroundColor: '#17D9D1',
        shadowColor: "rgba(23, 217, 234, 0.29)",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 1,
        shadowRadius: 7
    },
    poppins: {
        fontFamily: 'Poppins'
    },
    poppins_medium: {
        fontFamily: 'Poppins_medium'
    },
    poppins_bold: {
        fontFamily: 'Poppins_bold'
    },
    underline: {
        color: '#17D9D1',
        paddingLeft: 5,
        textDecorationLine: "underline",
        fontSize: 14
    }
})
