import React from 'react'
import { View, Image, StyleSheet, TextInput, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from "../const/colors"
import fonts from '../const/fonts'

const PatientCard = ({ placeholder, iconName, error, onChangeText, touched }) => {

    return (

        <View style={styles.card}>
            <View style={styles.linesContainer}>
                <View style={styles.line}>
                    <Icon name='card-account-details' style={styles.lineIcon} />
                    <Text style={styles.lineText}>Luskas</Text>
                </View>
                <View style={styles.line}>
                    <Icon name='phone' style={styles.lineIcon} />
                    <Text style={styles.lineText}>Luskas</Text>
                </View>
                <View style={styles.line}>
                    <Icon name='cellphone' style={styles.lineIcon} />
                    <Text style={styles.lineText}>Luskas</Text>
                </View>
                <View style={styles.line}>
                    <Icon name='email' style={styles.lineIcon} />
                    <Text style={styles.lineText}>Luskas</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        borderColor: COLORS.red,
        borderWidth: 1,
        borderRadius: 10,
        borderStyle: 'solid',
        height: '21%',
        width: '90.7%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom:20
    },
    linesContainer: {
        flexDirection: 'column',
    },
    line:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8
    },
    lineIcon:{
        fontSize:20,
        marginRight:8,
        color:COLORS.red
    },
    lineText:{
        fontFamily: fonts.bree
    },
    imageContainer:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:COLORS.red,
        height:100,
        width:100,
        borderRadius:50
    }
})

export default PatientCard