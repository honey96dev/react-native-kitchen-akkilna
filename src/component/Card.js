/*

Defines all the card views used in the ASOS app
Suggested Improvements: Utilize type to render appropriate card instead of title & price
*/

import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions, Text, TouchableHighlight} from 'react-native';
import {darkText, lightText, extraLightBackground, darkBackground} from './AsosColors'
import Icon from 'react-native-vector-icons/Ionicons';
import StarRating from 'react-native-star-rating';
import Color from '../component/AsosColors';
const { width } = Dimensions.get('window');
const PADDING = 30;
const kWidth = (width/2) - 15;

export default class Card extends Component {

    constructor(props){
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
        if (this.props.price){
            return (this.renderCardWithTitle( this.props.status,  this.props.price, this.props.subtitle )) //returning early to avoid styling issues presented by parent container
        
        }else{
            return(
                <View>
                    {this.renderStandard()}
                </View>
            )
        }
    }

renderCardWithTitle( status, price, subtitle,  ) {
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
            
            <View style={[styles.gridItem]}>
                    <Image style={[{width:kWidth, height:null, flex:3, resizeMode:'cover', alignSelf:'center',}]} source={this.props.imageName}/>
                    <View style={{flex:1,flexDirection:'column', justifyContent:'space-around', marginLeft:5, marginTop:5, marginBottom:5, }}>
                        <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:5 }}>
                            <Text style={styles.price}>{subtitle}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                        <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:5}}>
                            <Text style={styles.subTitlePrice}>{price}</Text>
                            <StarRating style={styles.star} disabled={false} maxStars={5} rating={this.state.starCount} fullStarColor={'yellow'} starSize={10} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
                        </View>
                    </View>
            </View>  
        </TouchableHighlight>
    )
}

renderCardWithPrice(price, title, status, subtitle) {
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
            
            <View style={[styles.gridItem]}>
                    <Image style={[{width:kWidth, height:null, flex:3, resizeMode:'cover', alignSelf:'center',}]} source={this.props.imageName}/>
                    <View style={{flex:1,flexDirection:'column', justifyContent:'space-around', marginLeft:5, marginTop:5, marginBottom:5, }}>
                        <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:5 }}>
                            <Text style={styles.price}>{title}</Text>
                            <Text style={styles.status}>{status}</Text>
                        </View>
                        <View style={{justifyContent:'space-between', flexDirection:'row', marginTop:5,marginRight:5}}>
                            <Text style={styles.subTitlePrice}>{price}</Text>
                            <StarRating style={styles.star} disabled={false} maxStars={5} rating={this.state.starCount} fullStarColor={'yellow'} starSize={10} selectedStar={(rating) => this.onStarRatingPress(rating)}/>
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
        width:kWidth ,
        height:180,
        backgroundColor: 'white'

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
        fontSize:12,
        textAlign: 'center',
        color:lightText,
    },
    subTitlePrice:{
        fontFamily:'Poppins_medium',
        fontSize:12,
        fontWeight:"200",
        color:lightText,
        marginTop: 0,
    },
    price:{
        fontFamily:'Poppins',
        fontSize:14,
        fontWeight:"600",
        textAlign: 'left',
        color:Color.darkText,
    },
    status:{
        color: '#22C674',
        fontFamily:'Poppins_bold',
        fontSize:12,
      }
});
