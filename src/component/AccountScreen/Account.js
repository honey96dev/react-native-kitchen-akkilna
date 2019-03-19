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
                <ProfileViewParallax
                    windowHeight={480 * 0.4}
                    backgroundSource={require('../../../assets/Images/profile.png')}
                    navBarTitle='Khalid Hashim'
                    userName='Zenas Kitchen'
                    userTitle='khalid@akkilna.com'
                    userMobile='+97152383893'
                    userImage='https://randomuser.me/api/portraits/men/46.jpg'
                    leftIcon={{name: 'angle-left', color: '#fff', size: 30, type: 'font-awesome'}}

                >
                    <ScrollView style={{flex: 1,}}>
                        <Content>
                            <List>
                                <ListItem onPress={() => this.props.navigation.navigate("Edit Profile")}>
                                    <Left>
                                        <Text style={styles.listtext}>View Account</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ChangePassword")}>
                                    <Left>
                                        <Text style={styles.listtext}>Close Kitchen</Text>
                                    </Left>
                                    <Right>
                                        <Switch enabled/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("Earnings")}>
                                    <Left>
                                        <Text style={styles.listtext}>Earnings</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ManageAddress")}>
                                    <Left>
                                        <Text style={styles.listtext}>Address</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("ChangePassword")}>
                                    <Left>
                                        <Text style={styles.listtext}>Change Password</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("Message")}>
                                    <Left>
                                        <Text style={styles.listtext}>Message</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
                                    </Right>
                                </ListItem>
                                <ListItem onPress={() => this.props.navigation.navigate("Reviews")}>
                                    <Left>
                                        <Text style={styles.listtext}>Reviews</Text>
                                    </Left>
                                    <Right>
                                        <Icon name="chevon-right"/>
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