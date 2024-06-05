import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const LoadScreen = () => {
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
        fontSize: 30,
        color: '#fffcf3',
        textAlign: 'center',
        top: 250,
        fontWeight: '700'
    },
    circle:{
        height: 70,
        width: 70,
        backgroundColor: '#fffcf3',
        top: 300,
        left: 145,
        borderRadius: 50
    },
    circle1:{
      height: 60,
      width: 60,
      backgroundColor: '#192a56',
      top: 235,
      left: 150,
      borderRadius: 50
  },
  circle2:{
    height: 50,
    width: 50,
    backgroundColor: '#fffcf3',
    top: 180,
    left: 155,
    borderRadius: 50
},
circle3:{
  height: 40,
  width: 40,
  backgroundColor: '#192a56',
  top: 135,
  left: 160,
  borderRadius: 50
},
circle4:{
  height: 30,
  width: 30,
  backgroundColor: '#fffcf3',
  top: 100,
  left: 165,
  borderRadius: 50
},

 
    
})