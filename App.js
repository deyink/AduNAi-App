import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
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



const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{ headerShown: false  }} initialRouteName='Signup' >
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

     
      </Stack.Navigator>
    </NavigationContainer>

       
     
  
  );
}

const styles = StyleSheet.create({
 
});
