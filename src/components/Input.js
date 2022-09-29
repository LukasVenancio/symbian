import React from 'react'
import { View, Image, StyleSheet, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from "../const/colors"
import fonts from '../const/fonts'

const Input = ({placeholder, iconName, error, onFocus = () =>{}}, onChangeText = () =>{}) =>{

    return(
        <View style={[styles.inputBox, {borderColor: error ? COLORS.red : null}]}>
            <TextInput style={styles.input} placeholder={placeholder} onFocus={() => {onFocus()}} onChangeText={onChangeText}/>
            <Icon name={iconName}/>
        </View>        
    )
}

const styles = StyleSheet.create({

    inputBox:{
        borderWidth: 0.5,
        width:380,
        height: 38,
        borderRadius: 10,
        paddingLeft: 12,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'

    },
    input:{
        fontFamily: fonts.bree,
        width:'90%',
        marginRight: '1%'
    }
}) 

export default Input