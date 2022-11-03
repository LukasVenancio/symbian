import React from 'react'
import {StyleSheet} from 'react-native'

import {AppLoading} from 'expo';

import Sign from './src/views/sign'
import PatientList from './src/views/patientsList';

const App = () =>{

  return(

    <PatientList/>
  )
}

export default App