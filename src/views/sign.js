import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native"
import COLORS from "../const/colors"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import logo from '../../assets/logo/symbian.png'

const Sign = () =>{

    return(

        <SafeAreaView>

            <ScrollView>

                <View style={styles.header}>

                    <View style={styles.back}>
                    
                        <Icon style={styles.backIcon} name={'keyboard-backspace'}/>

                        <Text style={styles.backText}>Voltar</Text>

                    </View>

                    
                    <View style={styles.containerLogo}>

                        <Image source={logo}/>

                    </View>

                </View>

                <View>

                    <View>

                        <Text>Dados do paciente:</Text>
                        
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
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
        marginLeft: 8
    },
    containerLogo:{
        width: 360,
        // backgroundColor: COLORS.darkBlue,
        paddingLeft: 64,
        paddingTop: 10
    }
}) 

export default Sign