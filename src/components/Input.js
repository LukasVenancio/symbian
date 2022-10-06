import React from 'react'
import { View, Image, StyleSheet, TextInput, Text} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from "../const/colors"
import fonts from '../const/fonts'

const Input = ({placeholder, iconName, error, onChangeText, touched}) =>{

    return(
        <View style={styles.container}>
            <View style={[styles.inputBox, {borderColor: error ? COLORS.red : null}]}>
                <TextInput style={styles.input} placeholder={placeholder} onChangeText={onChangeText}/>
                <Icon name={iconName}/>
            </View>
            <Text style={styles.textError}>{error}</Text>
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
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center'

    },
    input:{
        fontFamily: fonts.bree,
        width:'90%',
        marginRight: '1%'
    },
    container:{
        marginBottom: 5,
        color: COLORS.red,
    },
    textError:{
        color: COLORS.red,
        marginLeft:5
    }
}) 

export default Input