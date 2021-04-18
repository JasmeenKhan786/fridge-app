import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewFood from '../screens/reviewfood';
import Header from '../shared/header';
import React from 'react';
//title expects a string value, but headerTitle can take a function which returns a component
const screens = {
  Home: {
    screen: Home,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:()=><Header navigation={navigation} title='WhatsInTheFridge' />
      }
    }
  },
  ReviewFood: {
    screen: ReviewFood,
    navigationOptions:{
      title:'Food Details',
      //headerStyle:{backgroundColor:'orange'}
    }
  }
};

// Home Stack Navigator screens
const HomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor:'#ddd',
    headerStyle:{backgroundColor:'#2A2B30',height:80}
  }
});

export default HomeStack;


