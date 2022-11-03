import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import {
    useFonts,
    BreeSerif_400Regular,
} from '@expo-google-fonts/bree-serif'
import { Formik } from 'formik'
import *  as yup from 'yup'
import fonts from '../const/fonts'

import Header from '../components/Header'
import Input from '../components/Input'
import NegativeButoon from '../components/NegativeButton'
import PositiveButoon from '../components/PositiveButton'
import PatientCard from '../components/PatientCard'

const PatientList = () => {
    let [fontsLoaded] = useFonts({
        BreeSerif_400Regular,
    });
    if (!fontsLoaded) {
        return (
            <SafeAreaView style={styles.loadingContainer} >
                <Text style={styles.loading}>...Carregando</Text>
            </SafeAreaView>
        )
    } else {

        return (

            <SafeAreaView style={styles.safe}>
                <Header />
                <View style={styles.cardsContainer}>
                    <PatientCard />
                    <PatientCard />
                    <PatientCard />
                </View>

            </SafeAreaView>




        )

    }
}
const styles = StyleSheet.create({
    safe:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%'
    },
    loading: {

        fontSize: 24
    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardsContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1
    }
})

export default PatientList