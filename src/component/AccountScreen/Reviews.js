import React, { Component } from "react";
import { Dimensions, StyleSheet, Image, ScrollView, } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Title,
  Text,
  Body,
  Left,
  Right,
  View,
  Header,
  Thumbnail
} from "native-base";
import StarRating from 'react-native-star-rating';
let { height } = Dimensions.get("window");

const cards = [
  {
    date: "21/12/2018",
    message: "Great expereince enjoyed the expereince good food",
    order_no: "3421931",
    name: "David Beckham",
    stars: "AED 900",
    avatar: require("../../../assets/Images/food1.png")
  },
  {
    date: "21/12/2018",
    message: "Great expereince enjoyed the expereince good food",
    order_no: "30301931",
    name: "Jim Jones",
    stars: "1",
    avatar: require("../../../assets/Images/food2.png")
  }
];
export default class Reviews extends Component {

  constructor(props){
    super(props)


    this.state = {
        starCount: 3.5
        
      };
    }
   
    


  render() {
    return (
      <Container style={{ backgroundColor: "white" }}>
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
            <Title style={{ color: "black" }}>Reviews</Title>
          </Body>
          <Right />
        </Header>
        <ScrollView>
        <View
          style={{
            height: height  ,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5
          }}
        >

          <Content padder>
          {cards.map((item) => this.createReview(item))} 
          </Content>
        </View>
        </ScrollView>
      </Container>

    );
  }
  createReview(item){
    return(
      <Card>
                  <CardItem header bordered>
                    <Left>
                      <Thumbnail circular large source={require('../../../assets/Images/profile.png')} />
                    </Left>
                    <Body style={{ alignItems: "flex-start", paddingTop: 10, marginRight:-50, }}>
                      <Text style={styles.listtext}>{item.name}</Text>
                      <Text style={styles.listtext}>{item.date}</Text>
                      <Text style={styles.listtext}>{item.order_no}</Text>
                      <StarRating style={styles.star} disabled={false} maxStars={5} rating={this.state.starCount} fullStarColor={'yellow'} starSize={10} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                    </Body>
                    <Right>
                    </Right>
                  </CardItem>
                  <CardItem>
                  <Body style={{ alignItems: "flex-start", paddingTop: 10, marginRight:-50, marginLeft:10, }}>
                      <Text style={styles.listtext}>{item.message}</Text>
                    </Body>
                  </CardItem>
                </Card>
    );
  }
  
}


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
