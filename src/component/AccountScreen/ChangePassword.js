import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    Container,
    List,
    Body,
    Title,
    Input,
    ListItem,
    Content,
    Switch,
    Item,
    Card,
    CardItem,
    Button,
    Left,
    Header,
    DatePicker,
    Right, Toast, Label, Form,
} from 'native-base';
import {fetch, GET} from "../../apis";
import Setting from "../common/Setting";
import {LOGIN_FAILURE, LOGIN_SUCCESS} from "../../utils";
import Spinner from "react-native-loading-spinner-overlay";

const kHorizontalMargin = 20

class ChangePassword extends Component {
    static navigationOptions = {
        header: {
            loading: false,
            visible: false,
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            chosenDate: new Date(),
            oldPassword: '',
            newPassword: '',
            newPassword2: '',
        };
        this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({chosenDate: newDate});
    }


    handleIndexChange = (index) => {
        this.setState({
            ...this.state,
            selectedIndex: index,
        });
    }

    onValueChange2(value: string) {
        this.setState({
            selected2: value
        });
    }

    savePassword() {
        let oldPwd = this.state.oldPassword;
        let newPwd = this.state.newPassword;
        let newPwd2 = this.state.newPassword2;
        if (oldPwd == '' || newPwd == '' || newPwd2 == '') {
            return;
        }
        if (newPwd != newPwd2) {
            Toast.show({
                text: "The passwords you entered don't match!",
                textStyle: {textAlign: "center"},
                type: "danger",
                duration: 3000
            });
            return;
        }

        this.setState({loading: true});
        const self = this;
        fetch(GET, "json.php", {
            kit: Setting.kit_id,
            pass: 1,
            current: oldPwd,
            new: newPwd,
        }).then(response => {
            const result = response[0];
            console.log(result);
            if (result.Status == 'Success') {
                self.setState({loading: false});
                Toast.show({
                    text: result.Msg,
                    textStyle: {textAlign: "center"},
                    type: "success",
                    duration: 3000
                });
                this.props.navigation.navigate("Account");
            } else {
                self.setState({loading: false});
                Toast.show({
                    text: result.Msg,
                    textStyle: {textAlign: "center"},
                    type: "danger",
                    duration: 3000
                });
                // alert(result.error_msg, "Error");
            }
        }).catch(err => {
            console.log(err);
            self.setState({loading: false});
            Toast.show({
                text: 'Server error!',
                textStyle: {textAlign: "center"},
                type: "danger",
                duration: 3000
            });
        });
        // this.props.navigation.navigate("Account");
    }

    render() {
        return (
            <Container>
                <Spinner visible={this.state.loading}/>
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
                    <Title style={{color: "black"}}>Edit Profile</Title>
                    </Body>
                    <Right/>
                </Header>
                <Container>
                    <ScrollView style={{flex: 1,}}>
                        <Content scrollEnabled={false}>
                            <Form>
                                <Card transparent>
                                    <CardItem>
                                        <Body>
                                        <Item floatingLabel>
                                            <Label>Current Password</Label>
                                            <Input
                                                // placeholder="Current Password"
                                                secureTextEntry={true}
                                                style={styles.listtext}
                                                value={this.state.oldPassword}
                                                onChangeText={text => {this.setState({oldPassword: text});}}
                                            />
                                        </Item>
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                        <Item floatingLabel>
                                            <Label>New Password</Label>
                                            <Input
                                                // placeholder="New Password"
                                                secureTextEntry={true}
                                                style={styles.listtext}
                                                value={this.state.newPassword}
                                                onChangeText={text => {this.setState({newPassword: text});}}
                                            />
                                        </Item>
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                        <Item floatingLabel>
                                            <Label>Confirm New Password</Label>
                                            <Input
                                                // placeholder="Confirm New Password"
                                                secureTextEntry={true}
                                                style={styles.listtext}
                                                value={this.state.newPassword2}
                                                onChangeText={text => {this.setState({newPassword2: text});}}
                                            />
                                        </Item>
                                        </Body>
                                    </CardItem>
                                    <CardItem>
                                        <Button
                                            // style={styles.primarybtn}
                                            block
                                            onPress={() => this.savePassword()}
                                            style={{marginTop: 20, width: '100%', justifyContent: 'center'}} success>
                                            <Text
                                                style={styles.buttontext}>Save</Text>
                                        </Button>
                                    </CardItem>
                                </Card>
                            </Form>
                        </Content>
                    </ScrollView>
                </Container>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
    },
    listtext: {
        fontFamily: 'Poppins',
        fontSize: 16,
    },
    listprice: {
        fontFamily: 'Poppins_bold',
        fontSize: 16,
    },
    buttontext: {
        fontFamily: 'Poppins_bold',
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    },
    tabsContainerStyle: {
        borderColor: '#640AB6',
    },
    tabStyle: {
        borderColor: '#640AB6',
    },
    tabTextStyle: {
        fontFamily: 'Poppins',
        color: '#640AB6',
    },
    activeTabStyle: {
        backgroundColor: '#640AB6',
    },
    activeTabTextStyle: {
        //custom styles
    },
    tabBadgeContainerStyle: {
        //custom styles
    },
    activeTabBadgeContainerStyle: {
        //custom styles
    },
    tabBadgeStyle: {
        //custom styles
    },
    activeTabBadgeStyle: {
        //custom styles
    },
});

export default ChangePassword;