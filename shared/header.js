import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation,title}){
    const openMenu=()=>{
        navigation.openDrawer();
    }
    return(
        <View style={styles.header}>
            <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon}></MaterialIcons>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold', 
        fontSize:20,
        color:'#ddd',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left: 5,
        color:'#ddd'

    }
})