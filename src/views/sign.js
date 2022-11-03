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

import { create } from '../services/index'

const Sign = () => {

    const validateSchema = yup.object({
        name: yup.string().required('Insira um nome válido').min(4, 'Insira um nome válido'),
        phone: yup.string().required('Telefone obrigatório').min(8, 'Insira um telefone válido'),
        cell_phone: yup.string().required('Celular obrigatório').min(8, 'Insira um celular válido'),
        email: yup.string().required('Email obrigatório').min(8, 'Insira um email válido').email('Insira um email válido'),
        responsible_name: yup.string().min(4, 'Insira um nome válido'),
        responsible_phone: yup.string().min(8, 'Insira um telefone válido'),

    })

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

            <SafeAreaView>

                <ScrollView>

                    <Header />

                    <View>

                        <Formik

                            initialValues={{
                                name: '',
                                phone: '',
                                cell_phone: '',
                                email: '',
                                responsible_name: '',
                                responsible_phone: ''
                            }}

                            validationSchema={validateSchema}

                            onSubmit={async (values) => {

                                const result = await create(values)
                                console.log(result)


                            }}
                        >

                            {({ handleChange, values, handleSubmit, errors, touched }) => (
                                <>
                                    <View >

                                        <Text style={styles.formTitle}>Dados do paciente:</Text>

                                        <View style={styles.inputsContainer}>

                                            <Input
                                                placeholder={'Nome'}
                                                iconName={'card-account-details'}
                                                onChangeText={handleChange('name')}
                                                value={values.name}
                                                error={errors.name}
                                                touched={touched}
                                            />
                                            <Input
                                                placeholder={'Telefone'}
                                                iconName={'phone'}
                                                onChangeText={handleChange('phone')}
                                                value={values.phone}
                                                error={errors.phone}
                                            />
                                            <Input
                                                placeholder={'Celular'}
                                                iconName={'cellphone'}
                                                onChangeText={handleChange('cell_phone')}
                                                value={values.cell_phone}
                                                error={errors.cell_phone}
                                            />
                                            <Input
                                                placeholder={'Email'}
                                                iconName={'email'}
                                                onChangeText={handleChange('email')}
                                                value={values.email}
                                                error={errors.email}
                                            />

                                        </View>

                                    </View>

                                    <View >

                                        <Text style={styles.formTitle}>Dados do responsável:</Text>

                                        <View style={styles.inputsContainer}>

                                            <Input
                                                placeholder={'Nome'}
                                                iconName={'card-account-details'}
                                                onChangeText={handleChange('responsible_name')}
                                                value={values.responsible_name}
                                                error={errors.responsible_name}
                                            />
                                            <Input
                                                placeholder={'Telefone'}
                                                iconName={'phone'}
                                                onChangeText={handleChange('responsible_phone')}
                                                value={values.responsible_phone}
                                                error={errors.responsible_phone}
                                            />
                                        </View>

                                    </View>


                                    <View style={styles.buttonsContainer}>

                                        <NegativeButoon text={'Cancelar'} />
                                        <PositiveButoon text={'Salvar'} onPress={() => handleSubmit()} />

                                    </View>
                                </>

                            )}

                        </Formik>

                    </View>

                </ScrollView>

            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    generalContainer: {

        fontFamily: fonts.bree
    },
    inputsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
        marginBottom: 50
    },
    formTitle: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 22,
        fontFamily: fonts.bree

    },
    buttonsContainer: {
        // backgroundColor:COLORS.gray,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
    }
})

export default Sign