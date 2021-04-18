import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import { globalStyles, images } from '../styles/globalStyles';
import Card from '../shared/card'


export default function ReviewFood({navigation}) {
const rating = navigation.getParam('rating');
  return (
    <ImageBackground source={require('../assets/food2bg.png')} style={globalStyles.container}>

      <Card>
        <Text style={globalStyles.titleText}>{navigation.getParam('title')} </Text>
        <Text style={globalStyles.paragraph}>{navigation.getParam('body')} </Text>
        <View style={styles.divider}>
          <Text style={globalStyles.subtitle}>Shelf : </Text>
          <Text style={globalStyles.subtitleContent}>{navigation.getParam('shelf')} </Text>
        </View>
        <View style={styles.divider}>
          <Text style={globalStyles.subtitle}>Date : </Text>
          <Text style={globalStyles.subtitleContent}>{navigation.getParam('date')} </Text>
        </View>
       <View style={styles.divider}>
         <Text style={globalStyles.subtitle}>Use within {navigation.getParam('deadline')} days</Text>
       </View>
        <View style={styles.rating}>
          <Text style={globalStyles.subtitle}> Food Rating: </Text>
          <Image source={images.ratings[rating]}/>
        </View>
      </Card>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  divider:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:3,
    marginTop: 3,
  }
})