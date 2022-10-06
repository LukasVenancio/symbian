import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView} from "react-native"
import {
    useFonts,
    BreeSerif_400Regular,
} from '@expo-google-fonts/bree-serif'
import { Formik } from 'formik'
import  *  as yup from 'yup'
import fonts from '../const/fonts'

import Header from '../components/Header'
import Input from '../components/Input'
import NegativeButoon from '../components/NegativeButton'
import PositiveButoon from '../components/PositiveButton'

const Sign = () => {
    
    const validateSchema = yup.object({
        nome_paciente: yup.string().required('Insira um nome válido').min(4, 'Insira um nome válido'),
        telefone_paciente: yup.string().required('Telefone obrigatório').min(8, 'Insira um telefone válido'),
        celular_paciente: yup.string().required('Celular obrigatório').min(8, 'Insira um celular válido'),
        email_paciente: yup.string().required('Email obrigatório').min(8, 'Insira um email válido').email('Insira um email válido'),
        nome_responsavel: yup.string().min(4, 'Insira um nome válido'),
        telefone_responsavel: yup.string().min(8, 'Insira um telefone válido'),

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
                                nome_paciente: '',
                                telefone_paciente: '',
                                celular_paciente: '',
                                email_paciente: '',
                                nome_responsavel: '',
                                telefone_responsavel: ''
                            }}

                            validationSchema={validateSchema}

                            onSubmit={(values) => {

                                console.log(values)
                                

                            }}
                        >

                            {( {handleChange, values, handleSubmit, errors, touched} ) => (
                                <>
                                    <View >

                                        <Text style={styles.formTitle}>Dados do paciente:</Text>

                                        <View style={styles.inputsContainer}>

                                            <Input
                                                placeholder={'Nome'}
                                                iconName={'card-account-details'}
                                                onChangeText={handleChange('nome_paciente')}
                                                value={values.nome_paciente}
                                                error={errors.nome_paciente}
                                                touched={touched}
                                            />
                                            <Input
                                                placeholder={'Telefone'}
                                                iconName={'phone'}
                                                onChangeText={handleChange('telefone_paciente')}
                                                value={values.telefone_paciente}
                                                error={errors.telefone_paciente}
                                            />
                                            <Input
                                                placeholder={'Celular'}
                                                iconName={'cellphone'}
                                                onChangeText={handleChange('celular_paciente')}
                                                value={values.celular_paciente}
                                                error={errors.celular_paciente}
                                             />
                                            <Input
                                                placeholder={'Email'}
                                                iconName={'email'}
                                                onChangeText={handleChange('email_paciente')}
                                                value={values.email_paciente}
                                                error={errors.email_paciente}
                                            />

                                        </View>

                                    </View>

                                    <View >

                                        <Text style={styles.formTitle}>Dados do responsável:</Text>

                                        <View style={styles.inputsContainer}>

                                            <Input
                                                placeholder={'Nome'}
                                                iconName={'card-account-details'}
                                                onChangeText={handleChange('nome_responsavel')}
                                                value={values.nome_responsavel}
                                                error={errors.nome_responsavel}
                                            />
                                            <Input
                                                placeholder={'Telefone'}
                                                iconName={'phone'}
                                                onChangeText={handleChange('telefone_responsavel')}
                                                value={values.telefone_responsavel}
                                                error={errors.telefone_responsavel}
                                            />
                                        </View>

                                    </View>


                                    <View style={styles.buttonsContainer}>

                                        <NegativeButoon text={'Cancelar'} />
                                        <PositiveButoon text={'Salvar'} onPress={handleSubmit}/>

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