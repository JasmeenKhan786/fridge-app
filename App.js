
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo';
import Navigator from './routes/drawer';

// const getFonts=()=>{
//   Font.loadAsync({
//     'SemiBold' : require('./assets/fonts/Montserrat-SemiBold.otf'),
//     'Medium' : require('./assets/fonts/Montserrat-Medium.otf'),
//     'Regular' : require('./assets/fonts/Montserrat-Regular.otf')
//   })
// }
export default function App() {
  // const [fontsLoaded,setFontsLoaded] = useState(false)

 
  // if(fontsLoaded){
  //   return(
  //     <Navigator/>
  //   )
  // }
  // else{
  //   return (
  //     <AppLoading 
  //       startAsync={getFonts} 
  //       onFinish={() => setFontsLoaded(true)} 
  //     />
  //   )
  // }

  return(
    <Navigator/>
  )
}