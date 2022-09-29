import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import logo from '../../assets/logo/symbian.png'
import COLORS from "../const/colors"
import fonts from '../const/fonts'

const Header = () =>{

    return(

        <View style={styles.header}>

            <View style={styles.back}>

                <Icon style={styles.backIcon} name={'keyboard-backspace'}/>

                <Text style={styles.backText}>Voltar</Text>

            </View>


            <View style={styles.containerLogo}>

                <Image source={logo}/>

            </View>

        </View>
        
    )
}

const styles = StyleSheet.create({

    header:{
        marginTop: 32,
        width: 440,
        height: 90,
        // backgroundColor: COLORS.blue,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    back:{
        width: 100,
        height: 60,
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: COLORS.gray,
        alignItems: 'center',
    },
    backIcon:{
        fontSize: 24,
        color: COLORS.black,
        marginLeft: 22
    },
    backText:{
        fontSize: 18,
        color: COLORS.black,
        marginLeft: 8,
        fontFamily: fonts.bree

    },
    containerLogo:{
        width: 360,
        // backgroundColor: COLORS.darkBlue,
        paddingLeft: 64,
        paddingTop: 10
    }
}) 

export default Header