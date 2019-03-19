import React, { Component } from "react";
import { Dimensions, FlatList, StyleSheet,Image, TouchableHighlight,  Modal, DatePickerAndroid, DatePickerIOS } from "react-native";
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
  Right,
  Toast,
  List,
  ListItem,
  Item,
  Input,
  View,
  Thumbnail,
  Header,
} from "native-base";
let { height } = Dimensions.get("window");
const cards = [
  {
    kitchen: "Zena Kitchen",
    total: "AED 900",
    items: "6",
    logo: require("../../../assets/Images/food1.png")
  },
];
class OrderPlaced extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      showToast: false
     };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

acceptButton() {
  this.props.navigation.navigate("Orders");
  Toast.show({
    text: "Order Accepted!",
    type: "success",
    duration: 4000,
    buttonText: "Okay"})

}


  static navigationOptions = {
    header: {
      visible: false
    }

  };
  render() {
    return (
      <Container style={{ backgroundColor: "#F8F8F8" }}>

        {/* Header */}

        <Header style={{ backgroundColor: "white" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Orders")}
            >
              <Image source={require('../../../assets/Images/back.png')} style={{ height: 20, width: 20, resizeMode:'contain'}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "black" }}>Order</Title>
          </Body>
          <Right />
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
      {/* End Header */}  

      {/* Modal for Accepted */}  
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22, padding:10}}>
            <View style={{marginTop : 20, marginLeft:10}}>
            <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Close</Text>
              </TouchableHighlight>
              <View>
                <View style={{ marginTop:20, marginBottom:20, alignContent:'center', justifyContent:'center'}}>
                  <Text style={{textAlign:'center', fontSize:22, fontWeight:'bold'}}>
                    Select Pickup Time for the Delivery
                  </Text>
                  </View>
              <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        <Button onPress={this.acceptButton.bind(this)} style={{marginTop:10, width:'100%', alignContent:'center', justifyContent:'center'}} success><Text>Confirm Pickup Time</Text></Button>
              </View>
            </View>
          </View>
        </Modal>
        {/* End Modal for Accepted */}  


          {/* Customer information card */}  
          <Content >
              <Card style={{ 
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10}}>
                    <CardItem bordered>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{ marginRight: 120, marginTop:10 }}>Customer Information</Text>
                            
                        </View>
                    </CardItem>
                    <CardItem bordered>
                        
                        <Body style={{ alignItems: "flex-start", paddingTop: 10, marginRight:-50, }}>
                      <Text style={styles.listtext}>Customer Name :</Text>
                      <Text style={styles.listprice}>John Doe</Text>
                      <Text style={styles.listtext}>Address :</Text>
                      <Text style={styles.listprice}>Dubai Motor City, Dubai</Text>
                      <Text style={styles.listtext}>Expected Delivery :</Text>
                      <Text style={styles.listprice}>Tuesday, 31st Dec, 9:00pm</Text>
                      <Text style={styles.listtext}>Pickup Time:</Text>
                      <Text style={styles.listprice}>Tuesday, 31st Dec, 7:30pm</Text>
                      <Text style={styles.listtext}>Est Delivery Time:</Text>
                      <Text style={styles.listprice}>1 hour</Text>
                    </Body>
                    <Right>
                      <Body
                        style={{ alignItems: "flex-start", paddingTop: 10 }}
                      > 
                      </Body>
                    </Right>
                    </CardItem>
              </Card>

              {/* End Customer information card */}  

              {/* Complete Order */}  
            <FlatList
              data={cards}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  style={{
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10
                  }}
                >
                  <CardItem header bordered>
                    <Left>
                      <Thumbnail circular large source={item.logo} />
                    </Left>
                    <Body style={{ alignItems: "flex-start", paddingTop: 10, marginRight:-50, }}>
                      <Text style={styles.listtext}>Kitchen :</Text>
                      <Text style={styles.listtext}>Items :</Text>
                      <Text style={styles.listtext}>Total :</Text>
                      <Text style={styles.listtext}>Payment :</Text>
                    </Body>
                    <Right>
                      <Body
                        style={{ alignItems: "flex-start", paddingTop: 10 }}
                      >
                        <Text style={styles.listprice}>{item.kitchen}</Text>
                        <Text style={styles.listprice}>{item.items}</Text>
                        <Text style={styles.listprice}>{item.total}</Text>
                        <Text style={styles.listprice}>Cash</Text>
                      </Body>
                    </Right>
                  </CardItem>
                  <CardItem bordered>
                    <Left />
                    <Text style={{ fontFamily: 'Poppins_bold' }}>
                      Items
                    </Text>

                    <Right />
                  </CardItem>
                  <CardItem style={{ height: height - 290 }}>
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
            {/* End Complete Order */}  


              {/* Special Comments on Orders */}  
                <Card style={{ 
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10}}>
                    <CardItem bordered>
                            <Content style={{flexDirection:'row'}}>    
                                <Text style={{ marginRight: 120 }}>Special Requests</Text>
                            </Content>
                    </CardItem>
                    <CardItem bordered>
                        <Content style={{flexDirection:'row'}}>    
                                <Item style={{marginTop:20}}>
                                    <Input style={{ color: "#000", }} placeholder='Type your special request here...' />
                                </Item>
                        </Content>
                    </CardItem>
                </Card>

             {/* End Special Comments on Orders */}  

             {/* Price Card */}  

                <Card style={{ 
                    elevation: 3,
                    marginBottom: 15,
                    marginTop: 10}}>
                    <CardItem bordered>
                        <Content> 
                            <List>
                            <ListItem style={{marginTop:20, flexDirection:'row'}}>   
                               <Text style={{marginLeft:5}}>Sub Total</Text> <Text style={{marginLeft:30}}>AED 900.00</Text>
                            </ListItem>
                            <ListItem style={{marginTop:20, flexDirection:'row'}}>   
                                <Text style={{marginLeft:5}}>Delivery Fees</Text> <Text style={{marginLeft:30}}>AED 50.00</Text>
                            </ListItem>
                            <ListItem style={{marginTop:20, flexDirection:'row'}}>   
                                <Text style={{marginLeft:5, fontFamily:'Poppins_bold'}}>Total Amount</Text> <Text style={{marginLeft:30, fontFamily:'Poppins_bold'}}>AED 950.00</Text>
                            </ListItem>
                            </List>
                        </Content>
                    </CardItem>
                </Card>
                   
                {/* End Price Card */}  

                 {/* Action Block */}  
                <Content style={{marginBottom: 40}}>
                <Button onPress={() => this.props.navigation.navigate("OrderPlaced")} style={{marginTop:10, width:'100%', alignContent:'center', justifyContent:'center'}} onPress={() => {
            this.setModalVisible(true);}} success><Text>Accept</Text></Button>
                <Button onPress={() => this.props.navigation.navigate("Rejected")} style={{marginTop:10, width:'100%', alignContent:'center', justifyContent:'center'}} danger><Text>Reject</Text></Button>
                <Button onPress={() => this.props.navigation.navigate("Message")} style={{marginTop:10, width:'100%', alignContent:'center', justifyContent:'center'}} info><Text>Message</Text></Button>
                </Content>
                 {/* End Action Block */}  
  
          </Content>
        </View>
      </Container>
    );
  }


  createListable(item){
    return(
      <ListItem style={{ marginTop:10}}>
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
  {id:0, price:'AED 40', title:'Chicken Platter', subtitle:'Indian', quantity:'2', image:require('../../../assets/Images/food1.png',)},
  {id:1, price:'AED 30', title:'Kebab Grills', subtitle:'Arabic', quantity:'1', image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 20', title:'Chicken Tikka', subtitle:'Desserts', quantity:'1', image:require('../../../assets/Images/food3.png', )},
  {id:3, price:'AED 10', title:'Lamb Chops', subtitle:'Sweets',  quantity:'2',image:require('../../../assets/Images/food4.png',)},
  {id:4, price:'AED 50', title:'Baby Back Ribs', subtitle:'Beverages', quantity:'1',image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 60', title:'Spicy Chicken', subtitle:'Indian', quantity:'1', image:require('../../../assets/Images/food1.png',)},
  {id:0, price:'AED 40', title:'Chicken Platter', subtitle:'Indian', quantity:'1', image:require('../../../assets/Images/food1.png',)},
  {id:1, price:'AED 30', title:'Kebab Grills', subtitle:'Arabic', quantity:'3', image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 20', title:'Chicken Tikka', subtitle:'Desserts', quantity:'1', image:require('../../../assets/Images/food3.png', )},
  {id:3, price:'AED 10', title:'Lamb Chops', subtitle:'Sweets',  quantity:'2',image:require('../../../assets/Images/food4.png',)},
  {id:4, price:'AED 50', title:'Baby Back Ribs', subtitle:'Beverages', quantity:'1',image:require('../../../assets/Images/food2.png', )},
  {id:2, price:'AED 60', title:'Spicy Chicken', subtitle:'Indian', quantity:'1', image:require('../../../assets/Images/food1.png',)},
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
export default OrderPlaced;