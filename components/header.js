import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/color'
const Header = props => {
    return(
        <View style={styles.header} >
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:80,
        paddingTop:36,
        backgroundColor:Colors.DogerBlueL,
        alignItems:'flex-start',
    },
    headerTitle:{
        color: 'white',
        fontSize: 26
    }
})

export default Header;