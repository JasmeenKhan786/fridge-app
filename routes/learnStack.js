import { createStackNavigator } from 'react-navigation-stack';
import Grocery from '../screens/grocery';
import Header from '../shared/header';
import React from 'react';

const screens = {
  Grocery: {
    screen: Grocery,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:()=><Header navigation={navigation} title='Grocery List' />
      }
    }
  }
};

// Home Stack Navigator screens
const GroceryStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor:'#ddd',
    headerStyle:{backgroundColor:'#2A2B30',height:80}
  }
});

export default GroceryStack;


