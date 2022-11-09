import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import COLORS from "../const/colors"
import fonts from '../const/fonts'

const PatientCard = ({ name, phone, cellPhone, email, image, id }) => {

    return (

        <View style={styles.card} key={id}>
            <View style={styles.linesContainer}>
                <View style={styles.line}>
                    <Icon name='card-account-details' style={styles.lineIcon} />
                    <Text style={styles.lineText}>{name}</Text>
                </View>
                <View style={styles.line}>
                    <Icon name='phone' style={styles.lineIcon} />
                    <Text style={styles.lineText}>{phone}</Text>
                </View>
                <View style={styles.line}>
                    <Icon name='cellphone' style={styles.lineIcon} />
                    <Text style={styles.lineText}>{cellPhone}</Text>
                </View>
                <View style={styles.line}>
                    <Icon name='email' style={styles.lineIcon} />
                    <Text style={styles.lineText}>{email}</Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Icon name={'account-outline'} style={styles.iconPatient}/>
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
        //height: '21%',
        width: '90.7%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
        marginBottom:20,
        alignItems:'center'
    },
    linesContainer: {
        flexDirection: 'column',
        maxWidth:'61%'
    },
    line:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:8,
    },
    lineIcon:{
        fontSize:20,
        marginRight:8,
        color:COLORS.red
    },
    lineText:{
        fontFamily: fonts.bree,
    },
    imageContainer:{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:COLORS.red,
        height:100,
        width:100,
        borderRadius:50,
        justifyContent:'center',
        alignItems:'center',
    },
    iconPatient:{
        fontSize:48,
    }
})

export default PatientCard