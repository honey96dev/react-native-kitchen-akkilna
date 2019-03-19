/*

Defines all the card views used in the ASOS app
Suggested Improvements: Utilize type to render appropriate card instead of title & price
*/

import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, TouchableHighlight} from 'react-native';
import {darkText, lightText, extraLightBackground, darkBackground} from './AsosColors'
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'native-base';

const { width } = Dimensions.get('window');
const PADDING = 30;

export default class Card extends Component {
    
    render() {
        if (this.props.title){
            return (this.renderCardWithTitle(this.props.title, this.props.subtitle)) //returning early to avoid styling issues presented by parent container
        }else if(this.props.price){
            return (this.renderCardWithPrice(this.props.price, this.props.subtitle))
        }else{
            return(
                <View>
                    {this.renderStandard()}
                </View>
            )
        }
    }

renderCardWithTitle(title, subtitle) {
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <View style={[styles.gridItem]}>
                <Image style={{flex:3, resizeMode:'center', alignSelf:'center', marginBottom:0, backgroundColor:'white'}} source={ this.props.imageName }/>
                <View style={{flex:1, flexDirection:'column', justifyContent:'space-start'}}>
                    <Text style={[styles.title, {marginBottom:3}]}> {title} </Text>
                    <Text style={styles.subTitle}> {subtitle} </Text>
                </View>
            </View>
       </TouchableHighlight> 
    )
}

renderCardWithPrice(price, subtitle, status) {
    return(
        <TouchableHighlight style={{
            backgroundColor:'white',
            borderWidth: 0.5, 
            borderColor: 'rgba(0,0,0,0.1)',
            shadowColor:'black',
            shadowOffset:{ width: 0, height: 3 },
            shadowRadius:4,
            shadowOpacity:0.1,
            }}
            activeOpacity={0.8} 
            underlayColor={extraLightBackground}
            onPress={this.props.onCardPress}>
            
            <View style={[styles.orderItem]}>
            <View style={{flex:2}}>
            <View style={{width:150, height:150, flexDirection: 'row'}}>
                <Image style={[{ resizeMode:'cover', width:'100%', height:'100%', alignSelf:'flex-start'}]} source={this.props.imageName}/>
                <View style={{flexDirection: "column"}}>
                <Text style={styles.order}>Order No: 123874</Text>
                <Text style={styles.name}>Zena's Kitchen</Text>
                <Text style={styles.price}>AED 900</Text>
                <Text style={styles.listing}>Chicken Plater x 1 - more than 1 item</Text>
                <View style={{flexDirection: 'row'}}>
                <Button style={{backgroundColor: 'none', marginRight: 3, marginLeft:12,}} onPress={() => {this.props.navigation.navigate("Result");}}>
                      <Text style={{ fontFamily: 'Poppins_bold', color: '#22C674' ,fontSize: 11, paddingRight:3, paddingLeft: 3, paddingTop: 3, paddingBottom: 3, marginTop: 1,}}>ReOrder</Text>
                    </Button>
                    <Button style={{backgroundColor: 'none', marginRight: 3, marginLeft:6}} onPress={() => {this.props.navigation.navigate("Result");}}>
                      <Text style={{ fontFamily: 'Poppins_bold', color: '#EF9A37' ,fontSize: 11, paddingRight:3, paddingLeft: 3, paddingTop: 3, paddingBottom: 3, marginTop: 1,}}>Rate</Text>
                    </Button>
                    <Button style={{backgroundColor: 'none', marginRight: 3, marginLeft:6}} onPress={() => {this.props.navigation.navigate("Result");}}>
                      <Text style={{ fontFamily: 'Poppins_bold', color: '#000' ,fontSize: 11, paddingRight:3, paddingLeft: 3, paddingTop: 3, paddingBottom: 3, marginTop: 1,}}>Reciept</Text>
                    </Button>
                </View>
                </View>
                </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

renderStandard(){
    return(
        <TouchableHighlight activeOpacity={0.8} underlayColor={extraLightBackground}onPress={this.props.onCardPress}>
            <Image style={this.styleForType(this.props.type)} source={ this.props.imageName }/>
        </TouchableHighlight>
    )
}

    styleForType(type) {
        switch (type) {
            case 'wide':
                return styles.promotionBanner;
            case 'standard':
                return styles.standardCard;
            case 'tall':
                return styles.tallCard;
            case 'grid-item':
                return styles.gridItem;
            case 'standard-short':
                return styles.standardShort;
            default:
                return styles.container;
        }
    }
}

const styles = StyleSheet.create({
    container: {
        width:null,
        marginTop:0,
        backgroundColor: 'white',
    },
    promotionBanner: {
        height:90,
        marginBottom:20,
        width:null,
        flex:1,
        resizeMode:'cover',
        borderWidth:2,
        borderColor:'black',
        backgroundColor: 'white'
    },
    standardCard: {
        alignSelf:'stretch',
        height: 270,
        width:null,
        resizeMode:'cover',
        backgroundColor: extraLightBackground,
        marginBottom:20,
    },
    tallCard: {
        alignSelf:'stretch',
        height:450,
        width:null,
        resizeMode:'cover',
        overflow:'hidden',
        backgroundColor: extraLightBackground,
        marginBottom:20,
    },
    standardShort: {
        alignSelf:'stretch',
        height: 125,
        width:null,
        resizeMode:'contain',
        backgroundColor: extraLightBackground

    },
    gridItem: {
        overflow:'hidden',
        width:(width/2) - PADDING,
        height:300,
        backgroundColor: 'white'

    },
    orderItem: {
        overflow:'hidden',
        width:(width/1),
        height:150,
        backgroundColor: 'white',
        alignItems: 'flex-start',

    },
    title:{
        fontFamily:'Poppins',
        fontSize:16,
        fontWeight:"800",
        textAlign: 'center',
        color:darkText,
    },
    subTitle:{
        fontFamily:'Poppins_medium',
        fontWeight:"400",
        fontSize:14,
        textAlign: 'center',
        color:lightText,
    },
    subTitlePrice:{
        fontFamily:'Poppins_medium',
        fontSize:14,
        fontWeight:"200",
        color:lightText,
    },
    price:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:"600",
        textAlign: 'left',
        color:darkText,
        marginLeft: 12,
        marginTop: 1,
    },
    order:{
        fontFamily:'Poppins',
        fontSize:12,
        fontWeight:"600",
        textAlign: 'left',
        color:'#22C674',
        marginLeft: 12,
        marginTop: 10,
    },
    name:{
        fontFamily:'Poppins_bold',
        fontSize:16,
        fontWeight:"bold",
        textAlign: 'left',
        color:'#000',
        marginLeft: 12,
        marginTop: 1,
    },
    listing:{
        fontFamily:'Poppins',
        fontSize:10,
        fontWeight:"bold",
        textAlign: 'left',
        color:'#000',
        marginLeft: 12,
        marginTop: 1,
    },
    smallbtn: {
        backgroundColor: '#22C674',
        borderRadius: 15,
        shadowColor: "rgba(50, 19, 50, 0.29)",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 7,
        marginLeft: 12,
        marginTop:1,
        marginBottom: 1,

      },
});
