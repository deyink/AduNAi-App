import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadScreen from './screens/LoadScreen';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Airtime from './screens/Airtime';
import AccountSuccess from './screens/AccountSuccess';
import PhoneOtp from './screens/PhoneOtp';
import FundWallet from './screens/FundWallet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState('false')

  const getData = async ()=>{
    const data = AsyncStorage.getItem('isLoggedIn')
    console.log(data, 'at app.js')
    setIsLoggedIn(data)
  }



  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{ headerShown: false  }} initialRouteName='Login' >
      <Stack.Screen
          name='LoadScreen'
          component={LoadScreen}
          options=''
        />
      <Stack.Screen
          name='Login'
          component={Login}
          options=''
        />
        <Stack.Screen
          name='Homepage'
          component={Homepage}
        />
     
        <Stack.Screen 
        name='Signup'
        component={Signup}
        />
         <Stack.Screen 
        name='Airtime'
        component={Airtime}
        />
              <Stack.Screen 
        name='PhoneOtp'
        component={PhoneOtp}
        />
         <Stack.Screen 
        name='AccountSuccess'
        component={AccountSuccess}
        />
        <Stack.Screen 
        name='FundWallet'
        component={FundWallet}  
        />
      </Stack.Navigator>

    </NavigationContainer>

       
     
  
  );
}

const styles = StyleSheet.create({
 
});
