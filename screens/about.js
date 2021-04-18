import React, { useState } from 'react';
import {View, Text, ImageBackground} from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function About() {

  return (
    <ImageBackground source={require('../assets/food2bg.png')} style={globalStyles.container}>

      <Text>ABout the app</Text>
    </ImageBackground>
  );
}