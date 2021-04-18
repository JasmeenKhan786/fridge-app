import {StyleSheet} from 'react-native'


export const globalStyles = StyleSheet.create({
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    subtitle:{
      fontSize: 14,
      fontWeight: 'bold',
      color: '#555',
    },
    subtitleContent:{
      fontSize: 14,
      fontWeight:'normal',
      color: '#555',
    },
    paragraph: {
      marginVertical: 8,
      lineHeight: 20,
    },
    container: {
      flex: 1,
      padding: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#fff',
      backgroundColor:'#fff',
      padding: 7,
      fontSize: 14,
      borderRadius: 6,
    },
    errorText: {
      color: 'crimson',
      fontWeight: 'bold',
      marginBottom: 4,
      marginTop: 2,
      textAlign: 'center',
    },
  });

  export const images={
    ratings:{
      '1':require('../assets/rating-1.png'),
      '2':require('../assets/rating-2.png'),
      '3':require('../assets/rating-3.png'),
      '4':require('../assets/rating-4.png'),
      '5':require('../assets/rating-5.png')
    }
  }