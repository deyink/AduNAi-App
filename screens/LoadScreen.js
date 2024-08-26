import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Homepage from './Homepage'
import { h, w } from './styles/responsive'
import { hs, vs } from './styles/Metrics'

const LoadScreen = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // async function getData (){
  //   const data = AsyncStorage.getItem('isLoggedIn')
  //   console.log(data, 'at app.js')
  //   setIsLoggedIn(data)
  // }
  // useEffect(()=>{
  //   getData()
  // }, [])
  useEffect(()=>{
    setTimeout(()=>{
      isLoggedIn ? 
      navigation.navigate('Login') :
      navigation.navigate('Homepage')
          
    }, 2000)
  },[])
  return (
    <View>
      <ImageBackground style={styles.bground} >
        <Text style={styles.header} > AduNai </Text>
        <View style={styles.circle}  />
        <View style={styles.circle1}  />
        <View style={styles.circle2}  />
        <View style={styles.circle3}  />
        <View style={styles.circle4}  />
      </ImageBackground>
    </View>
  )
}

export default LoadScreen

const styles = StyleSheet.create({
    bground:{
        height: '100%',
        width: '100%',
        backgroundColor: '#192a56',
    },
    header:{
        fontSize: 35,
        color: '#fffcf3',
        textAlign: 'center',
        top: vs(270),
        fontWeight: '700'
    },
    circle:{
        height: vs(70),
        width: hs(70),
        backgroundColor: '#fffcf3',
        top: vs(300),
        left: hs(145),
        borderRadius: 50
    },
    circle1:{
      height: vs(60),
      width: hs(60),
      backgroundColor: '#192a56',
      top: vs(235),
      left: hs(150),
      borderRadius: 50
  },
  circle2:{
    height: vs(50),
    width: hs(50),
    backgroundColor: '#fffcf3',
    top: vs(180),
    left: hs(155),
    borderRadius: 50
},
circle3:{
  height: vs(40),
  width: hs(40),
  backgroundColor: '#192a56',
  top: vs(135),
  left: hs(160),
  borderRadius: 50
},
circle4:{
  height: vs(30),
  width: hs(30),
  backgroundColor: '#fffcf3',
  top: vs(100),
  left: hs(165),
  borderRadius: 50
},

 
    
})