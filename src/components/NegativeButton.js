import React from 'react'
import { TouchableOpacity, StyleSheet, Text} from 'react-native'
import COLORS from "../const/colors"
import fonts from '../const/fonts'

const NegativeButoon = ({text}) =>{

    return(
        <TouchableOpacity activeOpacity={0.5} style={styles.negativeButton} >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    negativeButton:{
        width: 150,
        height: 44,
        backgroundColor: COLORS.red,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        
    },
    buttonText:{
        fontSize: 24,
        color: COLORS.white,
        fontFamily: fonts.bree
    }
}) 

export default NegativeButoon