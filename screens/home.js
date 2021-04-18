import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, ImageBackground, Modal, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from '../screens/reviewForm'
import ReviewFood from './reviewfood';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'Cake', rating: 5,body:'Home made Cake by mom. Hope you like it',date:'03-12-2021',shelf:'top', deadline:3, key: '1' },
    { title: 'Milk', rating: 4,body:'Milk is good for bones!', date:'03-12-2021',shelf:'top',deadline:3, key: '2' },
    {  title: 'Salad', rating: 4,body:'Healthy!!', date:'18-04-2021',shelf:'middle',deadline:3, key: '3'  },
    {  title: 'Chicken', rating: 2,body:'Healthy!!', date:'18-04-2021',shelf:'middle',deadline:3, key: '3'  },
  ]);

  const addReview=(review)=>{
    review.key=Math.random().toString();
    setReviews((currentReviews)=>{
      return[review,...currentReviews]
    })
    setModalOpen(false)
  }
  return (

    <ImageBackground source={require('../assets/food2bg.png')} style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.modalContent}>
          <MaterialIcons
          name="close"
          size={24}
          style={{...styles.modalToggle, ...styles.modalClose}} 
          onPress={()=>{setModalOpen(false)}}
          />
        <ReviewForm addReview={addReview}/>
        </View>
</TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={()=>{setModalOpen(true)}}
      />
      <FlatList
      data={reviews}
      numColumns={2} 
      renderItem={({item})=>{
        return(
          <TouchableOpacity onPress={()=>{navigation.navigate('ReviewFood', item)}} style={styles.button}>
            <Card>
              <View style = {styles.texts}>
              <Text style={globalStyles.titleText}>{item.title}</Text>
              </View>
            </Card> 
          </TouchableOpacity>
        )
      }}
      />
    </ImageBackground>
  );
}

const styles= StyleSheet.create({
  button:{
    justifyContent:'space-evenly', flex:1, flexDirection:'row'
  },
  texts:{
    width:100,
    justifyContent:'center',
    alignItems:'center'
  },
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor:'#ddd'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor:'#eee'
  }
})