import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Switch
} from 'react-native';
import ProfileViewParallax from 'react-native-parallax-scrollview';
import {
    Container,
    List,
    ListItem,
    Content,
    Button,
    Left,
    Right,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {fetch, GET} from "../../apis";
import Setting from "../common/Setting";

const kHorizontalMargin = 20

class Account extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props)
        this.state = {
            starCount: 3.5,
            account: {
                navBarTitle: '',
                userTitle: '',
                userImage: '../../../assets/Images/avatar.jpg',
                backgroundSource: {uri: '../../../assets/Images/background.png'},
                userMobile: '',
                userName: '',
                kitchenStatus: false,
            },
            closeKitchen: false,
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

    componentDidMount(): void {
        this.loadData();
    }

    loadData(): void {
        fetch(GET, "json.php", {
            kitchen: Setting.kit_id,
        }).then(response => {
            let cnt = response.length;
            let account = this.state.account;
            if (cnt > 0) {
                let data = response[0];
                if (data.name != '') {
                    account.navBarTitle = data.name;
                }
                if (data.cuisine != '') {
                    account.userTitle = data.cuisine;
                }
                if (data.klogo != '') {
                    account.userImage = data.klogo;
                }
                if (data.cover != '') {
                    account.backgroundSource = {uri: data.cover};
                }
                if (data.phone != '') {
                    account.userMobile = data.phone;
                }
                if (data.owner_name != '') {
                    account.userName = data.owner_name;
                }
                if (data.kitchen_status != 'Banned') {
                    account.kitchenStatus = true;
                }
            }
            this.setState({
                account: account
            })
            console.log(this.state.account);
        }).catch(err => {

        });
    }

    closeKitchen(closed): void {
        this.setState({
            closeKitchen: closed,
        });
        if (closed) {
            fetch(GET, "json.php", {//kit=5&close=1
                kit: Setting.kit_id,
                close: 1,
            });
        }
    }

    render() {
        const account = this.state.account;
        return (
            <Container>
                <ProfileViewParallax
                    windowHeight={hp('40%')}
                    // backgroundSource={require(account.backgroundSource)}
                    backgroundSource={account.backgroundSource}
                    navBarTitle={account.navBarTitle}
                    userName={account.userName}
                    userTitle={account.userTitle}
                    userMobile={account.userMobile}
                    userImage={account.userImage}
                    // leftIcon={{name: 'angle-left', color: '#fff', size: 30, type: 'font-awesome'}}

                >
                    <ScrollView style={{flex: 1,}}>
                        <Content>
                            <List>
                                <ListItem onPress={() => this.props.navigation.navigate("Edit Profile")}>
                                    <Left>
                                        <Text style={styles.listtext}>View Account</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevron-right" />
                                    </Right>
                                </ListItem>
                                <ListItem
                                    // onPress={() => this.props.navigation.navigate("ChangePassword")}
                                >
                                    <Left>
                                        <Text style={styles.listtext}>Close Kitchen</Text>
                                    </Left>
                                    <Right>
                                        <Switch
                                            enabled
                                            value={this.state.closeKitchen}
                                            onValueChange={(value) => this.closeKitchen(value)}
                                        />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("Earnings")}>
                                    <Left>
                                        <Text style={styles.listtext}>Earnings</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevron-right" />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ManageAddress")}>
                                    <Left>
                                        <Text style={styles.listtext}>Address</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevron-right" />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ChangePassword")}>
                                    <Left>
                                        <Text style={styles.listtext}>Change Password</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevron-right" />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("Message")}>
                                    <Left>
                                        <Text style={styles.listtext}>Message</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevron-right" />
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("Reviews")}>
                                    <Left>
                                        <Text style={styles.listtext}>Reviews</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevron-right" />
                                    </Right>
                                </ListItem>
                            </List>
                        </Content>
                        <Content style={{marginBottom: 40, marginLeft: 20, marginRight: 20}}>
                            <Button onPress={() => this.props.navigation.navigate("Login")}
                                    style={{marginTop: 20, width: '100%', justifyContent: 'center'}} danger><Text
                                style={styles.buttontext}>SignOut</Text></Button>
                        </Content>
                    </ScrollView>
                </ProfileViewParallax>
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
});

export default Account;
