import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity } from "react-native"
import COLORS from "../const/colors"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import logo from '../../assets/logo/symbian.png'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    BreeSerif_400Regular,
} from '@expo-google-fonts/bree-serif'
import { Formik } from 'formik'
import fonts from '../const/fonts'

import Header from '../components/Header'
import Input from '../components/Input'
import NegativeButoon from '../components/NegativeButton'
import PositiveButoon from '../components/PositiveButton'

const Sign = () => {

    // const [inputs, setInputs] = React.useState({

    // nome_paciente: '',
    // telefone_paciente: '',
    // celular_paciente: '',
    // email_paciente: '',
    // nome_responsavel: '',
    // telefone_responsavel: ''

    //   })

    //   const handlerOnChange = (text, input) =>{

    //     console.log(text)

    //     setInputs((prevState) =>(

    //       {...prevState, [input]:text} 

    //     ));

    //     console.log(inputs)
    //   }

    // const [errors, setErrors] = React.useState({});

    // const handlerErrors = (errorMesage, input)=>{

    //  setErrors((prevState) => ({...prevState, [input]:errorMesage}));

    // }

    // const validate = () =>{

    //     let result = true

    //     if(!inputs.nome_paciente){

    //         result = false
    //         handlerErrors('Informe o nome do paciente', 'nome_paciente')

    //     } else if(!inputs.telefone_paciente){

    //         result = false
    //         handlerErrors('Informe o telefone do paciente', 'telefone_paciente')

    //     }else if(!inputs.celular_paciente){

    //         result = false
    //         handlerErrors('Informe o celular do paciente', 'celular_paciente')

    //     }else if(!inputs.email_paciente){

    //         result = false
    //         handlerErrors('Informe o email do paciente', 'email_paciente')
    //     }
    // }

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

                            onSubmit={(values) => {

                            }}
                        >

                            {({ props }) => (
                                <>
                                    <View >

                                        <Text style={styles.formTitle}>Dados do paciente:</Text>

                                        <View style={styles.inputsContainer}>

                                            <Input
                                                placeholder={'Nome'}
                                                iconName={'card-account-details'}
                                                onChangeText={(text) => { handlerOnChange(text, 'nome_paciente') }}
                                                error={errors.nome_paciente}
                                                onFocus={() => { handlerErrors(null, 'nome_paciente') }}
                                            />
                                            <Input
                                                placeholder={'Telefone'}
                                                iconName={'phone'}
                                                onChangeText={(text) => { handlerOnChange(text, 'telefone_paciente') }}
                                                error={errors.telefone_paciente}
                                                onFocus={() => { handlerErrors(null, 'telefone_paciente') }}
                                            />
                                            <Input
                                                placeholder={'Celular'}
                                                iconName={'cellphone'}
                                                onChangeText={(text) => { handlerOnChange(text, 'celular_paciente') }}
                                                error={errors.celular_paciente}
                                                onFocus={() => { handlerErrors(null, 'celular_paciente') }}
                                            />
                                            <Input
                                                placeholder={'Email'}
                                                iconName={'email'}
                                                onChangeText={(text) => { handlerOnChange(text, 'email_paciente') }}
                                                error={errors.email_paciente}
                                                onFocus={() => { handlerErrors(null, 'email_paciente') }}
                                            />

                                        </View>

                                    </View>

                                    <View >

                                        <Text style={styles.formTitle}>Dados do responsável:</Text>

                                        <View style={styles.inputsContainer}>

                                            <Input
                                                placeholder={'Nome'}
                                                iconName={'card-account-details'}
                                                onChangeText={(text) => { handlerOnChange(text, 'nome_responsavel') }}
                                            />
                                            <Input
                                                placeholder={'Telefone'}
                                                iconName={'phone'}
                                                onChangeText={(text) => { handlerOnChange(text, 'telefone_responsavel') }}
                                            />
                                        </View>

                                    </View>
                                </>

                            )}




                        </Formik>



                        <View style={styles.buttonsContainer}>

                            <NegativeButoon text={'Cancelar'} />
                            <PositiveButoon text={'Salvar'} onPress={validate} />

                        </View>

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