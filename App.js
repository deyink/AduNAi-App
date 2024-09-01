import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import LoadScreen from './screens/LoadScreen';
import Homepage from './screens/Homepage';
import Login from './screens/Login';
import Signup from './screens/Signup';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Airtime from './screens/Airtime';
import AccountSuccess from './screens/AccountSuccess';
import PhoneOtp from './screens/PhoneOtp';
import FundWallet from './screens/FundWallet';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
// const Navigation = useNavigation();

const LogIn = ()=>{
  return(
      <Stack.Navigator screenOptions={{ headerShown: false  }} initialRouteName='LoadScreen' >
      <Stack.Screen
          name='LoadScreen'
          component={LoadScreen}
          options=''
        />
        <Stack.Screen
          name='Homepage'
          component={Homepage}
        />
         <Stack.Screen 
        name='Airtime'
        component={Airtime}
        />
        <Stack.Screen 
        name='FundWallet'
        component={FundWallet}  
        />
      </Stack.Navigator>
  )
};

const NotLogIn = ()=>{
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
    name='Signup'
    component={Signup}
    />  
    <Stack.Screen 
    name='PhoneOtp'
    component={PhoneOtp}
    />
    <Stack.Screen 
    name='AccountSuccess'
    component={AccountSuccess}
    />    
  </Stack.Navigator>

}


export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  async function getData (){
    const data = AsyncStorage.getItem('isLoggedIn')
    console.log(data, 'at app.js')
    setIsLoggedIn(data)
  }
  useEffect(()=>{
    getData()
  }, [])



  return (
   <NavigationContainer>
    { isLoggedIn ? <LogIn /> : <NotLogIn/> }
   </NavigationContainer>    
  
  );
}


