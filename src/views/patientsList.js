import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native"
import Header from '../components/Header'
import PatientCard from '../components/PatientCard'
import { listAll } from '../services/index'
import {
    useFonts,
    BreeSerif_400Regular,
} from '@expo-google-fonts/bree-serif'

const PatientList = () => {

    const [patients, setPatients] = useState([{
        "id": 0,
        "name": null,
        "phone": null,
        "cell_phone": null,
        "email": null,
        "responsible_name": null,
        "responsible_phone": null
    }])

    const getPatients = async () => {

        const result = await listAll()
        setPatients(result.data)
    }

    useEffect(() => {

        getPatients()
    },
        [])

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
                <ScrollView style={styles.scroll}>
                    <View style={styles.cardsContainer}>
                        {patients.map((patient) => {

                            return (
                                <PatientCard
                                    name={patient.name}
                                    phone={patient.phone}
                                    cellPhone={patient.cell_phone}
                                    email={patient.email}
                                    id={patient.id}
                                />
                            )
                        })}
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    safe: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%'
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
    cardsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }

})

export default PatientList