import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text,} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
    Body,
    Button,
    Container,
    Content,
    DatePicker,
    Header,
    Input,
    Item,
    Left,
    List,
    ListItem,
    Right,
    Switch,
    Title,
} from 'native-base';

const kHorizontalMargin = 20

class EditProfile extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    };

    constructor(props) {
        super(props);
        this.state = {chosenDate: new Date()};
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


    render() {
        return (
            <Container>
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
                            <List>
                                <ListItem>
                                    <Input placeholder="Full Name" style={styles.listtext}/>
                                </ListItem>
                                <ListItem>
                                    <Input placeholder="Email Address" style={styles.listtext}/>
                                </ListItem>
                                <ListItem>
                                    <Content>
                                        <DatePicker
                                            defaultDate={new Date(2018, 4, 4)}
                                            minimumDate={new Date(2018, 1, 1)}
                                            maximumDate={new Date(2018, 12, 31)}
                                            locale={"en"}
                                            timeZoneOffsetInMinutes={undefined}
                                            modalTransparent={false}
                                            animationType={"fade"}
                                            androidMode={"default"}
                                            placeHolderText="Select date"
                                            textStyle={{color: "green"}}
                                            placeHolderTextStyle={{color: "#d3d3d3"}}
                                            onDateChange={this.setDate}
                                        />
                                        <Text>
                                            Date of Birth: {this.state.chosenDate.toString().substr(4, 12)}
                                        </Text>
                                    </Content>
                                </ListItem>
                                <ListItem>
                                    <Item style={{
                                        justifyContent: 'center',
                                        marginTop: 10,
                                        marginBottom: 10,
                                        borderBottomColor: '#fff'
                                    }}>
                                        <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
                                                             tabStyle={styles.tabStyle}
                                                             tabTextStyle={styles.tabTextStyle}
                                                             activeTabStyle={styles.activeTabStyle}
                                                             activeTabTextStyle={styles.activeTabTextStyle}
                                                             allowFontScaling={false}
                                                             values={['Male', 'Female']}
                                                             selectedIndex={this.state.selectedIndex}
                                                             onTabPress={this.handleIndexChange}
                                        />
                                    </Item>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                    <Text>Newsletter Subscription</Text>
                                    </Body>
                                    <Right>
                                        <Switch value={false}/>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Body>
                                    <Text>SMS Subscription</Text>
                                    </Body>
                                    <Right>
                                        <Switch value={false}/>
                                    </Right>
                                </ListItem>
                            </List>
                        </Content>
                        <Content style={{marginBottom: 40, marginLeft: 20, marginRight: 20}}>
                            <Button onPress={() => this.props.navigation.navigate("Account")}
                                    style={{marginTop: 20, width: '100%', justifyContent: 'center'}} success><Text
                                style={styles.buttontext}>Save</Text></Button>
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

export default EditProfile;
