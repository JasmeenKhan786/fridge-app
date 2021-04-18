import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
  About: {
    screen: About,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:()=><Header navigation={navigation} title='About App'/>
      }
    }
  }
};

// Home Stack Navigator screens
const AboutStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    headerTintColor:'#ddd',
    headerStyle:{backgroundColor:'#2A2B30',height:80}
  }
});

export default AboutStack;


