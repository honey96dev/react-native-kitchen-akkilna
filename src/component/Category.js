import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity,
    Image } from 'react-native';

class Category extends React.Component {
  render() {
    return (
        <TouchableOpacity activeOpacity={0.75}  style={styles.container}> 
            <View style={{flex:1, overflow: 'hidden', borderTopRightRadius:4, borderTopLeftRadius:4}}>
                <Image source = {this.props.imageSource}
            style= {{flex: 1, width: null, height: null, resizeMode: 'cover',}} />
            </View>
      </TouchableOpacity>
);
  }
}


export default Category;

const styles = StyleSheet.create({
  container: {
    height: 170, 
    width: 320, 
    marginLeft: 20, 
    borderWidth: 0.5, 
    borderRadius:4,
    backgroundColor:'white',
    borderColor: 'rgba(0,0,0,0.1)', 
    shadowColor:'black',
    shadowOffset:{ width: 0, height: 3 },
    shadowRadius:2,
    shadowOpacity:0.06,
  },
  title: {
    fontWeight:"800",
    fontSize: 14,
    color:'rgb(72,72,72)',
  }
});