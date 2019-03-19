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
    Button,
    Left,
    Header,
    DatePicker,
    Right,
} from 'native-base';
const kHorizontalMargin = 20

class ChangePassword extends Component {
    static navigationOptions = {
        header: {
          visible: false
        }
      };
      
    constructor(props){
        super(props);
        this.state = { chosenDate: new Date() };
        this.setDate = this.setDate.bind(this);
      }
      setDate(newDate) {
        this.setState({ chosenDate: newDate });
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
          <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Account")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Edit Profile</Title>
          </Body>
          <Right />
        </Header>
            <Container>
  <ScrollView style={{flex: 1,}}>
  <Content scrollEnabled={false}>
          <List>
            <ListItem>
                    <Input placeholder="Current Password" style={styles.listtext} />
            </ListItem>
            <ListItem >
                  <Input placeholder="New Password" style={styles.listtext} />  
            </ListItem>
            <ListItem >
            <Input placeholder="Confirm New Password" style={styles.listtext} />  
            </ListItem>
          </List>
        </Content>
        <Content style={{marginBottom: 40, marginLeft: 20, marginRight: 20}}>
                <Button onPress={() => this.props.navigation.navigate("Account")} style={{marginTop:20, width:'100%', justifyContent:'center'}} success><Text style={styles.buttontext}>Save</Text></Button>
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